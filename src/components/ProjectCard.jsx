import React from 'react'

const ProjectCard = ({project}) => {


  return (
    <div className="project-card center">
      <h5 className='center'>{project.title}</h5>
      <img  src={project.img} alt={project.title}/>
      <p>{project.description}</p>
      <div className="project-links">
      <p><a href={project.repo} className="btn">Github Link</a></p>
      {project.link ? <p><a href={project.link} className="btn">Deployed Link</a></p> : null}</div>
    </div>
  )
}

export default ProjectCard