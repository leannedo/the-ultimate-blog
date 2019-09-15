import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const linkedIn = <FontAwesomeIcon icon={faLinkedinIn} />
const gitHub = <FontAwesomeIcon icon={faGithub} />

const SocialLinks = () => {
    return (
        <div className='social-bar-container'>
            {gitHub}
            {linkedIn}
        </div>
    )

};

export default SocialLinks;