import { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from 'react'
import { useAuth as useAuthHook } from '@/hooks/useAuth'
import { AuthScreen } from '@/components/AuthScreen'

interface AuthContextValue {
  isAuthenticated: boolean
  userId: string | null
  username: string | null
  loading: boolean
  login: (username: string, pin: string) => Promise<{ error: string | null }>
  signup: (username: string, pin: string) => Promise<{ error: string | null }>
  logout: () => void
  showAuth: boolean
  openAuth: () => void
  closeAuth: () => void
}

const AuthContext = createContext<AuthContextValue | null>(null)

export function AuthProvider({ children }: { children: ReactNode }) {
  const { isAuthenticated, userId, username, loading, login, signup, logout } = useAuthHook()
  const [showAuth, setShowAuth] = useState(false)

  useEffect(() => {
    if (isAuthenticated) setShowAuth(false)
  }, [isAuthenticated])

  const openAuth = useCallback(() => setShowAuth(true), [])
  const closeAuth = useCallback(() => setShowAuth(false), [])

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, userId, username, loading, login, signup, logout, showAuth, openAuth, closeAuth }}
    >
      {children}
      {showAuth && !isAuthenticated && (
        <div
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={(e) => { if (e.target === e.currentTarget) closeAuth() }}
        >
          <div className="w-full max-w-sm">
            <AuthScreen onLogin={login} onSignup={signup} />
          </div>
        </div>
      )}
    </AuthContext.Provider>
  )
}

export function useAuth(): AuthContextValue {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used within AuthProvider')
  return ctx
}
