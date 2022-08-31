import React from 'react'
import '../App.css';
import {Button} from './Button';
import './HeroSection.css';
import bg_video from '/Users/mac/Documents/Workspace/react-website-space-toursm/src/Video/Space.mp4'

function HeroSection() {
  return (
    <div className='hero-container'>
        <video className='videoTag' autoPlay loop muted>
            <source src={bg_video} type='video/mp4' />
        </video>
        <h1>SPACE TOURISM</h1>
        <p>Spectacular adventures just one click away!</p>
        <div className='hero-btns'>
            <Button className='btns' buttonStyle='btn--outline'
            buttonSize='btn--large'
            >
                MORE INFOR
            </Button>

            <Button className='btns' buttonStyle='btn--primary'
            buttonSize='btn--large'
            >
                REGISTER NOW! 
            </Button>
        </div>
    </div>
  );
}

export default HeroSection;