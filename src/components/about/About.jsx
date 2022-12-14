import React from "react"
import "./about.css"
import ME from "../../assets/me-about.jpg"
import {FaAward} from 'react-icons/fa'
import {FiUser, FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'
const About = () => {
  return (
    <section id="about">
      <h5>Get To Know </h5>
      <h2>About me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">

           
            <article className='about__card'>
            <FaAward className='about__icons'/>
              <h5>Experience</h5>
              <small>1+ Years Working</small>
            </article>

            <article className='about__card'>
            <FiUser className='about__icons'/>
              <h5>Clients</h5>
              <small>200+ India</small>
            </article>

            <article className='about__card'>
            <VscFolderLibrary className='about__icons'/>
              <h5>Project</h5>
              <small>40+ Completed</small>
            </article>

          </div>


          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex recusandae accusantium et totam obcaecati eum, labore aperiam assumenda, officia omnis harum, ipsum libero sint iure. Tempora nam error veniam officiis.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  );
};

export default About;
