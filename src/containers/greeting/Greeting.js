import React, {useContext, useEffect, useState} from "react";
import {Fade} from "../../components/motion/Reveal";
import "./Greeting.scss";
import Button from "../../components/button/Button";
import {greeting, socialMediaLinks} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

export default function Greeting() {
  const {isDark} = useContext(StyleContext);
  
  const [terminalText, setTerminalText] = useState("");
  const fullText = `> Initializing system...
> Loading core modules...
> Connecting to database...
> [OK] PostgreSQL cluster reachable
> Starting HTTP server on port 8080...
> [OK] Server ready to accept connections.
> _`;

  useEffect(() => {
    let currentText = "";
    let currentIndex = 0;
    
    const interval = setInterval(() => {
      if (currentIndex < fullText.length) {
        currentText += fullText[currentIndex];
        setTerminalText(currentText);
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 40);
    
    return () => clearInterval(interval);
  }, [fullText]);

  if (!greeting.displayGreeting) {
    return null;
  }

  return (
    <Fade bottom duration={1000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="hero-grid-background"></div>
        <div className="greeting-main">
          
          <div className="greeting-text-div">
            <div>
              <p className="hero-eyebrow">SYSTEMS ENGINEER / FULL-STACK</p>
              <h1 className={isDark ? "dark-mode greeting-text" : "greeting-text"}>
                {greeting.title}
              </h1>
              <p className={isDark ? "dark-mode greeting-text-p" : "greeting-text-p subTitle"}>
                {greeting.subTitle}
              </p>
              
              <div className="tech-stack-indicators">
                <span>C++</span>
                <span className="dot">•</span>
                <span>Java</span>
                <span className="dot">•</span>
                <span>RDBMS</span>
                <span className="dot">•</span>
                <span>React</span>
                <span className="dot">•</span>
                <span>Spring Boot</span>
                <span className="dot">•</span>
                <span>Docker</span>
              </div>

              <div className="button-greeting-div">
                <Button text="View Projects" href="#projects" />
                {greeting.resumeLink && (
                  <Button text="View Resume" href={greeting.resumeLink} newTab={true} secondary={true} />
                )}
                <div className="hero-social-links">
                  {socialMediaLinks.github && (
                    <a href={socialMediaLinks.github} target="_blank" rel="noopener noreferrer" className="hero-social-icon">
                      <i className="fab fa-github"></i>
                    </a>
                  )}
                  {socialMediaLinks.linkedin && (
                    <a href={socialMediaLinks.linkedin} target="_blank" rel="noopener noreferrer" className="hero-social-icon">
                      <i className="fab fa-linkedin"></i>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
          
          <div className="greeting-terminal-div">
            <div className="terminal-window">
              <div className="terminal-header">
                <div className="terminal-button red"></div>
                <div className="terminal-button yellow"></div>
                <div className="terminal-button green"></div>
                <div className="terminal-title">server.log</div>
              </div>
              <div className="terminal-body">
                <pre>{terminalText}</pre>
              </div>
            </div>
          </div>

        </div>
      </div>
    </Fade>
  );
}
