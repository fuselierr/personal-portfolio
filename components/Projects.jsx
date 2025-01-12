"use client"

import Project from '@components/ui/Project.jsx'
import 'aos/dist/aos.css'


const Projects = () => {
  const projects = [
    {
      title: "Timestamp",
      description: "On time in no time.",
      image: '/assets/images/timestamp.png',
      technologies: ["Kotlin", "JetpackCompose", "Java", "AndroidStudio", "Figma", "Firebase", "Gradle", "Postgresql", "Docker", "Nginx"],
      link: "https://git.uwaterloo.ca/mw2auyeu/team102-4",
    },
    {
      title: "Chess",
      description: "A full-scale web application with working chess computers. *The source code is not available due to UW academic policies.",
      image: '/assets/images/chess.png',
      technologies: ["Cplusplus", "Python", "Flask"],
      link: "https://uwaterloo.ca/secretariat/policies-guidelines-signing-procedures"
    },
    {
      title: "Recursive Terrain Generator",
      description: "I just love to generate terrain",
      image: '/assets/images/chess.png',
      technologies: ["Java", "Javascript", "React", "Nextjs", "Tailwindcss"],
      link: "https://github.com/fuselierr/Recursive-Terrain"
    }
  ];
  return (
    <section className="w-full min-h-screen flex-center flex-col py-16 justify-center">
        <div>
          <h1 className="head_text mb-8">
            Projects
          </h1>
        </div>
        <div className="w-full grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} data-aos="flip-up" data-aos-duration="800" data-aos-offset="200">
              <Project
                key={index}
                title={project.title}
                description={project.description}
                image={project.image}
                technologies={project.technologies}
                link={project.link}
              />
            </div>
          ))}
        </div>
    </section>
  );
};

export default Projects;