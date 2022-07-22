import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
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
  );
};

export default HeaderSocials;
