import { people } from '../data/people.js'

function Avatar({ name, photo, size = 'h-20 w-20 text-xl' }) {
  if (photo) return <img src={photo} alt={name} className={`${size} rounded-full object-cover`} />
  const initials = name.split(' ').map((w) => w[0]).join('').slice(0, 2)
  return (
    <div className={`${size} flex items-center justify-center rounded-full bg-space-600 font-display font-bold text-suit/70`}>
      {initials}
    </div>
  )
}

const areaDot = { bio: 'bg-visor', mfg: 'bg-flare' }

export default function People() {
  const { pi, members, alumni } = people
  return (
    <section id="people" className="section">
      <p className="eyebrow">People</p>
      <h2 className="h2">구성원</h2>

      <div className="card mt-12 flex flex-col gap-6 p-8 sm:flex-row sm:items-center">
        <Avatar name={pi.name} photo={pi.photo} size="h-28 w-28 text-3xl" />
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-flare">{pi.role}</p>
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

      {members.length === 0 && (
        <p className="mt-6 rounded-2xl border border-dashed border-white/15 p-8 text-center text-suit/50">
          구성원 정보를 준비 중입니다.
        </p>
      )}
      <ul className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {members.map((m, i) => (
          <li key={i} className="card flex flex-col items-center p-6 text-center">
            <Avatar name={m.name} photo={m.photo} />
            <p className="mt-4 font-semibold">{m.nameKo}</p>
            <p className="text-sm text-suit/60">{m.name}</p>
            <p className="mt-2 flex items-center gap-1.5 text-xs text-suit/50">
              <span className={`h-1.5 w-1.5 rounded-full ${areaDot[m.area] ?? 'bg-suit/40'}`} />
              {m.role}
            </p>
          </li>
        ))}
      </ul>

      {alumni.length > 0 && (
        <div className="mt-12">
          <h3 className="font-display text-xl font-bold">Alumni</h3>
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
