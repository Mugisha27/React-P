import React from 'react'
import CV from '../../assets/cv.pdf'

const CTA = () => {
  return (
    <div className='cta'>
     <a href={CV} download>MY Resume</a>
     <a href="#contact">Contact me Here</a>
    </div>
  )
}

export default CTA
