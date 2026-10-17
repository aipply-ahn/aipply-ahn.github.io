import { research, convergence } from '../data/research.js'

const accentCls = {
  visor: { text: 'text-visor', border: 'hover:border-visor/50', dot: 'bg-visor', glow: 'bg-visor/15' },
  flare: { text: 'text-flare', border: 'hover:border-flare/50', dot: 'bg-flare', glow: 'bg-flare/15' },
}

export default function Research() {
  return (
    <section id="research" className="section">
      <p className="eyebrow">Research</p>
      <h2 className="h2">두 개의 궤도, 하나의 AI</h2>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {research.map((r) => {
          const a = accentCls[r.accent]
          return (
            <article id={r.id} key={r.id} className={`card group relative overflow-hidden p-8 transition ${a.border}`}>
              <div className={`pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full blur-3xl ${a.glow}`} />
              <p className={`font-display text-xs tracking-[0.25em] ${a.text}`}>{r.code}</p>
              <h3 className="mt-4 font-display text-3xl font-bold">{r.title}</h3>
              <p className={`mt-1 text-lg font-semibold ${a.text}`}>{r.titleKo}</p>
              <p className="mt-5 leading-relaxed text-suit/70">{r.summary}</p>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {r.topics.map((t, i) => (
                  <li key={t.name} className="rounded-xl border border-white/10 bg-space/60 p-4">
                    <p className={`font-display text-[11px] tracking-[0.2em] ${a.text}`}>{String(i + 1).padStart(2, '0')}</p>
                    <p className="mt-1.5 text-sm font-semibold leading-snug text-suit/90">{t.name}</p>
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {t.tags.map((tag) => (
                        <span key={tag} className="rounded-full border border-white/10 px-2 py-0.5 text-[11px] text-suit/55">{tag}</span>
                      ))}
                    </div>
                  </li>
                ))}
              </ul>
              <a
                href="#publications"
                onClick={() => window.dispatchEvent(new CustomEvent('pub-filter', { detail: r.id }))}
                className={`mt-6 inline-block text-sm font-medium ${a.text} hover:underline`}
              >
                {r.titleKo} 관련 논문 보기 →
              </a>
              {r.highlights.length > 0 && (
                <div className="mt-6 flex flex-wrap gap-2 border-t border-white/10 pt-5">
                  <span className="text-xs text-suit/40">개발 도구</span>
                  {r.highlights.map((h) => (
                    <span key={h} className={`font-display text-xs ${a.text}`}>{h}</span>
                  ))}
                </div>
              )}
            </article>
          )
        })}
      </div>

      <div className="card mt-6 flex flex-col gap-2 p-6 sm:flex-row sm:items-center sm:gap-6">
        <p className="font-display text-lg font-bold">
          <span className="text-visor">Bio</span> × <span className="text-flare">Manufacturing</span>
        </p>
        <p className="text-sm text-suit/70">{convergence.text}</p>
      </div>
    </section>
  )
}
