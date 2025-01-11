"use client";

import { useState } from 'react';
import Icons from '@components/ui/Icons';

const Experience = () => {
  const [skills, setSkills] = useState([
    { name: "React", icon: Icons({ name: "react"}) },
    { name: "Next.js", icon: Icons({ name: "nextjs"})},
    { name: "C++", icon: Icons({ name: "cplusplus"})},
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
                className="p-6">
                  <div className="flex justify-center items-center mb-2">
                    <img src={skill.icon}/>
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