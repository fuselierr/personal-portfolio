import Feed from '@components/Feed';

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
        {/* Home */}
        <section id="home" className="w-full flex-center flex-col">
            <h1 className="head_text text-center">
                Hi, I'm
                <br className="max-md:hidden" />
                <span className="orange_gradient text-center">Mike Gao.</span>
            </h1>
        </section>

        {/* About Me */}
        <section id="about" className="w-full flex-center flex-col bg-gray-100 py-16">
            <h2 className="head_text text-center">
                About Me
            </h2>
            <p className="desc text-center">
                My name is mike gao and shit.
            </p>
        </section>

        {/* Experience */}
        <section id="experience" className="w-full flex-center flex-col py-16">
            <div>Experience</div>
        </section>

        {/* Projects */}
        <section id="projects" className="w-full flex-center flex-col py-16">
            <div>Projects</div>
        </section>

        {/* Contact */}
        <section id="contact" className="w-full flex-center flex-col py-16">
            <div>Let's get in touch!</div>
        </section>
        <Feed/>
    </section>
  )
}

export default Home