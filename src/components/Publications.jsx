import { useMemo, useState } from 'react'
import { publications } from '../data/publications.js'
import { research } from '../data/research.js'

const areas = [{ id: 'all', label: 'All' }, ...research.map((r) => ({ id: r.id, label: r.titleKo })), { id: 'etc', label: 'AI 응용' }]
const types = [{ id: 'intl', label: 'International' }, { id: 'domestic', label: '국내' }]
const areaColor = { bio: 'text-visor border-visor/30', mfg: 'text-flare border-flare/30', etc: 'text-suit/60 border-white/20' }
const areaLabel = Object.fromEntries(areas.map((a) => [a.id, a.label]))
const INITIAL_YEARS = 4

// 저자 목록에서 PI 이름 강조
function Authors({ text }) {
  const parts = text.split(/(Ahn H(?: \([^)]*\))?\*?|안홍렬\*?)/)
  return parts.map((s, i) => (i % 2 ? <strong key={i} className="font-semibold text-suit">{s}</strong> : s))
}

function Chip({ active, onClick, children }) {
  return (
    <button
      onClick={onClick}
      className={`rounded-full px-4 py-1.5 text-sm transition ${
        active ? 'bg-suit text-space' : 'border border-white/15 text-suit/70 hover:text-suit'
      }`}
    >
      {children}
    </button>
  )
}

export default function Publications() {
  const [type, setType] = useState('intl')
  const [area, setArea] = useState('all')
  const [showAll, setShowAll] = useState(false)

  const list = publications.filter((p) => p.type === type && (area === 'all' || p.area === area))
  const byYear = useMemo(() => {
    const groups = {}
    list.forEach((p) => (groups[p.year] ??= []).push(p))
    return Object.entries(groups).sort((a, b) => b[0] - a[0])
  }, [type, area])
  const shown = showAll ? byYear : byYear.slice(0, INITIAL_YEARS)

  return (
    <section id="publications" className="border-y border-white/5 bg-space-800/40">
      <div className="section">
        <p className="eyebrow">Publications</p>
        <h2 className="h2">논문</h2>

        <div className="mt-8 flex flex-col gap-3">
          <div className="flex flex-wrap gap-2">
            {types.map((t) => (
              <Chip key={t.id} active={type === t.id} onClick={() => { setType(t.id); setShowAll(false) }}>
                {t.label} <span className="opacity-60">{publications.filter((p) => p.type === t.id).length}</span>
              </Chip>
            ))}
          </div>
          <div className="flex flex-wrap gap-2">
            {areas.map((a) => (
              <Chip key={a.id} active={area === a.id} onClick={() => { setArea(a.id); setShowAll(false) }}>
                {a.label}
              </Chip>
            ))}
          </div>
        </div>

        <div className="mt-12 space-y-12">
          {shown.length === 0 && <p className="text-suit/50">해당하는 논문이 없습니다.</p>}
          {shown.map(([year, items]) => (
            <div key={year} className="grid gap-4 md:grid-cols-[120px_1fr]">
              <p className="font-display text-2xl font-bold text-suit/40">{year}</p>
              <ul className="divide-y divide-white/10">
                {items.map((p, i) => (
                  <li key={i} className="py-4 first:pt-0">
                    <span className={`inline-block rounded-full border px-2.5 py-0.5 text-xs ${areaColor[p.area]}`}>
                      {areaLabel[p.area]}
                    </span>
                    <p className="mt-2 font-semibold leading-snug">
                      {p.link ? <a href={p.link} className="hover:text-visor">{p.title}</a> : p.title}
                    </p>
                    <p className="mt-1 text-sm text-suit/60"><Authors text={p.authors} /></p>
                    <p className="text-sm italic text-suit/50">{p.venue}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {byYear.length > INITIAL_YEARS && (
          <button
            onClick={() => setShowAll(!showAll)}
            className="mt-10 rounded-full border border-white/15 px-5 py-2 text-sm text-suit/80 hover:text-suit"
          >
            {showAll ? '접기' : `이전 논문 더 보기 (${byYear.slice(INITIAL_YEARS).reduce((n, [, v]) => n + v.length, 0)}편)`}
          </button>
        )}
        <p className="mt-6 text-xs text-suit/40">* Corresponding author</p>
      </div>
    </section>
  )
}
