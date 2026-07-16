import { useState, useEffect, useCallback } from 'react'
import { supabase } from '@/lib/supabase'

const SESSION_KEY = 'ccna_session'

interface SessionData {
  userId: string
  username: string
}

function loadSession(): SessionData | null {
  try {
    const raw = localStorage.getItem(SESSION_KEY)
    return raw ? JSON.parse(raw) : null
  } catch {
    return null
  }
}

function saveSession(data: SessionData) {
  localStorage.setItem(SESSION_KEY, JSON.stringify(data))
}

function clearSession() {
  localStorage.removeItem(SESSION_KEY)
}

async function hashPin(pin: string): Promise<string> {
  const encoder = new TextEncoder()
  const data = encoder.encode(pin)
  const hashBuffer = await crypto.subtle.digest('SHA-256', data)
  const hashArray = Array.from(new Uint8Array(hashBuffer))
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('')
}

export function useAuth() {
  const [session, setSession] = useState<SessionData | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setSession(loadSession())
    setLoading(false)
  }, [])

  const login = useCallback(async (usernameInput: string, pin: string) => {
    const pinHash = await hashPin(pin)
    const { data, error } = await supabase.rpc('authenticate_user', {
      p_username: usernameInput,
      p_pin_hash: pinHash,
    })
    if (error) return { error: error.message }
    if (!data) return { error: 'Wrong username or PIN' }
    const sessionData: SessionData = { userId: data, username: usernameInput }
    saveSession(sessionData)
    setSession(sessionData)
    return { error: null }
  }, [])

  const signup = useCallback(async (usernameInput: string, pin: string) => {
    const pinHash = await hashPin(pin)
    const { data, error } = await supabase.rpc('register_user', {
      p_username: usernameInput,
      p_pin_hash: pinHash,
    })
    if (error) {
      if (error.message.includes('already taken')) {
        return { error: 'That username is taken. Try a different one.' }
      }
      return { error: error.message }
    }
    const sessionData: SessionData = { userId: data, username: usernameInput }
    saveSession(sessionData)
    setSession(sessionData)
    return { error: null }
  }, [])

  const logout = useCallback(() => {
    clearSession()
    setSession(null)
  }, [])

  return {
    isAuthenticated: session !== null,
    userId: session?.userId ?? null,
    username: session?.username ?? null,
    loading,
    login,
    signup,
    logout,
  }
}
