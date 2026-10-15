import { site } from '../data/site.js'

export default function JoinUs() {
  return (
    <section id="join" className="section">
      <div className="card stars relative overflow-hidden p-10 sm:p-14">
        <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-flare/15 blur-3xl" />
        <p className="eyebrow">Join Us</p>
        <h2 className="h2 max-w-2xl">함께 새로운 궤도를 그릴 연구원을 찾습니다</h2>
        <p className="mt-5 max-w-2xl text-suit/70">
          석사·박사 과정, 학부연구생, 박사후연구원을 모집합니다. 바이오 또는 제조 도메인에 관심이 있고
          AI로 실제 문제를 풀고 싶은 분이라면 전공과 관계없이 환영합니다. CV와 관심 연구 분야를 메일로 보내주세요.
        </p>
        <a
          href={`mailto:${site.email}?subject=[Join Us] 지원 문의`}
          className="mt-8 inline-block rounded-full bg-flare px-6 py-3 font-semibold text-space transition hover:bg-flare-soft"
        >
          {site.email}
        </a>
      </div>
    </section>
  )
}
