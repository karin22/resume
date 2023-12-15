"use client";

import React, { useEffect, useState } from "react";
import Home from "../components/Home";
import About from "../components/About";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import Education from "../components/Education";
import Contact from "../components/Contact";
import Loading from "../components/layout/Loading";

import NavBar from "@/app/components/layout/NavBar";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Index() {
  const [isRender, setIsRender] = useState(false);
  useEffect(() => {
    AOS.init({
      once: false,
      duration: 1000,
    });
    setTimeout(() => {
      setIsRender(true);
    }, 800);
  }, []);

  return (
    <main>
      <NavBar />
      {isRender ? (
        <div>
          <div id="home">
            <Home />
          </div>
          <div id="about">
            <About />
          </div>
          <div id="skills">
            <Skills />
          </div>
          <div id="education">
            <Education />
          </div>
          <div id="experience">
            <Experience />
          </div>

          <div id="contact">
            <Contact />
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </main>
  );
}
