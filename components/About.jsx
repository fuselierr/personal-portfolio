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
                Hello! I'm Mike and I am currently pursuing my Bachelor's of Computer Science at the University of Waterloo.
                Currently, I am on a study term and searching for internship opportunities for Summer 2026.
            </p>
            <p className="desc">
              I am passionate about AI innovation and Language Models and how to integrate such models to solve complex problems.
            </p>
            <p className="desc">
                When I'm not learning new technical skills, I am making music and developing my culinary skills.
            </p>
            <p className="desc mb-5">
              Don't hesitate to reach out if you'd like to connect!
            </p>
          </div>
        </div>
    </section>
  )
}

export default About