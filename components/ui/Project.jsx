const Project = ({title, description, image, technologies}) => {
  return (
    <div className="project">
        <div className="project-content">
            <h2 className="subhead_text">
                {title}
            </h2>
            <p className="body_text">{description}</p>
        </div>
    </div>
  )
}

export default Project