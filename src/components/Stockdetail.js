import React from 'react';

export const Stockdetail = (props) => (
    <div>
        <h1 className='text-title text-center'>{props.stock.title}</h1>
        <img className="img-fluid rounded" alt='Graph' src={props.stock.img}/>
    </div>
)