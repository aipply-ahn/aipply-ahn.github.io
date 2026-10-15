// 구성원. photo 는 public/images/people/ 에 넣고 '/images/people/파일명.jpg' 로 지정 (없으면 이니셜 표시)
export const people = {
  pi: {
    name: 'Hongryul Ahn',
    nameKo: '안홍렬',
    role: 'Principal Investigator',
    title: 'Associate Professor, Division of AI and Data Science · Director of DS&ML Center, The University of Suwon',
    bio: '인공지능과 데이터사이언스를 정밀바이오·의료, 정밀농업, 지능형 제조에 적용하는 연구를 수행합니다. 벼, 애기장대, 마우스, 인간 등 다양한 생물의 차세대 염기서열(NGS) 데이터를 분석하는 AI 기반 생물정보학 도구를 개발해 왔습니다.',
    education: [
      'Ph.D. in Computer Science and Engineering, Seoul National University (2019)',
      'B.S. in Computer Science and Engineering, Seoul National University (2012)',
    ],
    email: 'hongryulahn@gmail.com',
    photo: '', // TODO: '/images/people/hongryul-ahn.jpg'
    link: 'https://hongryulahn.github.io',
  },
  members: [
    // TODO: 실제 구성원으로 교체. area: 'bio' | 'mfg'
    // { name: 'Gildong Hong', nameKo: '홍길동', role: 'M.S. Student', area: 'bio', photo: '' },
  ],
  alumni: [
    // { name: '홍길동', degree: 'B.S. 2025', now: '○○전자' },
  ],
}
