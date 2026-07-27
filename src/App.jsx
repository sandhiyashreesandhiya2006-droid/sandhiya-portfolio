import { useState, useEffect } from "react";
import LoadingScreen from "./components/LoadingScreen";
import CursorGlow from "./components/CursorGlow";
import ScrollProgress from "./components/ScrollProgress";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Certification from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";


function App() {
  const [loading, setLoading] = useState(true);

useEffect(() => {
  const timer = setTimeout(() => {
    setLoading(false);
  }, 2000);

  return () => clearTimeout(timer);
}, []);
<>
  <ScrollProgress />

  <Navbar />
  <Hero />
  <About />
  <Skills />
  <Projects />
  <Experience />
  <Education />
  <Certification />
  <Contact />
  <Footer />
</>

  useEffect(() => {
  AOS.init({
    duration: 1000,
    once: true,
    offset: 100,
    easing: "ease-in-out",
  });
}, []);
  return (
  <>
    {loading ? (
      <LoadingScreen />
    ) : (
      <>
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Certification />
        <Contact />
        <Footer />
      </>
    )}
  </>
);
}

export default App;