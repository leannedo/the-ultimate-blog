import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const linkedIn = <FontAwesomeIcon icon={faLinkedinIn} />
const gitHub = <FontAwesomeIcon icon={faGithub} />

class Social extends Component {
    render(){
        return(
            <div className='social-bar-container'>
                {gitHub}
                {linkedIn}
            </div>
        )
    }
};

export default Social;