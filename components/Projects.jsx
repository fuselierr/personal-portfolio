"use client"

import Project from '@components/ui/Project.jsx'
import AOS from 'aos'
import 'aos/dist/aos.css'


const Projects = () => {
  const projects = [
    {
      title: "Timestamp",
      description: "On time in no time.",
      technologies: ["Kotlin", "JetpackCompose", "Java", "AndroidStudio", "Firebase", "Gradle", "Postgresql", "Docker", "Nginx"],
    },
    {
      title: "Chess",
      description: "A full-scale web application with working chess computers.",
      technologies: ["Cplusplus", "Python"],
    },
    {
      title: "Recursive Terrain Generator",
      description: "I just love to generate terrain",
      technologies: ["Java", "Javascript"],
    }
  ];
  return (
    <section className="w-full flex-center flex-col py-16">
        <div>
          <h1 className="head_text">
            Projects
          </h1>
        </div>
        <div className="grid-container w-full">
          {projects.map((project, index) => (
            <div data-aos="flip-up" data-aos-duration="800">
              <Project
                key={index}
                title={project.title}
                description={project.description}
                technologies={project.technologies}
              />
            </div>
          ))}
        </div>
    </section>
  );
};

export default Projects;