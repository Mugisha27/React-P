import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/book.png'
import IMG2 from '../../assets/weather.png'
import IMG3 from '../../assets/dating.png'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Book Search Engine',
    github: 'https://github.com/Mugisha27/Book',
    demo: 'https://desolate-cliffs-12103.herokuapp.com/'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Weather Dashboard',
    github: 'https://github.com/Mugisha27/Weather',
    demo: 'https://mugisha27.github.io/Weather/'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Figma dashboard UI kit for data design web apps',
    github: 'https://github.com/Mugisha27/Final-Project-Dating-Sim1',
    demo: 'https://calm-hamlet-19238.herokuapp.com/'
  },
  
]


const Portfolio = () => {
  return (
    <section id='portfolio'>
      
      <h2>Projects</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className='portfolio__item'>
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className='btn' target='_blank'>Github</a>
                <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
              </div>
            </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio