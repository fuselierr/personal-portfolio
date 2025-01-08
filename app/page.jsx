import Home from '@components/Home'
import About from '@components/About'
import Experience from '@components/Experience'
import Projects from '@components/Projects'
import Contact from '@components/Contact'

const Page = () => {
  return (
    <section className="w-full flex-center flex-col">
        <Home/>
        <About/>
        <Experience/>
        <Projects/>
        <Contact/>
    </section>
  )
}

export default Page