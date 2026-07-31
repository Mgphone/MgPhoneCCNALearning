import { useCallback, useEffect, useRef, useState } from 'react'
import { Coffee, Loader2 } from 'lucide-react'
import { useAuth } from '@/contexts/AuthContext'
import { useActiveSubscription } from '@/hooks/useActiveSubscription'
import { createCheckoutSession } from '@/lib/donations'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { cn } from '@/lib/utils'

const POSITION_KEY = 'bmc_position'
const PRESETS = [300, 500, 1000]

interface StoredPosition {
  x: number
  y: number
}

function loadPosition(): StoredPosition | null {
  try {
    const raw = localStorage.getItem(POSITION_KEY)
    if (!raw) return null
    const parsed = JSON.parse(raw) as StoredPosition
    if (typeof parsed.x !== 'number' || typeof parsed.y !== 'number') return null
    return parsed
  } catch {
    return null
  }
}

export function BuyMeACoffee() {
  const { userId } = useAuth()
  const { hasActiveSubscription } = useActiveSubscription(userId)

  const [open, setOpen] = useState(false)
  const [position, setPosition] = useState<StoredPosition | null>(() => loadPosition())
  const [amount, setAmount] = useState(500)
  const [isCustom, setIsCustom] = useState(false)
  const [customAmount, setCustomAmount] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')

  const wrapperRef = useRef<HTMLDivElement>(null)
  const dragState = useRef<{
    pointerId: number
    startX: number
    startY: number
    originX: number
    originY: number
    moved: boolean
  } | null>(null)
  const wasDragged = useRef(false)

  const clampPosition = useCallback((pos: StoredPosition): StoredPosition => {
    const width = wrapperRef.current?.getBoundingClientRect().width ?? 56
    const height = wrapperRef.current?.getBoundingClientRect().height ?? 56
    const maxX = Math.max(0, window.innerWidth - width)
    const maxY = Math.max(0, window.innerHeight - height)
    return {
      x: Math.min(Math.max(0, pos.x), maxX),
      y: Math.min(Math.max(0, pos.y), maxY),
    }
  }, [])

  useEffect(() => {
    if (position) {
      setPosition(clampPosition(position))
    }
  }, [clampPosition, position])

  useEffect(() => {
    const handleResize = () => {
      setPosition((prev) => (prev ? clampPosition(prev) : prev))
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [clampPosition])

  if (hasActiveSubscription) {
    return null
  }

  const handlePointerDown = (e: React.PointerEvent<HTMLButtonElement>) => {
    e.currentTarget.setPointerCapture(e.pointerId)
    const rect = e.currentTarget.getBoundingClientRect()
    dragState.current = {
      pointerId: e.pointerId,
      startX: e.clientX,
      startY: e.clientY,
      originX: position?.x ?? rect.left,
      originY: position?.y ?? rect.top,
      moved: false,
    }
    wasDragged.current = false
  }

  const handlePointerMove = (e: React.PointerEvent<HTMLButtonElement>) => {
    const drag = dragState.current
    if (!drag || e.pointerId !== drag.pointerId) return
    const dx = e.clientX - drag.startX
    const dy = e.clientY - drag.startY
    if (Math.abs(dx) > 4 || Math.abs(dy) > 4) {
      drag.moved = true
      wasDragged.current = true
    }
    if (!drag.moved) return
    setPosition(
      clampPosition({ x: drag.originX + dx, y: drag.originY + dy })
    )
  }

  const handlePointerUp = (e: React.PointerEvent<HTMLButtonElement>) => {
    const drag = dragState.current
    if (!drag || e.pointerId !== drag.pointerId) return
    if (drag.moved) {
      const final = clampPosition({ x: drag.originX + (e.clientX - drag.startX), y: drag.originY + (e.clientY - drag.startY) })
      setPosition(final)
      localStorage.setItem(POSITION_KEY, JSON.stringify(final))
    }
    dragState.current = null
  }

  const handleClick = () => {
    if (wasDragged.current) {
      wasDragged.current = false
      return
    }
    setError('')
    setOpen(true)
  }

  const selectPreset = (preset: number) => {
    setIsCustom(false)
    setAmount(preset)
    setError('')
  }

  const selectCustom = (value: string) => {
    setCustomAmount(value)
    setIsCustom(true)
    setError('')
  }

  const handleContinue = async () => {
    const finalAmount = isCustom
      ? Math.round(parseFloat(customAmount || '0') * 100)
      : amount
    if (!Number.isInteger(finalAmount) || finalAmount < 100) {
      setError('Enter an amount of £1 or more')
      return
    }
    if (finalAmount > 50000) {
      setError('Maximum donation is £500')
      return
    }

    setSubmitting(true)
    setError('')
    const response = await createCheckoutSession({
      amount: finalAmount,
      currency: 'gbp',
      userId: userId ?? undefined,
    })
    if (response.url) {
      window.location.href = response.url
    } else {
      setError(response.error ?? 'Something went wrong. Please try again.')
      setSubmitting(false)
    }
  }

  return (
    <>
      <div
        ref={wrapperRef}
        className={cn('fixed z-40 group', position ? '' : 'bottom-4 right-4')}
        style={position ? { left: position.x, top: position.y } : undefined}
      >
        <button
          type="button"
          aria-label="Buy me a coffee"
          onClick={handleClick}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={() => {
            dragState.current = null
          }}
          className="flex h-14 items-center gap-2 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 px-5 font-bold text-slate-950 shadow-lg shadow-amber-500/25 transition-all select-none touch-none hover:scale-105 hover:shadow-amber-500/40 active:scale-95 animate-in fade-in zoom-in-95 duration-300"
        >
          <Coffee size={20} />
          <span className="hidden text-sm sm:inline">Buy me a coffee</span>
        </button>
        <span className="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-lg bg-slate-900 border border-slate-700 px-3 py-1.5 text-xs font-medium text-slate-200 opacity-0 transition-opacity group-hover:opacity-100">
          Buy me a coffee
        </span>
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-sm">
          <DialogHeader>
            <DialogTitle className="text-xl">☕ Buy Me a Coffee</DialogTitle>
            <DialogDescription>
              Your donation keeps MyCCNA quizzes, labs and learning materials free for everyone.
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-3">
            <div className="grid grid-cols-3 gap-2">
              {PRESETS.map((preset) => (
                <button
                  key={preset}
                  type="button"
                  onClick={() => selectPreset(preset)}
                  className={cn(
                    'h-12 rounded-xl border font-bold text-sm transition-all',
                    !isCustom && amount === preset
                      ? 'border-amber-500 bg-amber-500/15 text-amber-400'
                      : 'border-slate-700 bg-slate-900 text-slate-300 hover:border-slate-500'
                  )}
                >
                  £{preset / 100}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-2">
              <span className="text-sm font-semibold text-slate-300">£</span>
              <Input
                type="number"
                min={1}
                step={1}
                placeholder="Custom amount"
                value={customAmount}
                onChange={(e) => selectCustom(e.target.value)}
                className="h-12"
              />
            </div>

            {error && <p className="text-sm text-red-400">{error}</p>}

            <Button
              type="button"
              onClick={handleContinue}
              disabled={submitting}
              className="h-12 w-full text-base font-bold bg-amber-500 hover:bg-amber-400 text-slate-950"
            >
              {submitting ? (
                <>
                  <Loader2 size={18} className="animate-spin" />
                  Redirecting to Stripe...
                </>
              ) : (
                'Continue with Stripe'
              )}
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
