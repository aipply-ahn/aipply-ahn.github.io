import { useEffect, useState } from 'react'
import { site } from '../data/site.js'

// 게임 HUD 스타일 상단 바: 스테이지 메뉴 + 스크롤 탐험 진행률
const links = [
  ['01', 'Research', '#research'],
  ['02', 'Publications', '#publications'],
  ['03', 'Crew', '#people'],
  ['04', 'Log', '#news'],
  ['05', 'Quest', '#join'],
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight
      setProgress(max > 0 ? Math.min(100, Math.round((window.scrollY / max) * 100)) : 0)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b-2 border-white/10 bg-space/90 backdrop-blur">
      <nav className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#top" className="flex items-center gap-2 font-pixel text-sm">
          <span className="h-2.5 w-2.5 bg-flare" />
          {site.name}
        </a>
        <ul className="hidden gap-6 md:flex">
          {links.map(([n, label, href]) => (
            <li key={href}>
              <a href={href} className="hud text-suit/60 transition hover:text-flare">
                <span className="text-suit/30">{n}</span> {label}
              </a>
            </li>
          ))}
        </ul>
        <button
          className="p-2 text-suit/80 md:hidden"
          aria-label="메뉴 열기"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </nav>

      {open && (
        <ul className="space-y-1 px-4 pb-4 md:hidden">
          {links.map(([n, label, href]) => (
            <li key={href}>
              <a href={href} onClick={() => setOpen(false)} className="hud block px-3 py-2 hover:bg-white/5">
                <span className="text-suit/30">{n}</span> {label}
              </a>
            </li>
          ))}
        </ul>
      )}

      {/* 탐험 진행률: 우주인이 바를 따라 이동 */}
      <div className="relative h-1.5 bg-white/5" aria-hidden="true">
        <div className="h-full bg-gradient-to-r from-visor to-flare transition-[width] duration-150" style={{ width: `${progress}%` }} />
        <img
          src="/images/hero-astronaut.png"
          alt=""
          className="absolute -top-[13px] h-7 w-7 -translate-x-1/2 transition-[left] duration-150"
          style={{ left: `${Math.max(2, progress)}%` }}
        />
      </div>
      <p className="hud pointer-events-none absolute right-4 top-[62px] hidden text-[10px] text-suit/40 sm:block">
        Explored {progress}%
      </p>
    </header>
  )
}
