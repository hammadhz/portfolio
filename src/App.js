import React from "react";

import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import ContactUs from "./pages/ContactUs";
import Footer from "./pages/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Experience from "./pages/Experience";

function App() {
  return (
    <React.Fragment>
      <Header />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <ContactUs />
      <Footer />
    </React.Fragment>
  );
}

export default App;
