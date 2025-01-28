"use client"

import Project from '@components/ui/Project.jsx'
import 'aos/dist/aos.css'


const Projects = () => {
  const projects = [
    {
      title: "Timestamp",
      description: "Timestamp is a time-management app that helps you organize your plans and events: On time in no time.",
      image: '/assets/images/timestamp.png',
      technologies: ["Kotlin", "JetpackCompose", "Java", "AndroidStudio", "Figma", "Firebase", "Gradle", "Postgresql", "Docker", "Nginx"],
      link: "https://git.uwaterloo.ca/mw2auyeu/team102-4",
    },
    {
      title: "Phish-Eye Lens",
      description: "Understand the qualms of password selection and phishing tactics through a hacker's lens. UofTHacks 12 Winner.",
      image: '/assets/images/phisheyelens.png',
      technologies: ["Javascript", "Typescript", "React", "Nextjs", "gemini", "Nodejs", "expressjs", "redis", "vercel"],
      link: "https://dorahacks.io/buidl/21693"
    },
    {
      title: "NavigAIt",
      description: "An AI-powered employee onboarding assistant that helps new hires navigate their digital workspace. GeeseHacks 2025 Winner.",
      image: '/assets/images/navigait.png',
      technologies: ["Javascript", "React", "Nextjs", "Nodejs", "expressjs", "Figma", "gemini", "googlecloud"],
      link: "https://github.com/fuselierr/navigAIt"
    },
    {
      title: "Chess",
      description: "A chess application with various chess engine levels. *The source code is not available due to UW academic policies.",
      image: '/assets/images/chess.png',
      technologies: ["Cplusplus", "Bash"],
      link: "https://uwaterloo.ca/secretariat/policies-guidelines-signing-procedures"
    },
    {
      title: "Recursive Terrain Generator",
      description: "A JFrame program that mathematically interpolates terrain through algebraic formulas.",
      image: '/assets/images/recursiveterrain.png',
      technologies: ["Java"],
      link: "https://github.com/fuselierr/Recursive-Terrain"
    }
  ];
  return (
    <section className="flex-center flex-col py-16 justify-center mt-20">
        <div>
          <h1 className="head_text mb-8">
            Projects
          </h1>
        </div>
        <div className="w-full max-w-screen-2xl grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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