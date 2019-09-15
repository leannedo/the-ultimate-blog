import React, { Component } from 'react';
import NavigationBar from './NavigationBar';
import Logo from './Logo';
import SocialLinks from './SocialLinks';
import '../../../css/Home/Header.scss';

class Header extends Component {
    render() {
        return (
            <div className='header-container'>
                <Logo />
                <NavigationBar />
                <SocialLinks />
            </div>
        )
    }
};

export default Header;