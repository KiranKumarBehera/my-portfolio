import React from "react";
import "./about.css";
import ME from "../../assets/main.jpg";
import { FaAward } from "react-icons/fa";
import { MdWorkOutline } from "react-icons/md";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About_Image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>3+ Years Of Learning And Applying</small>
            </article>
            <article className="about__card">
              <MdWorkOutline className="about__icon" />
              <h5>Internships</h5>
              <small>1 Completed</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>20+ Projects Done</small>
            </article>
          </div>
          <p>
            I am a positive, enthusiastic, and competent developer, who over the
            years has buildup a diverse range of skills, qualities, and
            attributes that guarantee you that I will perform highly as a
            working professional. I have extensive experience working both alone
            and as a part of a team on often time-sensitive projects and designs
            that had strict deadlines. I take my work seriously, which means I
            always make sure that a job assigned to me ends out perfect and if I
            feel that the project requires some technologies that I haven't
            practiced yet, then I start researching about that and make sure
            that I learn those skills to implement on the job assigned. I always
            put the project and work needs at the forefront of everything I do,
            and the work I carry out will be consistent to a first-class
            standard.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
