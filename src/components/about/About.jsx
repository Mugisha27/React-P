import React from 'react'
import './about.css'
import ME from '../../assets/face.png'


const About = () => {
  return (
    <section id='about'>
     
     <h2>About Me</h2>
      
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
         <p>
         Aspiring Front and back-end Web Developer with a background in digital marketing and sales. Currently pursuing a Full web Development Certificate from the University of Washington to gain skills and experience that I can utilize and combine with my strength and background to create visually impactful websites and applications.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About