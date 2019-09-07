import React, {Component} from 'react';
import Header from '../components/Home/Header/Header';
import './../css/Home/Home.scss';
import HeroBanner from './../components/Home/Hero-Banner/Hero-Banner';

class Home extends Component{
    render(){
        return(
            <div>
                <Header />
                <HeroBanner />
            </div>
            
        )
    }
};

export default Home;

