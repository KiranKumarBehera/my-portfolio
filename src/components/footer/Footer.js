import React from "react";
import "./footer.css";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        KIRAN
      </a>
      <ul className="permalinks">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonaials">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer__socials">
        <a
          href="https://www.linkedin.com/in/kiran-kumar-behera-511198212/"
          target="_blank"
        >
          <BsLinkedin />
        </a>
        <a href="https://github.com/KiranKumarBehera" target="_blank">
          <FaGithub />
        </a>
        <a href="https://www.instagram.com/_._.k_i_r_a_n._._/" target="_blank">
          <GrInstagram />
        </a>
      </div>
      <div className="footer__copyright">
        <small>&copy; Kiran Ku. Behera. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
