// 연구 분야. accent: 'visor'(시안) | 'flare'(오렌지)
export const research = [
  {
    id: 'bio',
    code: 'ORBIT 01',
    title: 'AI Precision Bio',
    titleKo: 'AI 정밀바이오',
    accent: 'visor',
    summary:
      '유전체·전사체 등 멀티오믹스와 전자의무기록·의료영상 데이터를 AI로 통합 분석하여 질병 기전과 바이오마커를 찾고, 환자 맞춤형 예측 모델을 만듭니다.',
    topics: [
      '시계열 전사체·멀티오믹스 통합 분석',
      '유전자 네트워크 · 네트워크 전파 모델',
      '암 분자 아형 분류 · 바이오마커 발굴',
      '중환자실(ICU) 사망·패혈증 예측',
      '의료영상 병변 분할',
      '국민건강 데이터 기반 위험 인자 발굴',
    ],
    highlights: ['HTRgene', 'PropaNet', 'mirTime', 'StressGenePred', 'TimesVector'],
  },
  {
    id: 'mfg',
    code: 'ORBIT 02',
    title: 'AI Manufacturing',
    titleKo: 'AI 자동화제조',
    accent: 'flare',
    summary:
      '공정 센서·소리·영상 데이터를 학습해 설비 이상과 제품 결함을 조기에 찾아내고, 사람의 개입을 줄이는 자율·자동화 제조 시스템을 연구합니다.',
    topics: [
      '산업 기계음 이상 탐지',
      '비전 기반 결함 검출 · 생성형 AI 데이터 증강',
      '멀티모달 가스 센서 데이터 분석',
      '자기지도·전이학습 기반 소량 데이터 학습',
      '공정 최적화 · 자율 제어',
      '디지털 트윈 · 제조 LLM 에이전트',
    ],
    highlights: [],
  },
]

export const convergence = {
  text: '정밀농업, 자동화 실험실(Self-driving Lab), 바이오 공정처럼 두 궤도가 교차하는 영역에서 새로운 문제를 정의합니다.',
}
