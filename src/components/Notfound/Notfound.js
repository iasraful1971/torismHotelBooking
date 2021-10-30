import React from 'react';
import notfound from '../../images/notfound.png';
import './Notfound.css';
const Notfound = () => {
    return (
        <div className="not-found">
            <div>
                    <img className="not" src={notfound} alt="" />
            </div>
        </div>
    );
};

export default Notfound;