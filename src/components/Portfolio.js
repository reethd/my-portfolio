import ProjectCard from "./ProjectCard";

const Portfolio = ({ projectArray }) => {
  return (
    <div className="center row">
      <h3 className="title">Portfolio</h3>
      <div className="project-gallery">
        {projectArray.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
