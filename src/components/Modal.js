import React from 'react';

const Modal = ({onClose, children}) => {
    return(
        <div className="master-ball">
            <div className="arceus">
                {children}
                <button onClick={onClose}>Back</button>
            </div>
        </div>
    );
}

export default Modal;
