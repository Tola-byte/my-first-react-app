import { faCirclePlay } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Buttons from './Buttons'
import './Hero.css'
function Hero() {
  return (
    <div className='hero-container'>
    <video src="/videos/video-2.mp4" autoPlay loop muted />
    <h1>ADVENTURE WAITS</h1>
    <p>What you waiting for!</p>
    <div className="hero-btns">
    <Buttons className = "btns" buttonStyle = "btn--outline" buttonSize = "btn--large">GET STARTED</Buttons>
    <Buttons className = "btns" buttonStyle = "btn--primary" buttonSize = "btn--large">WATCH TRAILER <FontAwesomeIcon icon={faCirclePlay} /></Buttons>
    </div>
    </div>
  )
}

export default Hero