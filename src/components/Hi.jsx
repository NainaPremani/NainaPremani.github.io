import React from 'react'
import "./HiStyles.css";
import imageintro from "../images/image-intro.jpg"

const Hi = () => {
  return (
    <div>
      <div className='Hi'>
        <div className='mask'>
            <img className='into-img' src={imageintro} alt=""></img>
        </div>
        <div className='content'>
            <p>Hello, my name is</p>
            <br />
            <h3>Naina Premani</h3>
            <h3>I'm a Full Stack Web Developer</h3>
        </div>
      </div>
    </div>
  )
}

export default Hi
