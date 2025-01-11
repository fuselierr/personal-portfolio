"use client";

import { useEffect } from 'react'
import Home from '@components/Home'
import About from '@components/About'
import Experience from '@components/Experience'
import Projects from '@components/Projects'
import Contact from '@components/Contact'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Page = () => {
  useEffect(() => {
    AOS.init({
      duration: 1500,
    });
  })
  return (
    <section className="w-full flex-center flex-col">
        <section id="home" data-aos="fade-down" data-aos-mirror="true">
          <Home/>
        </section>
        <section id="about" data-aos="fade-up" data-aos-duration="1500" data-aos-mirror="true" className="w-full">
          <About/>
        </section>
        <section id="experience" data-aos="fade-up" data-aos-duration="1500" data-aos-mirror="true">
          <Experience/>
        </section>
        <section id="projects" data-aos="fade-up" data-aos-duration="1500" data-aos-mirror="true" className="w-full">
          <Projects/>
        </section>
        <section id="contact" data-aos="fade-up" data-aos-duration="1500" data-aos-mirror="true" className="w-full">
          <Contact/>
        </section>
    </section>
  )
}

export default Page