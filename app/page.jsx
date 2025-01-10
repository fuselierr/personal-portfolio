"use client";

import { useEffect } from 'react'
import Home from '@components/Home'
import About from '@components/About'
import Experience from '@components/Experience'
import Projects from '@components/Projects'
import Contact from '@components/Contact'
import AOS from 'aos'

const Page = () => {
  useEffect(() => {
    AOS.init({
      duration: 1500
    });
  })
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
        <section id="contact" data-aos="fade-up" data-aos-duration="1500" data-aos-mirror="true">
          <Contact/>
        </section>
    </section>
  )
}

export default Page