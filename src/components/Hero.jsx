import { useEffect, useState } from 'react'
import { site } from '../data/site.js'
import { research } from '../data/research.js'
import { publications } from '../data/publications.js'

const intl = publications.filter((p) => p.type === 'intl').length
const years = new Date().getFullYear() - site.since

// 플레이어 스탯: value / max 로 게이지 길이 결정
const stats = [
  { label: 'Publications', value: publications.length, max: 100, color: 'bg-visor' },
  { label: 'International', value: intl, max: publications.length, color: 'bg-visor' },
  { label: 'Research Orbits', value: research.length, max: research.length, color: 'bg-flare' },
  { label: 'Mission Time', value: `${years}Y`, ratio: Math.min(1, years / 10), color: 'bg-flare', note: `since ${site.since}` },
]

function Gauge({ ratio, color }) {
  const filled = Math.round(ratio * 10)
  return (
    <div className="mt-1.5 flex gap-[3px]" aria-hidden="true">
      {Array.from({ length: 10 }, (_, i) => (
        <span key={i} className={`h-2 flex-1 ${i < filled ? color : 'bg-white/10'}`} />
      ))}
    </div>
  )
}

// RPG 대화창 타자 효과
function useTypewriter(text, speed = 70) {
  const reduce = typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
  const [n, setN] = useState(reduce ? text.length : 0)
  useEffect(() => {
    if (n >= text.length) return
    const t = setTimeout(() => setN(n + 1), speed)
    return () => clearTimeout(t)
  }, [n, text, speed])
  return [text.slice(0, n), n >= text.length]
}

export default function Hero() {
  const [typed, done] = useTypewriter(site.slogan)

  return (
    <section id="top" className="stars relative overflow-hidden">
      <div className="pointer-events-none absolute -right-40 top-10 h-[520px] w-[520px] rounded-full bg-visor/10 blur-3xl" />
      <div className="pointer-events-none absolute -left-32 bottom-0 h-[360px] w-[360px] rounded-full bg-flare/10 blur-3xl" />

      <div className="relative mx-auto grid min-h-[min(100svh,900px)] max-w-6xl items-center gap-10 px-4 pb-16 pt-28 sm:px-6 md:grid-cols-[1.15fr_1fr]">
        <div>
          <p className="hud text-visor">Stage 00 · Launch — {site.affiliationKo}</p>
          <h1 className="mt-5 font-display text-5xl font-bold leading-[1.02] tracking-tight sm:text-7xl">
            Applying AI to
            <br />
            <span className="text-visor">Life</span> &amp; <span className="text-flare">Making</span>
          </h1>

          {/* 대화창 */}
          <div className="pixel-box mt-8 max-w-xl p-5">
            <p className="hud absolute -top-3 left-4 bg-flare px-2 py-0.5 text-space">Captain {site.pi.split(' ').pop()}</p>
            <p className="min-h-[2em] font-pixel text-lg leading-relaxed text-suit sm:text-xl">
              {typed}
              {!done && <span className="blink">_</span>}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-suit/60">{site.intro}</p>
            <span className="blink absolute bottom-2 right-3 font-pixel text-xs text-flare" aria-hidden="true">▼</span>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#research" className="pixel-btn border-flare bg-flare text-space hover:bg-flare-soft">
              ▶ Press Start
            </a>
            <a href="#join" className="pixel-btn border-white/20 bg-space-800 text-suit hover:border-flare hover:text-flare">
              + 크루 합류
            </a>
          </div>

          {/* 플레이어 스탯 */}
          <dl className="mt-10 grid max-w-xl grid-cols-2 gap-x-6 gap-y-5 sm:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="flex flex-col-reverse">
                <div>
                  <Gauge ratio={s.ratio ?? s.value / s.max} color={s.color} />
                  <dt className="hud mt-1.5 text-[10px] text-suit/45">{s.label}</dt>
                </div>
                <dd className="font-pixel text-2xl">{s.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative mx-auto aspect-square w-full max-w-[420px]">
          <div className="spin-slow absolute inset-6 rounded-full border border-dashed border-white/15">
            <span className="absolute -top-2 left-1/2 h-4 w-4 -translate-x-1/2 rounded-full bg-visor shadow-[0_0_16px_4px_rgba(63,182,230,.5)]" />
            <span className="absolute -bottom-2 left-1/2 h-3 w-3 -translate-x-1/2 rounded-full bg-flare shadow-[0_0_14px_4px_rgba(240,138,36,.5)]" />
          </div>
          <div className="absolute inset-0 rounded-full border border-white/5" />
          <img
            src="/images/hero-astronaut.png"
            alt="연구 행성을 탐험하는 우주인 캐릭터"
            className="float relative w-full"
            width="429"
            height="426"
          />
          <p className="hud absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap text-suit/40">Player 1 · Ready</p>
        </div>
      </div>
    </section>
  )
}
