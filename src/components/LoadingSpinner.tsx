import { Loader2 } from "lucide-react";

interface LoadingSpinnerProps {
  message?: string;
}

export function LoadingSpinner({ message = "Loading..." }: LoadingSpinnerProps) {
  return (
    <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center gap-4">
      <Loader2 size={32} className="text-cyan-400 animate-spin" />
      {message && (
        <p className="text-sm text-slate-400 font-medium">{message}</p>
      )}
    </div>
  );
}
