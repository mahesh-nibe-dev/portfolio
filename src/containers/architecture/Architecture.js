import React, { useState } from "react";
import "./Architecture.scss";
import { architectureSection } from "../../portfolio";
import { Fade } from "../../components/motion/Reveal";

export default function Architecture() {
  const [activeTopic, setActiveTopic] = useState(architectureSection.topics[0].id);

  if (!architectureSection.display) {
    return null;
  }

  return (
    <div className="main" id="architecture">
      <div className="architecture-container">
        
        <Fade bottom duration={1000} distance="20px">
          <div className="architecture-header">
            <h1 className="project-title">{architectureSection.title}</h1>
            <p className="architecture-subtitle">{architectureSection.subtitle}</p>
          </div>
        </Fade>

        <Fade bottom duration={1200} distance="20px">
          {/* Visual Topology Diagram */}
          <div className="topology-diagram">
            <div className="diagram-header">
              <span className="dot red"></span>
              <span className="dot yellow"></span>
              <span className="dot green"></span>
              <span className="title">System_Topology_Map</span>
            </div>
            
            <div className="diagram-canvas">
              {/* Traffic lines */}
              <div className="traffic-line h-line-1"></div>
              <div className="traffic-line h-line-2"></div>
              <div className="traffic-line v-line-1"></div>

              {/* Nodes */}
              <div className="node client-node">
                <i className="fas fa-mobile-alt"></i>
                <span>Client App</span>
              </div>
              
              <div className="node load-balancer">
                <i className="fas fa-network-wired"></i>
                <span>API Gateway (Nginx)</span>
              </div>

              <div className="node service-node s1">
                <i className="fab fa-docker"></i>
                <span>Auth Service</span>
              </div>
              
              <div className="node service-node s2">
                <i className="fab fa-docker"></i>
                <span>Core API</span>
              </div>

              <div className="node db-node postgres">
                <i className="fas fa-database"></i>
                <span>PostgreSQL DB</span>
              </div>

              <div className="node db-node redis">
                <i className="fas fa-server"></i>
                <span>Redis Cache</span>
              </div>
            </div>
          </div>
        </Fade>

        <Fade bottom duration={1400} distance="20px">
          {/* Interactive Topics Grid */}
          <div className="architecture-topics-grid">
            <div className="topics-sidebar">
              {architectureSection.topics.map((topic) => (
                <button 
                  key={topic.id}
                  className={`topic-btn ${activeTopic === topic.id ? "active" : ""}`}
                  onClick={() => setActiveTopic(topic.id)}
                >
                  <i className={topic.icon}></i>
                  {topic.title}
                </button>
              ))}
            </div>
            <div className="topics-content">
              {architectureSection.topics.map((topic) => (
                <div 
                  key={topic.id} 
                  className={`topic-detail ${activeTopic === topic.id ? "visible" : "hidden"}`}
                >
                  <h3>{topic.title}</h3>
                  <p>{topic.content}</p>
                  <div className="topic-decoration"></div>
                </div>
              ))}
            </div>
          </div>
        </Fade>

      </div>
    </div>
  );
}
