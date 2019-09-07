import React, {Component} from 'react';
import Navigation_Bar from './Nav';
import Logo from './Logo';
import Social from './Social';


class Header extends Component {
    render(){
        return(
            <div className='header-container'>
                <Logo/>
                <Navigation_Bar />
                <Social />
            </div>
        )
    }
};

export default Header;