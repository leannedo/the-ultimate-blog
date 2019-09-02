import React, {Component} from 'react';

class Navigation_Bar extends Component {
    render(){
        return(
            <div className='navigation-bar'>
                <ul>
                    <li>Menu</li>
                    <li>About Me</li>
                    <li>Code'n Learn</li>
                    <li>Blog</li>
                    <li>Contact</li>
                </ul>
            </div>
            
        )
    }
};

export default Navigation_Bar;