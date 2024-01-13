import React from 'react';
import './styles/Modal.css';

const Modal = ({onClose, children}) => {
    return(
        <div className="master-ball">
            <div className="arceus">
                {children}
                <a className="close" onClick={onClose}>Back</a>
            </div>
        </div>
    );
}

export default Modal;
