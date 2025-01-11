"use client"

import Icons from '@components/ui/Icons';

const Project = ({title, description, image, technologies, link}) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
        <div className="project">
            <div className="project-content">
                <h2 className="subhead_text">
                    {title}
                </h2>
                <p className="body_text">{description}</p>
                <div className="flex flex-row flex-wrap gap-2 mt-4">
                    {technologies.map((tech, index) => (
                        <span key={index} className="tech-badge flex">
                            <img src={Icons({ name: tech })} alt={tech} className="h-8 w-8"/>
                        </span>
                    ))}
                </div>
            </div>
        </div>
    </a>
  )
}

export default Project