import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const linkedIn = <FontAwesomeIcon icon={faLinkedinIn} />
const gitHub = <FontAwesomeIcon icon={faGithub} />

const SocialLinks = () => {
    return (
        <div className='social-bar-container'>
            <a href="https://www.linkedin.com/in/leanedo/" target="_blank">{linkedIn}</a>
            <a href="https://github.com/leannedo" target="_blank">{gitHub}</a>
        </div>
    )

};

export default SocialLinks;