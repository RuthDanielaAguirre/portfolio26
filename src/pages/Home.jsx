import Nav from '../organisms/Nav'
import Hero from '../organisms/Hero'
import ChaptersNav from '../organisms/ChaptersNav'
import About from '../organisms/About'
import Projects from '../organisms/Projects'
import Experience from '../organisms/Experience'
import Closing from '../organisms/Closing'
import Footer from '../organisms/Footer'

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <ChaptersNav />
      <About />
      <Projects />
      <Experience />
      <Closing />
      <Footer />
    </>
  )
}
