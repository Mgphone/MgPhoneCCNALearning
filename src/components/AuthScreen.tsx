import { useState } from 'react'
import { GraduationCap, LogIn, UserPlus, Loader2 } from 'lucide-react'

interface AuthScreenProps {
  onLogin: (username: string, pin: string) => Promise<{ error: string | null }>
  onSignup: (username: string, pin: string) => Promise<{ error: string | null }>
}

export function AuthScreen({ onLogin, onSignup }: AuthScreenProps) {
  const [mode, setMode] = useState<'login' | 'signup'>('login')
  const [username, setUsername] = useState('')
  const [pin, setPin] = useState('')
  const [error, setError] = useState('')
  const [submitting, setSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    const trimmedUser = username.trim()
    if (!trimmedUser) {
      setError('Enter a username')
      return
    }
    if (pin.length < 4) {
      setError('PIN must be at least 4 characters')
      return
    }

    setSubmitting(true)
    const result =
      mode === 'login'
        ? await onLogin(trimmedUser, pin)
        : await onSignup(trimmedUser, pin)
    setSubmitting(false)

    if (result.error) {
      setError(result.error)
    }
  }

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center p-4">
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <div className="inline-flex bg-cyan-500/10 p-4 rounded-2xl mb-4">
            <GraduationCap className="text-cyan-400" size={36} />
          </div>
          <h1 className="text-2xl font-black text-white tracking-tight">
            CCNA Mastery
          </h1>
          <p className="text-slate-400 text-sm mt-1">
            {mode === 'login' ? 'Sign in to continue' : 'Create your account'}
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-4"
        >
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-1.5">
              Username
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
              autoCapitalize="off"
              autoComplete="username"
              className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 transition-all"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-300 mb-1.5">
              PIN
            </label>
            <input
              type="password"
              value={pin}
              onChange={(e) => setPin(e.target.value)}
              placeholder="4+ character PIN"
              autoComplete={mode === 'login' ? 'current-password' : 'new-password'}
              className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 transition-all"
            />
          </div>

          {error && (
            <p className="text-red-400 text-sm text-center">{error}</p>
          )}

          <button
            type="submit"
            disabled={submitting}
            className="w-full flex items-center justify-center gap-2 bg-cyan-500 hover:bg-cyan-400 disabled:bg-cyan-500/50 text-slate-950 font-bold rounded-xl py-2.5 text-sm transition-colors"
          >
            {submitting ? (
              <Loader2 size={16} className="animate-spin" />
            ) : mode === 'login' ? (
              <LogIn size={16} />
            ) : (
              <UserPlus size={16} />
            )}
            {mode === 'login' ? 'Sign In' : 'Create Account'}
          </button>

          <p className="text-center text-sm text-slate-500">
            {mode === 'login' ? (
              <>
                No account?{' '}
                <button
                  type="button"
                  onClick={() => { setMode('signup'); setError('') }}
                  className="text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
                >
                  Create one
                </button>
              </>
            ) : (
              <>
                Already have an account?{' '}
                <button
                  type="button"
                  onClick={() => { setMode('login'); setError('') }}
                  className="text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
                >
                  Sign in
                </button>
              </>
            )}
          </p>
        </form>
      </div>
    </div>
  )
}
