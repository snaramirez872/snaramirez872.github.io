import React from 'react';

const Modal = ( { onClose, children }) => {
    return(
        <div className="master-ball">
            <div className="arceus">{children}</div>
            <button onClick={ onClose }>Back</button>
        </div>
    );
}

export default Modal;
