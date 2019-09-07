import React, { Component } from 'react';
import Banner from './../../../assets/banner.png';

class HeroBanner extends Component {
    render(){
        return (
            <div className='hero-banner-container'>
                <img src={Banner}/>
            </div>
        )
    }
}

export default HeroBanner;