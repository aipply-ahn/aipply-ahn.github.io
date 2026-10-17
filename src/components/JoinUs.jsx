import { site } from '../data/site.js'

export default function JoinUs() {
  return (
    <section id="join" className="section">
      <div className="relative overflow-hidden rounded-3xl bg-flare p-10 text-space sm:p-14">
        <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-white/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 left-1/3 h-72 w-72 rounded-full border-[28px] border-space/10" />
        <p className="relative font-display text-xs font-medium uppercase tracking-[0.25em] text-space/70">Join Us</p>
        <h2 className="relative mt-3 max-w-2xl font-display text-3xl font-bold tracking-tight sm:text-5xl">함께 새로운 궤도를 그릴 연구원을 찾습니다</h2>
        <p className="relative mt-5 max-w-2xl text-space/80">
          석사·박사 과정, 학부연구생, 박사후연구원을 모집합니다. 바이오 또는 제조 도메인에 관심이 있고
          AI로 실제 문제를 풀고 싶은 분이라면 전공과 관계없이 환영합니다. CV와 관심 연구 분야를 메일로 보내주세요.
        </p>
        <a
          href={`mailto:${site.email}?subject=[Join Us] 지원 문의`}
          className="relative mt-8 inline-block rounded-full bg-space px-6 py-3 font-semibold text-suit transition hover:bg-space-700"
        >
          {site.email}
        </a>
      </div>
    </section>
  )
}
