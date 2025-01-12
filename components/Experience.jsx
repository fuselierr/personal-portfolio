"use client";

import { useState } from 'react';
import Icons from '@components/ui/Icons';

const Experience = () => {
  const [skills, setSkills] = useState([
    { name: "C", icon: Icons({ name: "c"})},
    { name: "C++", icon: Icons({ name: "cplusplus"})},
    { name: "C#", icon: Icons({ name: "csharp"})},
    { name: "Java", icon: Icons({ name: "java"})},
    { name: "Kotlin", icon: Icons({ name: "kotlin"})},
    { name: "Javascript", icon: Icons({ name: "javascript"})},
    { name: "Python", icon: Icons({ name: "python"})},
    { name: "HTML", icon: Icons({ name: "html"})},
    { name: "CSS", icon: Icons({ name: "css"})},
    { name: "Git", icon: Icons({ name: "git"}) },
    { name: "Bash", icon: Icons({ name: "bash"}) },
    { name: "React", icon: Icons({ name: "react"}) },
    { name: "Next.js", icon: Icons({ name: "nextjs"})},
    { name: "Tailwindcss", icon: Icons({ name: "tailwindcss"})},
    { name: "Flask", icon: Icons({ name: "flask"})},
    { name: "Docker", icon: Icons({ name: "docker"})},
    { name: "Firebase", icon: Icons({ name: "firebase" })},
    { name: "Android Studio", icon: Icons({ name: "androidstudio"})},
    { name: "Jetpack Compose", icon: Icons({ name: "jetpackcompose"})},
    { name: "Google Cloud", icon: Icons({ name: "googlecloud"})},
  ]);

  return (
    <section className="w-full flex-center flex-col py-16">
        <div>
          <h1 className="head_text">
            Experience
          </h1>
          <h2 className="subhead_text">
            Technical Skills
          </h2>
          <div className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4">
            {skills.map((skill, index) => (
              <div key={index}
                className="p-6" data-aos="flip-left" data-aos-offset={160 + ((index) % 8) * 20} data-aos-duration="500">
                  <div className="flex justify-center items-center mb-2">
                    <img src={skill.icon} className=""/>
                  </div>
                  <div className="justify-center items-center">
                    <h2 className="text-xl font-semibold">{skill.name}</h2>
                  </div>
                </div>
            ))}
          </div>
          <h2 className="subhead_text">
            Job Experience
          </h2>
          <h2 className="subhead_text">
            Education
          </h2>
        </div>
    </section>
  )
}

export default Experience;