import { useState } from 'react'
import { news } from '../data/news.js'

const tagColor = { Award: 'border-flare/40 text-flare', Paper: 'border-visor/40 text-visor' }
const INITIAL = 6

export default function News() {
  const [showAll, setShowAll] = useState(false)
  const shown = showAll ? news : news.slice(0, INITIAL)
  return (
    <section id="news" className="border-y border-white/5 bg-space-800/40">
      <div className="section">
        <p className="eyebrow">News</p>
        <h2 className="h2">소식</h2>
        <ul className="mt-12 divide-y divide-white/10">
          {shown.map((n, i) => (
            <li key={i} className="grid gap-1 py-5 sm:grid-cols-[120px_90px_1fr] sm:items-baseline">
              <time className="font-display text-sm text-suit/50">{n.date}</time>
              <span className={`w-fit rounded-full border px-2.5 py-0.5 text-xs ${tagColor[n.tag] ?? 'border-white/20 text-suit/60'}`}>
                {n.tag}
              </span>
              <p className="leading-relaxed">
                {n.link ? <a href={n.link} className="hover:text-visor">{n.text}</a> : n.text}
              </p>
            </li>
          ))}
        </ul>
        {news.length > INITIAL && (
          <button
            onClick={() => setShowAll(!showAll)}
            className="mt-8 rounded-full border border-white/15 px-5 py-2 text-sm text-suit/80 hover:text-suit"
          >
            {showAll ? '접기' : `전체 소식 보기 (${news.length})`}
          </button>
        )}
      </div>
    </section>
  )
}
