import React from 'react';
import story1 from '../../assets/story-1.jpg';
import '../../css/Home/StorySection.scss';

const StorySection = () => {
    return (
        <div className='story-section-container'>
            <div className='story-info-card'>
                <div className='story-title'>Hello World</div>
                <div className='story-subtitle'>This is where subtitle goes...</div>
                <button className='btn story-cta-btn'>Talk Coding</button>
            </div>
            <div className='story-index-counter'>01</div>
            <div className='story-image'><img src={story1} /></div>
        </div>
    )
}

export default StorySection;