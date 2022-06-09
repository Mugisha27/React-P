import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'


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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque eos voluptatem eius dolorem maiores nihil ducimus at rem ullam reprehenderit quidem quia deserunt, molestiae, eligendi amet repellat molestias quos totam.
          </p>

          {/* <a href="#contact" className='btn btn-primary'>Let's Talk</a> */}
        </div>
      </div>
    </section>
  )
}

export default About