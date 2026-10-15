import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Research from './components/Research.jsx'
import Publications from './components/Publications.jsx'
import People from './components/People.jsx'
import News from './components/News.jsx'
import JoinUs from './components/JoinUs.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Research />
        <Publications />
        <People />
        <News />
        <JoinUs />
      </main>
      <Footer />
    </>
  )
}
