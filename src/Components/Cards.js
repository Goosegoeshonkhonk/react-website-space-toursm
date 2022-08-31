import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
  return (
    <div className='cards'>
        <h1> PLANETS: ESCAPED COMPELETLY </h1>
        <p> Early Bird Offer: The very first amazing planet tours now available </p>
        <div className='cards_container'>
            <div className='cards_wrapper'>
                <ul className='cards_items'>
                    {/* Mars card */}
                    <CardItem src={require('./Image/Mars.jpg')} 
                     text='Nüwa, Martian city made of tunnels built up to 150 metres deep into a cliff face'
                     label='Mars'
                     path='/Services'
                    />

                    {/* Moon card */}
                    <CardItem src={require('./Image/Moon.jpg')} 
                     text='NASAs Lunar Gateway, the permanent space station that will orbit the Moon'
                     label='Moon'
                     path='/Services'
                    />

                    {/* Neptune card */}
                    <CardItem src={require('./Image/Neptune.jpg')} 
                     text='Orbiting tour: Ready to be stunned by the breath-taking view of the triking blue hue planet'
                     label='Neptune'
                     path='/Services'
                    />

                     {/* Saturn card */}
                    <CardItem src={require('./Image/Saturn.jpg')} 
                    text='Orbiting tour: Ripples in the rings of Saturn reveal the misterious giant slushy core of the planet'
                    label='Saturn'
                    path='/Services'
                    />
                </ul>
            </div>
        </div> 
    </div>
  );
}

export default Cards;