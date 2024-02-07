import React from "react";
import "./styles/MobilePopUp.css";

const MobilePopUp = ({children, onClose}) => {
    return(
        <div className="mobile-popup-container">
            <div className="pop-up">
                {children}  
                <button className="mobile-close" onClick={onClose}>Close</button>
            </div>
        </div>
    );
}

export default MobilePopUp;
