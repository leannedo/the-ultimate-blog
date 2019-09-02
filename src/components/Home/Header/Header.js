import React, {Component} from 'react';
import Navigation_Bar from './Nav';
import Logo from './Logo';


class Header extends Component {
    render(){
        return(
            <div className='Header'>
                <Logo/>
                <Navigation_Bar />
            </div>
        )
    }
};

export default Header;