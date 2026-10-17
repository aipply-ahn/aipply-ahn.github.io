import { useState } from 'react'
import { news } from '../data/news.js'

const tagColor = { Award: 'border-flare/60 bg-flare/10 text-flare', Paper: 'border-visor/40 text-visor' }
const tagLabel = { Award: '🏆 Achievement', Paper: 'Paper', Lab: 'Lab', Join: 'Join' }
const INITIAL = 6

export default function News() {
  const [showAll, setShowAll] = useState(false)
  const shown = showAll ? news : news.slice(0, INITIAL)
  return (
    <section id="news" className="border-y border-white/5 bg-space-800/40">
      <div className="section">
        <p className="hud text-visor">Stage 04 · Mission Log</p>
        <h2 className="h2">소식</h2>
        <ul className="mt-12 divide-y divide-white/10">
          {shown.map((n, i) => (
            <li key={i} className="grid gap-1 py-5 sm:grid-cols-[110px_130px_1fr] sm:items-baseline">
              <time className="font-pixel text-xs text-suit/50">{n.date}</time>
              <span className={`hud w-fit border px-2 py-0.5 text-[10px] ${tagColor[n.tag] ?? 'border-white/20 text-suit/60'}`}>
                {tagLabel[n.tag] ?? n.tag}
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
            className="pixel-btn mt-8 border-white/20 bg-space-800 text-suit/80 hover:text-suit"
          >
            {showAll ? '접기' : `전체 소식 보기 (${news.length})`}
          </button>
        )}
      </div>
    </section>
  )
}
