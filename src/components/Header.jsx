import { useEffect, useState } from 'react'
import { site } from '../data/site.js'

const links = [
  ['Research', '#research'],
  ['Publications', '#publications'],
  ['People', '#people'],
  ['News', '#news'],
  ['Join Us', '#join'],
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors ${
        scrolled || open ? 'border-b border-white/10 bg-space/85 backdrop-blur' : ''
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#top" className="flex items-center gap-2 font-display text-lg font-bold">
          <span className="h-2.5 w-2.5 rounded-full bg-flare" />
          {site.name}
        </a>
        <ul className="hidden gap-8 text-sm text-suit/70 md:flex">
          {links.map(([label, href]) => (
            <li key={href}>
              <a href={href} className="transition hover:text-suit">{label}</a>
            </li>
          ))}
        </ul>
        <button
          className="rounded-lg p-2 text-suit/80 md:hidden"
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
          {links.map(([label, href]) => (
            <li key={href}>
              <a href={href} onClick={() => setOpen(false)} className="block rounded-lg px-3 py-2 hover:bg-white/5">
                {label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}
