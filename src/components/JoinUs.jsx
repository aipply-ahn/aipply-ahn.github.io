import { site } from '../data/site.js'

const rewards = ['국제 학술지·학회 논문', 'AI × 바이오/제조 실전 데이터', '산학 프로젝트 경험', '학회 발표·수상 기회']
const roles = ['석사·박사 과정', '학부연구생', '박사후연구원']

export default function JoinUs() {
  return (
    <section id="join" className="section">
      <div className="relative overflow-hidden border-4 border-space bg-flare p-8 text-space sm:p-12" style={{ boxShadow: '8px 8px 0 0 rgba(240,138,36,.25)' }}>
        <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-white/20 blur-3xl" />
        <p className="hud relative inline-block bg-space px-2 py-1 text-flare">
          <span className="blink">!</span> New Quest Available
        </p>
        <h2 className="relative mt-5 max-w-2xl font-display text-3xl font-bold tracking-tight sm:text-5xl">
          함께 새로운 궤도를 그릴 크루를 찾습니다
        </h2>
        <p className="relative mt-5 max-w-2xl text-space/80">
          바이오 또는 제조 도메인에 관심이 있고 AI로 실제 문제를 풀고 싶은 분이라면 전공과 관계없이 환영합니다.
          CV와 관심 연구 분야를 메일로 보내주세요.
        </p>

        <div className="relative mt-8 grid gap-6 sm:grid-cols-2">
          <div>
            <p className="hud text-space/60">Class · 모집 대상</p>
            <ul className="mt-2 space-y-1 font-semibold">
              {roles.map((r) => <li key={r}>▸ {r}</li>)}
            </ul>
          </div>
          <div>
            <p className="hud text-space/60">Rewards · 보상</p>
            <ul className="mt-2 space-y-1 font-semibold">
              {rewards.map((r) => <li key={r}>★ {r}</li>)}
            </ul>
          </div>
        </div>

        <a
          href={`mailto:${site.email}?subject=[Join Us] 지원 문의`}
          className="pixel-btn relative mt-10 border-space bg-space text-flare hover:bg-space-700"
        >
          ▶ Accept Quest · {site.email}
        </a>
      </div>
    </section>
  )
}
