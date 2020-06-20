import React from 'react';

export const MyPort = (props) => (
    <div>
        <h5 className="card-header"> My Portfolio</h5>
        <div className="card-body">
            <h5 className="card-title">Capital: {props.capital}</h5>
            <div id='investdetails' style={{display: 'none'}}>
                <p className="card-text">Invested in: {props.investedStock.title}</p>
                <p className="card-text">Invested Amount: {props.investamt}</p>
            </div>
		</div>
    </div>
)