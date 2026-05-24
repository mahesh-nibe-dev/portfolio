import React, {useState, useContext} from "react";
import "./Project.scss";
import {engineeringProjects} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";
import {Fade} from "../../components/motion/Reveal";

const CaseStudyCard = ({project}) => {
  const {isDark} = useContext(StyleContext);
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className={`case-study-card ${isDark ? "dark-card" : ""}`}>
      <div className="case-study-header">
        <h3 className="case-study-title">{project.title}</h3>
        <p className="case-study-subtitle">{project.subtitle}</p>
        
        <div className="case-study-tech-stack">
          {project.techStack.map((tech, index) => (
            <span key={index} className="tech-badge">{tech}</span>
          ))}
        </div>
      </div>

      <div className="case-study-body">
        <div className="case-study-section">
          <h4>Architecture Summary</h4>
          <p>{project.architecture}</p>
        </div>

        {isExpanded && (
          <div className="expanded-details">
            <div className="case-study-section">
              <h4>Key Engineering Decisions</h4>
              <ul className="decision-list">
                {project.keyDecisions.map((decision, index) => (
                  <li key={index}>{decision}</li>
                ))}
              </ul>
            </div>
            
            <div className="case-study-grid-2">
              <div className="case-study-section">
                <h4>Scalability</h4>
                <p>{project.scalability}</p>
              </div>
              <div className="case-study-section">
                <h4>Deployment</h4>
                <p>{project.deployment}</p>
              </div>
            </div>
          </div>
        )}

        <button 
          className="expand-btn" 
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? "Show Less" : "Read Technical Details"} 
          <i className={`fas fa-chevron-${isExpanded ? "up" : "down"}`}></i>
        </button>
      </div>

      <div className="case-study-footer">
        {project.githubLink && (
          <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="case-link-btn">
            <i className="fab fa-github"></i> View Source
          </a>
        )}
        {project.demoLink && (
          <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="case-link-btn primary">
            <i className="fas fa-external-link-alt"></i> Live Demo
          </a>
        )}
      </div>
    </div>
  );
};

export default function Projects() {
  if (!engineeringProjects.display) {
    return null;
  }

  return (
    <div className="main" id="projects">
      <div className="projects-container-header">
        <h1 className="project-title">{engineeringProjects.title}</h1>
      </div>
      <div className="case-studies-grid">
        {engineeringProjects.projects.map((project) => (
          <Fade bottom duration={1000} distance="20px" key={project.id}>
            <CaseStudyCard project={project} />
          </Fade>
        ))}
      </div>
    </div>
  );
}
