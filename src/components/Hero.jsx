import { site } from '../data/site.js'
import { research } from '../data/research.js'

export default function Hero() {
  return (
    <section id="top" className="stars relative overflow-hidden">
      {/* 은은한 행성 광원 */}
      <div className="pointer-events-none absolute -right-40 top-10 h-[520px] w-[520px] rounded-full bg-visor/10 blur-3xl" />
      <div className="pointer-events-none absolute -left-32 bottom-0 h-[360px] w-[360px] rounded-full bg-flare/10 blur-3xl" />

      <div className="relative mx-auto grid min-h-[min(100svh,880px)] max-w-6xl items-center gap-10 px-4 pb-16 pt-28 sm:px-6 md:grid-cols-[1.15fr_1fr]">
        <div>
          <p className="eyebrow">{site.affiliationKo}</p>
          <h1 className="mt-5 font-display text-5xl font-bold leading-[1.02] tracking-tight sm:text-7xl">
            Applying AI to
            <br />
            <span className="text-visor">Life</span> &amp; <span className="text-flare">Making</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-suit/70 sm:text-lg">{site.intro}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            {research.map((r) => (
              <a
                key={r.id}
                href={`#${r.id}`}
                className={`rounded-full border px-5 py-2.5 text-sm font-medium transition ${
                  r.accent === 'visor'
                    ? 'border-visor/40 text-visor hover:bg-visor/10'
                    : 'border-flare/40 text-flare hover:bg-flare/10'
                }`}
              >
                {r.titleKo} →
              </a>
            ))}
          </div>
        </div>

        <div className="relative mx-auto aspect-square w-full max-w-[420px]">
          <div className="absolute inset-6 rounded-full border border-white/10" />
          <div className="absolute inset-0 rounded-full border border-dashed border-white/5" />
          <img
            src="/images/hero-astronaut.png"
            alt="연구실을 상징하는 우주인 일러스트"
            className="float relative w-full"
            width="429"
            height="426"
          />
        </div>
      </div>
    </section>
  )
}
