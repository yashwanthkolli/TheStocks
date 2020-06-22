import React from 'react';

export const Timer = () => (
    <div className="card-body" id='timer' style={{display: 'none'}}>
        <h5>You can sell in: </h5>
        <h3><span id='min'></span>:<span id='sec'></span></h3>
    </div>
)