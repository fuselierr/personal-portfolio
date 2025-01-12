"use client";

import Image from 'next/image';

const About = () => {
  return (
    <section className="w-full min-h-screen py-16 flex flex-col items-center justify-center">
        <h2 className="head_text text-center mb-8">
            About Me
        </h2>
        <div className="w-full flex flex-col md:flex-row items-center justify-center">
          <div className="w-full md:w-1/4 flex flex-col items-center justify-center px-8 mt-8 md:mt-0" data-aos="fade-right">
            <Image
              src='/assets/images/mapotofu.jpg'
              alt="mapo tofu"
              width="400"
              height="400"
              className="max-w-full h-auto rounded-2xl shadow-lg"
            />
            <p className="mt-4">
              A pic of my mapo tofu for your visual enjoyment :)
            </p>
          </div>

          <div className="w-full md:w-1/4 flex flex-col items-start md:items-start px-8" data-aos="fade-left">
            <p className="desc">
                Thanks for stopping by! I'm Mike, and I'm currently pursuing my Bachelor's of Computer Science at the University of Waterloo.
                Currently, I'm working as a Research Developer at DupliCALL Co.
            </p>
            <p className="desc">
              I am super interested in AI and Language Models and how to integrate such models to solve complex problems.
            </p>
            <p className="desc">
                When I'm not learning new tech skills, I love making music and 
                learning traditional Chinese dishes. My favourite cuisine has to be from Sichuan.
            </p>
            <p className="desc mb-5">
              Enjoy your stay!
            </p>
          </div>
        </div>
    </section>
  )
}

export default About