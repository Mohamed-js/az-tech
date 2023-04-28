import React, { useEffect } from "react";
// Sections
import TopNavbar from "../components/Nav/TopNavbar";
import Header from "../components/Sections/Header";
import Services from "../components/Sections/Services";
import Projects from "../components/Sections/Projects";
// import Blog from "../components/Sections/Blog";
// import Pricing from "../components/Sections/Pricing";
import Contact from "../components/Sections/Contact";
import Footer from "../components/Sections/Footer";
import { useState } from "react";

export default function Landing() {
  let [mousePoisition, setMousePosition] = useState({
    x: null,
    y: null
  }) 
  useEffect(() =>{
    function handleMouseMove(e){
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      })
    }
    let mouseFollower =  document.querySelector(".mouse-follower")
      mouseFollower.style.left = `${mousePoisition.x}px`
      mouseFollower.style.top = `${mousePoisition.y}px`
      document.addEventListener("mousemove", handleMouseMove)
      return () => document.removeEventListener("mousemove", handleMouseMove)
    }, [mousePoisition])
  return (
    <>
      <div className="mouse-follower"></div>
      <TopNavbar />
      <Header />
      <Services />
      <Projects />
      {/* <Blog /> */}
      {/* <Pricing /> */}
      <Contact />
      <Footer />
    </>
  );
}
