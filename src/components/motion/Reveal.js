import React, { useEffect, useRef, useState } from "react";
import "./Reveal.css";

export const Fade = ({ children, bottom, left, right, top, duration = 800, distance = "30px", delay = 0, className = "" }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const currentRef = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (currentRef) {
            observer.unobserve(currentRef);
          }
        }
      },
      {
        threshold: 0.05,
        rootMargin: "-30px 0px",
      }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const styles = {
    transitionDuration: `${duration}ms`,
    transitionDelay: `${delay}ms`,
  };

  let transformClass = "";
  if (bottom) transformClass = "translate-y-dist";
  if (top) transformClass = "translate-y-neg-dist";
  if (left) transformClass = "translate-x-neg-dist";
  if (right) transformClass = "translate-x-dist";

  return (
    <div
      ref={ref}
      className={`reveal-wrapper ${transformClass} ${isVisible ? "reveal-visible" : ""} ${className}`}
      style={styles}
    >
      {children}
    </div>
  );
};

export const Slide = Fade;
