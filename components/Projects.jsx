import Project from '@components/ui/Project.jsx'

const Projects = () => {
  const projects = [
    {
      title: "Timestamp",
      description: "On time in no time.",
      technologies: ["Kotlin", "Java", "Gradle"],
    },
    {
      title: "Chess",
      description: "A full-scale web application with working chess computers.",
      technologies: ["C++", "Linux"],
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
        <div className="grid-container">
          {projects.map((project, index) => (
            <Project
              key={index}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
            />
          ))}
        </div>
    </section>
  );
};

export default Projects;