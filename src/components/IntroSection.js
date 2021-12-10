import React from 'react'
import '../App.css'

import './IntroSection.css'
import video from '../videos/market.mp4'


function IntroSection()
{
    return (
        <div className='hero-container'>
            <video controls autoPlay loop muted>
                <source src={video} type="video/mp4"/>
            </video>
            <h1>Nittany Marketplace</h1>
            <p>The mart for all your needs!</p>
        </div>
    )
}

export default IntroSection