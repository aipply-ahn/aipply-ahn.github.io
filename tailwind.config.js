/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // 그림1.png(우주인) 색감에서 추출한 팔레트
        space: { DEFAULT: '#000506', 900: '#000506', 800: '#071114', 700: '#0d1c21', 600: '#16292f' },
        suit: '#eef1f2',
        flare: { DEFAULT: '#f08a24', soft: '#f6a75a' },
        visor: { DEFAULT: '#3fb6e6', deep: '#1d6f9b' },
      },
      fontFamily: {
        sans: ['Pretendard', 'Inter', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', 'Pretendard', 'sans-serif'],
        // 게임 UI 라벨용 한글 픽셀 폰트
        pixel: ['Galmuri11', 'Galmuri9', 'monospace'],
      },
    },
  },
  plugins: [],
}
