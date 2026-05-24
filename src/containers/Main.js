import React, {useEffect, useState, Suspense, lazy} from "react";
import Header from "../components/header/Header";
import Greeting from "./greeting/Greeting";
import ErrorBoundary from "../components/errorBoundary/ErrorBoundary";
import {splashScreen} from "../portfolio";
import {StyleProvider} from "../contexts/StyleContext";
import {useLocalStorage} from "../hooks/useLocalStorage";
import "./Main.scss";

// Lazy load below-the-fold components to improve initial bundle size & Lighthouse performance
const Skills = lazy(() => import("./skills/Skills"));
const StackProgress = lazy(() => import("./skillProgress/skillProgress"));
const Architecture = lazy(() => import("./architecture/Architecture"));
const WorkExperience = lazy(() => import("./workExperience/WorkExperience"));
const Projects = lazy(() => import("./projects/Projects"));
const Profile = lazy(() => import("./profile/Profile"));
const Footer = lazy(() => import("../components/footer/Footer"));
const Education = lazy(() => import("./education/Education"));
const ScrollToTopButton = lazy(() => import("./topbutton/Top"));
const SplashScreen = lazy(() => import("./splashScreen/SplashScreen"));

const Main = () => {
  const darkPref = window.matchMedia("(prefers-color-scheme: dark)");
  const [isDark, setIsDark] = useLocalStorage("isDark", darkPref.matches);
  const [isShowingSplashAnimation, setIsShowingSplashAnimation] =
    useState(true);

  useEffect(() => {
    if (splashScreen.enabled) {
      const splashTimer = setTimeout(
        () => setIsShowingSplashAnimation(false),
        splashScreen.duration
      );
      return () => {
        clearTimeout(splashTimer);
      };
    }
  }, []);

  const changeTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div className={isDark ? "dark-mode" : null}>
      <StyleProvider value={{isDark: isDark, changeTheme: changeTheme}}>
        {isShowingSplashAnimation && splashScreen.enabled ? (
          <SplashScreen />
        ) : (
          <ErrorBoundary>
            <Header />
            <main>
              <Greeting />
              <Suspense fallback={<div style={{height: '100vh'}} />}>
                <Skills />
                <StackProgress />
                <Architecture />
                <Education />
                <WorkExperience />
                <Projects />
                <Profile />
              </Suspense>
            </main>
            <Suspense fallback={null}>
              <Footer />
              <ScrollToTopButton />
            </Suspense>
          </ErrorBoundary>
        )}
      </StyleProvider>
    </div>
  );
};

export default Main;
