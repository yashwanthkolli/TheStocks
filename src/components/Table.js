import React, { Component } from 'react'
import { Stockdetail } from './Stockdetail';
import { MyPort } from './Myportfolio';
import{ db } from '../firebase/firebase.utils'

export default class Table extends Component {
    constructor(){
        super();
        this.state={
            stocks:[],
            selectedStockId: null,
            capital: 10000,
            selectedStock: {},
            investamt: null,
            investedStock: {}
        }
    }
    componentDidMount(){
    db.collection('stocks')
        .get()
        .then( snapshot => {
            const stocks=[]
            snapshot.forEach(doc => {
                const data = doc.data()
                stocks.push(data)
            })
            this.setState({stocks: stocks})
        })
        .catch( error => console.log(error))
    }
    stockclicked = (e) => {
        this.forceUpdate()
        this.state.selectedStockId=e.target.id
        this.state.selectedStock=this.state.stocks[e.target.id-1]
        document.getElementById('sellbtn').disabled=true
        document.getElementById('selectedstockdetails').style={display: 'block'}
    }
    investamtchanged = (e) => {
        if(e.target.value<=this.state.capital){
            this.setState({investamt: e.target.value})
        }else{
            alert('Investment Cannot be greater than Capital')
            e.target.value=this.state.investamt
        }
    }
    investclicked = () => {
        var confirmation=window.confirm("Do You Want To Invest Here?")
        if(confirmation===true){
            if(this.state.investamt>0){
                this.forceUpdate()
                this.setState((prevstate) => {
                    return{
                        capital: prevstate.capital - prevstate.investamt,
                        investedStock: prevstate.selectedStock
                    }
                } )
                document.getElementById('investinput').value=''
                document.getElementById('investinput').disabled=true
                document.getElementById('investbtn').disabled=true
                setInterval(function(){
                    document.getElementById('sellbtn').disabled=false
                }, 900000)
                alert('You invested in '+ this.state.selectedStock.title)
                document.getElementById('investdetails').style={display: 'block'}
            }else{
                alert('Enter Valid Investment Amount')
            }
        }else{
            alert("Cancelled")
        }
    }
    sellclicked = () => {
        var confirmation=window.confirm("Do You Want To Sell?")
        if(confirmation===true){
            this.forceUpdate()
            this.setState(() => {
                return{
                    capital: this.state.capital + (this.state.investamt * this.state.investedStock.returns)
                }
            })
            document.getElementById('sellbtn').disabled=true 
        } else{
            alert('Cancelled')
        }  
    }
    render() {
        return (
            <div>
                <div className='row'>
                    <div className='col-md-2 mx-auto'>
                        <table className='table table-dark'>
                            <tr>
                                <th>#</th>
                                <th>Markets</th>
                            </tr>
                            <tbody>
                                {this.state.stocks.map(stock => <tr key={stock.id}><td>{stock.id}</td><td className='stocktable' id={stock.id} onClick={this.stockclicked}>{stock.title}</td></tr>)}
                            </tbody>
                        </table>
                    </div>
                    <div className='col-md-7' id='selectedstockdetails' style={{display: 'none'}}>
                        <Stockdetail stock={this.state.selectedStock}/>
                        <div  className="container mx-auto my-3">
                            <input type='number' className="form-control" id='investinput' onChange={this.investamtchanged}/>
                            <br></br>
                            <button id='investbtn' className="btn btn-success btn-sm mx-2" onClick={this.investclicked}>Invest</button>
                            <button id='sellbtn' className='btn btn-warning btn-sm investdetails' onClick={this.sellclicked}>Sell</button>
                        </div>
                    </div>
                    <div className="card col-md-2 mx-auto mb-3 bg-dark" >
                        <MyPort capital={this.state.capital} investedStock={this.state.investedStock} investamt={this.state.investamt} />
                    </div>
                </div>
            </div>
        )
    }
}
