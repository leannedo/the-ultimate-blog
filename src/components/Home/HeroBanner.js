import React from 'react';
import banner from './../../assets/herobanner.jpg';

const HeroBanner = () => {
    return (
        <div className='hero-banner-container'>
            <img src={banner} alt='hero-banner'/>
        </div>
    )
}

export default HeroBanner;