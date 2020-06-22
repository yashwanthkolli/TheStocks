import React from 'react';

export const Timer = () => (
    <div className="card-body" id='timer' style={{display: 'none'}}>
        <h5>You can sell in: </h5>
        <h3>00:<span id='time'></span></h3>
    </div>
)