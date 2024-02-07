import React from 'react';
import './styles/AboutPopUp.css';

const AboutPopUp = ({onClose, children}) => {
    return(
        <div className="master-ball">
            <div className="arceus">
                {children}
                <button className="close" onClick={onClose}>Back</button>
            </div>
        </div>
    );
}

export default AboutPopUp;
