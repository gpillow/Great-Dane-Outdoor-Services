'use client'

import React, { useEffect, useRef } from 'react'

export default function BeforeAfterSlider({ before, after, beforeAlt, afterAlt }: {
  before: string; after: string; beforeAlt: string; afterAlt: string
}) {
  const containerRef = useRef<HTMLDivElement>(null)
  const clipRef = useRef<HTMLDivElement>(null)
  const lineRef = useRef<HTMLDivElement>(null)
  const handleRef = useRef<HTMLDivElement>(null)
  const dragging = useRef(false)
  const rafId = useRef<number | null>(null)

  const applyPos = (pos: number) => {
    if (clipRef.current)   clipRef.current.style.clipPath = `inset(0 ${100 - pos}% 0 0)`
    if (lineRef.current)   lineRef.current.style.left = `${pos}%`
    if (handleRef.current) handleRef.current.style.left = `${pos}%`
  }

  const calcPos = (clientX: number) => {
    if (!containerRef.current) return
    const { left, width } = containerRef.current.getBoundingClientRect()
    const pos = Math.max(2, Math.min(98, ((clientX - left) / width) * 100))
    if (rafId.current) cancelAnimationFrame(rafId.current)
    rafId.current = requestAnimationFrame(() => applyPos(pos))
  }

  useEffect(() => {
    applyPos(50)
    const onUp = () => { dragging.current = false }
    const onMove = (e: MouseEvent) => { if (dragging.current) calcPos(e.clientX) }
    window.addEventListener('mouseup', onUp)
    window.addEventListener('mousemove', onMove)
    return () => {
      window.removeEventListener('mouseup', onUp)
      window.removeEventListener('mousemove', onMove)
      if (rafId.current) cancelAnimationFrame(rafId.current)
    }
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div
      ref={containerRef}
      onMouseDown={(e) => { dragging.current = true; calcPos(e.clientX) }}
      onTouchStart={(e) => calcPos(e.touches[0].clientX)}
      onTouchMove={(e) => calcPos(e.touches[0].clientX)}
      style={{ position: 'relative', cursor: 'ew-resize', userSelect: 'none', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 50px 120px rgba(0,0,0,0.9)' }}
    >
      {/* After — full background */}
      <img src={after} alt={afterAlt} loading="lazy" decoding="async" width="1600" height="2134" style={{ width: '100%', height: 'clamp(380px, 50vw, 680px)', objectFit: 'cover', display: 'block' }} />

      {/* Before — clipped, direct DOM update via ref */}
      <div ref={clipRef} style={{ position: 'absolute', inset: 0, clipPath: 'inset(0 50% 0 0)', willChange: 'clip-path' }}>
        <img src={before} alt={beforeAlt} loading="lazy" decoding="async" width="1600" height="2134" style={{ width: '100%', height: 'clamp(380px, 50vw, 680px)', objectFit: 'cover', display: 'block', filter: 'brightness(0.65) saturate(0.7)' }} />
      </div>

      {/* Divider line */}
      <div ref={lineRef} style={{ position: 'absolute', inset: 0, left: '50%', transform: 'translateX(-50%)', width: '2px', background: 'linear-gradient(180deg, transparent, #7dff9e 15%, #7dff9e 85%, transparent)', filter: 'drop-shadow(0 0 10px #7dff9e)', pointerEvents: 'none', willChange: 'left' }} />

      {/* Handle */}
      <div ref={handleRef} style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '56px', height: '56px', borderRadius: '50%', background: '#303030', border: '2px solid #7dff9e', boxShadow: '0 0 0 5px rgba(125,255,158,0.12), 0 0 35px rgba(125,255,158,0.45)', display: 'flex', alignItems: 'center', justifyContent: 'center', pointerEvents: 'none', gap: '4px', willChange: 'left' }}>
        <span style={{ color: '#7dff9e', fontSize: '0.75rem' }}>◀</span>
        <span style={{ color: '#7dff9e', fontSize: '0.75rem' }}>▶</span>
      </div>

      <div style={{ position: 'absolute', top: '1.5rem', left: '1.5rem', background: 'rgba(0,0,0,0.8)', color: '#aaa', padding: '0.4rem 1.2rem', borderRadius: '999px', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.15em', pointerEvents: 'none' }}>Before</div>
      <div style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', background: 'rgba(74,124,89,0.9)', color: '#fff', padding: '0.4rem 1.2rem', borderRadius: '999px', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.15em', pointerEvents: 'none' }}>After</div>
      <div style={{ position: 'absolute', bottom: '1.5rem', left: '50%', transform: 'translateX(-50%)', background: 'rgba(0,0,0,0.7)', color: '#989898', padding: '0.3rem 1rem', borderRadius: '999px', fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', pointerEvents: 'none', whiteSpace: 'nowrap' }}>Drag to reveal</div>
    </div>
  )
}
