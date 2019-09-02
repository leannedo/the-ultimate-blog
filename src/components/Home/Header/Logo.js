import React, {Component} from 'react';
import Logo_Page from './../../../assets/logo.jpg';

class Logo extends Component{
    render(){
        return(
            <div className='logo'>
                <img src={Logo_Page}/>
            </div>
        )
    }
}

export default Logo;