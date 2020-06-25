import React from 'react';
import LineChart from './Chart';

export const Stockdetail = (props) => (
    <div>
        <h1 className='text-title text-center'>{props.stock.title}</h1>
        <LineChart className='graph' data={props.stock.data} />
    </div>
)