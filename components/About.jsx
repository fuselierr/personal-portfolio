"use client";

import Image from 'next/image';

const About = () => {
  return (
    <section className="w-full min-h-screen max-h-screen py-16 flex flex-col items-center justify-center mt-20">
        <h2 className="head_text text-center mb-8">
            About Me
        </h2>
        <div className="w-full flex flex-col lg:flex-row items-center justify-center">
          <div className="w-full lg:w-1/3 flex flex-col items-center justify-center px-8 mt-8 md:mt-0 order-2 lg:order-1" data-aos="fade-right">
            <Image
              src='/assets/images/jpphoto.jpg'
              alt="mapo tofu"
              width="600"
              height="600"
              className="max-w-full h-auto rounded-2xl shadow-lg"
            />
            <p className="mt-4"> 
              Shibuya Sky, Tokyo, Japan
            </p>
          </div>

          <div className="w-full lg:w-1/3 flex flex-col items-start md:items-start px-8 order-1 lg:order-2" data-aos="fade-left">
            <p className="desc">
              Hello! I'm Mike. I am a Computer Science student at the University of Waterloo with a strong focus on Artificial Intelligence and Software Engineering. I'm currently on a study term and actively seeking internship opportunities for <b>Summer 2026</b>.
            </p>

            <p className="desc">
              My core interests lie in <b>AI innovation</b>, <b>Large Language Models (LLMs)</b>, and the intersection of <b>machine learning and human-computer interaction</b>. I’m passionate about designing and implementing intelligent systems that push the boundaries of what technology can understand, create, and automate.
            </p>

            <p className="desc">
              I enjoy experimenting with new frameworks, building end-to-end ML pipelines, and exploring how modern AI architectures can be applied to solve real-world problems efficiently and elegantly.
            </p>

            <p className="desc">
              Outside of tech, I’m a musician, volleyball enthusiast, and an aspiring chef - always learning, iterating, and improving in everything I do.
            </p>

            <p className="desc mb-5">
              I’m always open to collaborations and new challenges. Do not hesitate to reach out if you’d like to connect or build something exciting together!
            </p>
          </div>
        </div>
    </section>
  )
}

export default About