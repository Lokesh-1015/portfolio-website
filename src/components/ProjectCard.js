import { Col } from "react-bootstrap";
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'; // Import icons

export const ProjectCard = ({ title, description, imgUrl, githubUrl, liveDemoUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt={title} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <div className="project-buttons mt-3">
            {githubUrl && (
              <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="btn btn-1">
                <FaGithub /> GitHub
              </a>
            )}
            {liveDemoUrl && (
              <a href={liveDemoUrl} target="_blank" rel="noopener noreferrer" className="btn btn-2">
                <FaExternalLinkAlt /> Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </Col>
  );
};
