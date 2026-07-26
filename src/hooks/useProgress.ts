import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';

export const useProgress = (storageKey: string, recordType: string, userId: string | null) => {
  const [completedIds, setCompletedIds] = useState<number[]>([]);
  const [recordId, setRecordId] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      setLoading(true);
      if (userId) {
        const { data } = await supabase
          .from('records')
          .select('id, data')
          .eq('user_id', userId)
          .eq('record_type', recordType)
          .maybeSingle();

        if (cancelled) return;

        if (data?.data?.completedIds) {
          setCompletedIds(data.data.completedIds);
          setRecordId(data.id);
        } else {
          const saved = localStorage.getItem(storageKey);
          if (saved) setCompletedIds(JSON.parse(saved));
          setRecordId(null);
        }
      } else {
        const saved = localStorage.getItem(storageKey);
        if (saved) setCompletedIds(JSON.parse(saved));
        setRecordId(null);
      }
      setLoading(false);
    }

    load();
    return () => { cancelled = true; };
  }, [userId, storageKey, recordType]);

  useEffect(() => {
    if (loading) return;

    if (userId) {
      if (recordId) {
        supabase
          .from('records')
          .update({ data: { completedIds } })
          .eq('id', recordId)
          .then(({ error }) => {
            if (error) console.error('Failed to update progress:', error);
          });
      } else {
        supabase
          .from('records')
          .insert({
            user_id: userId,
            record_type: recordType,
            data: { completedIds },
          })
          .select('id')
          .single()
          .then(({ data, error }) => {
            if (error) {
              console.error('Failed to insert progress:', error);
            } else if (data) {
              setRecordId(data.id);
            }
          });
      }
    } else {
      localStorage.setItem(storageKey, JSON.stringify(completedIds));
    }
  }, [completedIds, loading, userId, recordId, storageKey, recordType]);

  const toggleComplete = (id: number) => {
    setCompletedIds(prev =>
      prev.includes(id)
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  const isCompleted = (id: number) => completedIds.includes(id);

  return { completedIds, toggleComplete, isCompleted, loading };
};
