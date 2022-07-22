import React from "react";
import { useState, useEffect } from "react";
import Rain from "./Animations/rain/Rain";
import Snow from "./Animations/snow/Snow";

import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Experience from "./components/experience/Experience";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import Portfolio from "./components/portfolio/Portfolio";
import Testimonials from "./components/testimonials/Testimonials";

const App = () => {
  const [season, setSeason] = useState(0);
  const seasonHandler = () => {
    var currentTime = new Date();
    var month = currentTime.getMonth() + 1;
    var total = month;
    if (total >= 3 && total <= 6) {
      setSeason(0);
    } else if (total >= 7 && total <= 10) {
      setSeason(1);
    } else if ((total >= 11 && total <= 12) || total === 1 || total === 2) {
      setSeason(2);
    }
  };

  useEffect(() => {
    window.addEventListener("load", seasonHandler);
    return () => {
      window.removeEventListener("load", seasonHandler);
    };
  }, []);

  if (season === 0) {
    return (
      <>
        <Header />
        <Nav />
        <About />
        <Experience />
        <Portfolio />
        <Testimonials />
        <Contact />
        <Footer />
      </>
    );
  } else if (season === 1) {
    return (
      <>
        <Rain>
          <Header />
          <Nav />
          <About />
          <Experience />
          <Portfolio />
          <Testimonials />
          <Contact />
          <Footer />
        </Rain>
      </>
    );
  } else if (season === 2) {
    return (
      <>
        <Snow>
          <Header />
          <Nav />
          <About />
          <Experience />
          <Portfolio />
          <Testimonials />
          <Contact />
          <Footer />
        </Snow>
      </>
    );
  }
};

export default App;
