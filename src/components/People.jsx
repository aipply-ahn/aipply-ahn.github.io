import { people } from '../data/people.js'

function Avatar({ name, photo, size = 'h-20 w-20 text-xl' }) {
  if (photo) return <img src={photo} alt={name} className={`${size} object-cover [image-rendering:auto]`} />
  const initials = name.split(' ').map((w) => w[0]).join('').slice(0, 2)
  return (
    <div className={`${size} flex items-center justify-center border-2 border-white/15 bg-space-600 font-pixel text-suit/70`}>
      {initials}
    </div>
  )
}

const areaDot = { bio: 'bg-visor', mfg: 'bg-flare' }
const PARTY_SIZE = 4 // 크루 슬롯 최소 개수 — 빈자리는 모집 슬롯으로 표시

export default function People() {
  const { pi, members, alumni } = people
  const emptySlots = Math.max(0, PARTY_SIZE - members.length)

  return (
    <section id="people" className="section">
      <p className="hud text-visor">Stage 03 · Crew</p>
      <h2 className="h2">구성원</h2>

      {/* 캡틴 카드 */}
      <div className="pixel-box mt-12 flex flex-col gap-6 border-flare/60 p-8 sm:flex-row sm:items-center">
        <div className="relative shrink-0">
          <Avatar name={pi.name} photo={pi.photo} size="h-28 w-28 text-3xl" />
          <span className="hud absolute -bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap bg-flare px-2 py-0.5 text-space">Captain</span>
        </div>
        <div>
          <p className="hud text-flare">{pi.role}</p>
          <p className="mt-2 font-display text-2xl font-bold">
            {pi.name} <span className="text-lg font-medium text-suit/60">{pi.nameKo}</span>
          </p>
          <p className="mt-1 text-sm text-suit/60">{pi.title}</p>
          <p className="mt-3 max-w-3xl leading-relaxed text-suit/75">{pi.bio}</p>
          <ul className="mt-3 space-y-0.5 text-sm text-suit/50">
            {pi.education.map((e) => <li key={e}>{e}</li>)}
          </ul>
          <div className="mt-3 flex gap-4 text-sm">
            <a className="text-visor hover:underline" href={`mailto:${pi.email}`}>{pi.email}</a>
            {pi.link && <a className="text-visor hover:underline" href={pi.link}>Homepage</a>}
          </div>
        </div>
      </div>

      {/* 크루 슬롯 */}
      <p className="hud mt-12 text-suit/50">Crew Slots · {members.length}/{members.length + emptySlots}</p>
      <ul className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {members.map((m, i) => (
          <li key={i} className="pixel-box flex flex-col items-center p-6 text-center">
            <Avatar name={m.name} photo={m.photo} />
            <p className="mt-4 font-semibold">{m.nameKo}</p>
            <p className="text-sm text-suit/60">{m.name}</p>
            <p className="hud mt-2 flex items-center gap-1.5 text-[10px] text-suit/50">
              <span className={`h-1.5 w-1.5 ${areaDot[m.area] ?? 'bg-suit/40'}`} />
              {m.role}
            </p>
          </li>
        ))}
        {Array.from({ length: emptySlots }, (_, i) => (
          <li key={`empty-${i}`}>
            <a
              href="#join"
              className="group flex h-full min-h-[180px] flex-col items-center justify-center border-2 border-dashed border-white/15 p-6 text-center transition hover:border-flare"
            >
              <span className="flex h-16 w-16 items-center justify-center border-2 border-dashed border-white/20 font-pixel text-2xl text-suit/30 group-hover:border-flare group-hover:text-flare">
                ?
              </span>
              <p className="hud mt-4 text-suit/40">Empty Slot</p>
              <p className="mt-1 text-sm font-semibold text-suit/70 group-hover:text-flare">+ 크루 합류</p>
            </a>
          </li>
        ))}
      </ul>

      {alumni.length > 0 && (
        <div className="mt-12">
          <h3 className="hud text-suit/50">Hall of Fame · Alumni</h3>
          <ul className="mt-4 space-y-2 text-sm text-suit/70">
            {alumni.map((a, i) => (
              <li key={i}>{a.name} · {a.degree} · {a.now}</li>
            ))}
          </ul>
        </div>
      )}
    </section>
  )
}
