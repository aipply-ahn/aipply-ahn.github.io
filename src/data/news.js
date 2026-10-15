import { awards } from './publications.js'

// 직접 작성하는 소식. date: 'YYYY-MM-DD'
const manual = [
  { date: '2026-10-15', tag: 'Lab', text: '연구실 홈페이지를 새로 오픈했습니다.' },
  { date: '2026-06-26', tag: 'Paper', text: 'KCC 2026에서 산업 결함 검출, 암 아형 분류, 블루베리 분할 연구 3편을 발표했습니다.' },
]

// 지도 학생 수상 실적을 자동으로 소식에 포함
const fromAwards = awards.map((a) => ({
  date: a.date,
  tag: 'Award',
  text: `${a.contest} ${a.prize} 수상 — ${a.who}${a.title ? ` 「${a.title}」` : ''}`,
  link: a.link,
}))

export const news = [...manual, ...fromAwards].sort((a, b) => b.date.localeCompare(a.date))
