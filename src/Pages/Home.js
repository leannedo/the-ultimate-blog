import React, {Component} from 'react';
import Header from '../components/Home/Header/Header';
import './../css/Home/Home.scss';
import HeroBanner from '../components/Home/HeroBanner';

class Home extends Component{
    render(){
        return(
            <div className='homepage-index'>
                <Header />
                <HeroBanner />
            </div>
            
        )
    }
};

export default Home;

