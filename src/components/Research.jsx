import { useState } from 'react'
import { research, convergence } from '../data/research.js'

const accentCls = {
  visor: { text: 'text-visor', border: 'border-visor', btn: 'hover:bg-visor', bg: 'bg-visor', ring: 'ring-visor/40', planet: 'from-visor via-visor-deep to-space' },
  flare: { text: 'text-flare', border: 'border-flare', btn: 'hover:bg-flare', bg: 'bg-flare', ring: 'ring-flare/40', planet: 'from-flare-soft via-flare to-space' },
}
// 행성 위치(지도 안 %) — research 배열 순서와 대응
const planetPos = [
  { left: '26%', top: '58%' },
  { left: '74%', top: '38%' },
]

function Planet({ r, pos, active, onSelect }) {
  const a = accentCls[r.accent]
  return (
    <button
      onClick={onSelect}
      aria-pressed={active}
      className="group absolute -translate-x-1/2 -translate-y-1/2 text-center"
      style={pos}
    >
      <span
        className={`relative block h-24 w-24 rounded-full bg-gradient-to-br ${a.planet} transition sm:h-32 sm:w-32 ${
          active ? `ring-4 ${a.ring} scale-110` : 'opacity-70 group-hover:opacity-100'
        }`}
      >
        {/* 행성 고리 */}
        <span className="absolute left-1/2 top-1/2 h-6 w-[150%] -translate-x-1/2 -translate-y-1/2 -rotate-12 rounded-[50%] border-2 border-white/25" />
      </span>
      <span className={`hud mt-3 block ${active ? a.text : 'text-suit/50'}`}>{r.code}</span>
      <span className="mt-0.5 block text-sm font-semibold">{r.titleKo}</span>
    </button>
  )
}

export default function Research() {
  const [sel, setSel] = useState(0)
  const r = research[sel]
  const a = accentCls[r.accent]

  return (
    <section id="research" className="section">
      <p className="hud text-visor">Stage 01 · Research</p>
      <h2 className="h2">목적지를 선택하세요</h2>
      <p className="mt-3 text-suit/60">두 개의 행성, 하나의 AI. 행성을 누르면 미션 브리핑이 열립니다.</p>

      <div className="mt-12 grid gap-6 lg:grid-cols-[1fr_1.1fr]">
        {/* 성간 지도 */}
        <div className="pixel-box stars relative aspect-[4/3] overflow-hidden lg:aspect-auto lg:min-h-[420px]">
          <p className="hud absolute left-4 top-3 text-suit/40">Star Map</p>
          <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 75" preserveAspectRatio="none" aria-hidden="true">
            <path d="M26 43.5 C 40 20, 60 60, 74 28.5" fill="none" stroke="rgba(238,241,242,.25)" strokeWidth="0.4" strokeDasharray="1.5 1.5" />
          </svg>
          {research.map((p, i) => (
            <Planet key={p.id} r={p} pos={planetPos[i]} active={i === sel} onSelect={() => setSel(i)} />
          ))}
          {/* 선택한 행성 옆으로 이동하는 우주인 */}
          <img
            src="/images/hero-astronaut.png"
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute h-16 w-16 -translate-x-1/2 -translate-y-full transition-all duration-700 ease-in-out sm:h-20 sm:w-20"
            style={{
              left: `calc(${planetPos[sel].left} + 11%)`,
              top: `calc(${planetPos[sel].top} - 6%)`,
            }}
          />
        </div>

        {/* 미션 브리핑 */}
        <article id={r.id} className={`pixel-box border-l-4 ${a.border} p-6 sm:p-8`}>
          <p className={`hud ${a.text}`}>Mission Briefing · {r.code}</p>
          <h3 className="mt-3 font-display text-3xl font-bold">{r.title}</h3>
          <p className={`mt-1 text-lg font-semibold ${a.text}`}>{r.titleKo}</p>
          <p className="mt-4 leading-relaxed text-suit/70">{r.summary}</p>

          <p className="hud mt-6 text-suit/40">Missions</p>
          <ul className="mt-2 divide-y divide-white/5">
            {r.topics.map((t, i) => (
              <li key={t.name} className="flex items-start gap-3 py-2.5">
                <span className={`hud mt-0.5 shrink-0 ${a.text}`}>{String(i + 1).padStart(2, '0')}</span>
                <div>
                  <p className="text-sm font-semibold text-suit/90">{t.name}</p>
                  <p className="mt-1 flex flex-wrap gap-1.5">
                    {t.tags.map((tag) => (
                      <span key={tag} className="border border-white/10 px-1.5 py-px font-pixel text-[10px] text-suit/50">{tag}</span>
                    ))}
                  </p>
                </div>
              </li>
            ))}
          </ul>

          {r.highlights.length > 0 && (
            <p className="mt-5 flex flex-wrap items-center gap-2 border-t border-white/10 pt-4">
              <span className="hud text-suit/40">Unlocked Tools</span>
              {r.highlights.map((h) => (
                <span key={h} className={`font-pixel text-xs ${a.text}`}>{h}</span>
              ))}
            </p>
          )}

          <a
            href="#publications"
            onClick={() => window.dispatchEvent(new CustomEvent('pub-filter', { detail: r.id }))}
            className={`pixel-btn mt-6 ${a.border} bg-space text-suit ${a.btn} hover:text-space`}
          >
            ▶ {r.titleKo} 논문 탐색
          </a>
        </article>
      </div>

      <div className="pixel-box mt-6 flex flex-col gap-2 p-5 sm:flex-row sm:items-center sm:gap-6">
        <p className="hud shrink-0 text-suit/50">
          Hidden Stage · <span className="text-visor">Bio</span> × <span className="text-flare">Manufacturing</span>
        </p>
        <p className="text-sm text-suit/70">{convergence.text}</p>
      </div>
    </section>
  )
}
