import React, {Component} from 'react';
import Header from '../components/Home/Header/Header';
import HeroBanner from '../components/Home/HeroBanner';
import StorySectionContainer from '../components/Home/StorySections/StorySectionContainer';
import './../css/Home/Home.scss';

class Home extends Component{
    render(){
        return(
            <div className='homepage-index'>
                <Header />
                <HeroBanner />
                <StorySectionContainer />
            </div>
            
        )
    }
};

export default Home;

