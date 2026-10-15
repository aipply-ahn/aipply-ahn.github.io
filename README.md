# AIPPLY Lab Website

AI 정밀바이오 · AI 자동화제조 연구실 홈페이지 — https://aipply-ahn.github.io

React 18 + Vite 5 + Tailwind CSS 3, GitHub Actions로 GitHub Pages에 자동 배포됩니다.

## 내용 수정 (코드 수정 없이 데이터 파일만)

| 파일 | 내용 |
|---|---|
| `src/data/site.js` | 연구실 이름, 소개 문구, 연락처, 주소 |
| `src/data/research.js` | 연구 분야 2개(정밀바이오 / 자동화제조)와 세부 주제 |
| `src/data/publications.js` | 논문 목록, 지도 학생 수상 실적 |
| `src/data/people.js` | 교수, 구성원, 졸업생 |
| `src/data/news.js` | 소식 (수상 실적은 자동 포함) |

구성원 사진은 `public/images/people/`에 넣고 `photo: '/images/people/파일명.jpg'`로 지정합니다.

## 로컬 실행

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # dist/ 생성
```

## 배포

`main` 브랜치에 push하면 `.github/workflows/deploy.yml`이 빌드 후 배포합니다.
최초 1회: GitHub 저장소 Settings → Pages → Source를 **GitHub Actions**로 설정.
