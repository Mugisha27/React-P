import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'


const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/chris-mugisha-b7120413b/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/Mugisha27" target="_blank"><FaGithub/></a>
       
    </div>
  )
}

export default HeaderSocials