import Home from '@components/Home'
import About from '@components/About'
import Experience from '@components/Experience'
import Projects from '@components/Projects'
import Contact from '@components/Contact'

const Page = () => {
  return (
    <section className="w-full flex-center flex-col">
        <Home/>
        <section id="about">
          <About/>
        </section>
        <section id="experience">
          <Experience/>
        </section>
        <section id="projects">
          <Projects/>
        </section>
        <section id="contact">
          <Contact/>
        </section>
    </section>
  )
}

export default Page