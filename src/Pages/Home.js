import React, {Component} from 'react';
import Header from '../components/Home/Header/Header';
import HeroBanner from '../components/Home/HeroBanner';
import StorySection from '../components/Home/StorySection';
import './../css/Home/Home.scss';

class Home extends Component{
    render(){
        return(
            <div className='homepage-index'>
                <Header />
                <HeroBanner />
                <StorySection />
            </div>
            
        )
    }
};

export default Home;

