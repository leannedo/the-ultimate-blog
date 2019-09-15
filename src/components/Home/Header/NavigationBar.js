import React, { Component } from 'react';

class NavigationBar extends Component {
    render() {
        return (
            <div className='navigation-bar-container'>
                <ul className='navigation-bar'>
                    <li className='navigation-item'>Menu</li>
                    <li className='navigation-item'>About Me</li>
                    <li className='navigation-item'>Code'n Learn</li>
                    <li className='navigation-item'>Blog</li>
                    <li className='navigation-item'>Contact</li>
                </ul>
            </div>
        )
    }
};

export default NavigationBar;