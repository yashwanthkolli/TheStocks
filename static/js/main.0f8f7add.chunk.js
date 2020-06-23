(this["webpackJsonpstock-market"]=this["webpackJsonpstock-market"]||[]).push([[0],{14:function(e,t,a){e.exports=a(27)},19:function(e,t,a){},20:function(e,t,a){},27:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(9),s=a.n(l),i=(a(19),a(20),a(10)),o=a(11),r=a(12),d=a(13),m=function(e){return c.a.createElement("div",null,c.a.createElement("h1",{className:"text-title text-center"},e.stock.title),c.a.createElement("img",{className:"img-fluid rounded",alt:"Graph",src:e.stock.img}))},u=function(e){return c.a.createElement("div",null,c.a.createElement("h5",{className:"card-header"}," My Portfolio"),c.a.createElement("div",{className:"card-body"},c.a.createElement("h5",{className:"card-title"},"Capital: ",e.capital),c.a.createElement("div",{id:"investdetails",style:{display:"none"}},c.a.createElement("p",{className:"card-text"},"Invested in: ",e.investedStock.title),c.a.createElement("p",{className:"card-text"},"Invested Amount: ",e.investamt))))},v=a(2),k=a.n(v);a(21),a(24);k.a.initializeApp({apiKey:"AIzaSyDZ3xTE5LdS5JnRlaqbv-h_7fpSR7ckjns",authDomain:"stocks-db-cf94e.firebaseapp.com",databaseURL:"https://stocks-db-cf94e.firebaseio.com",projectId:"stocks-db-cf94e",storageBucket:"stocks-db-cf94e.appspot.com",messagingSenderId:"382635554204",appId:"1:382635554204:web:839b2f9dd2572b6f4ac459",measurementId:"G-T44MRMH5Y0"});k.a.auth();var E=k.a.firestore(),p=(k.a,function(){return c.a.createElement("div",{className:"card-body",id:"timer",style:{display:"none"}},c.a.createElement("h5",null,"You can sell in: "),c.a.createElement("h3",null,c.a.createElement("span",{id:"min"}),":",c.a.createElement("span",{id:"sec"})))}),b=function(e){Object(d.a)(a,e);var t=Object(r.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).stockclicked=function(t){e.forceUpdate(),e.state.selectedStockId=t.target.id,e.state.selectedStock=e.state.stocks[t.target.id-1],document.getElementById("selectedstockdetails").style={display:"block"}},e.investamtchanged=function(t){t.target.value<=e.state.capital?e.setState({investamt:t.target.value}):(alert("Investment Cannot be greater than Capital"),t.target.value=e.state.investamt)},e.investclicked=function(){var t=e.state.time;if(!0===window.confirm("Do You Want To Invest Here?"))if(e.state.investamt>0){e.forceUpdate(),e.setState((function(e){return{capital:e.capital-e.investamt,investedStock:e.selectedStock}})),document.getElementById("investinput").value="",document.getElementById("investinput").disabled=!0,document.getElementById("investbtn").disabled=!0,document.getElementById("timer").style={display:"block"},setTimeout((function(){document.getElementById("sellbtn").disabled=!1}),1e3*t);var a=t%60,n=(t-a)/60;setInterval((function(){a>0?a-=1:n>0?(n-=1,a=59):(n=0,a=a>0?a:0),document.getElementById("sec").textContent=a>9?a:"0"+a,document.getElementById("min").textContent=n>9?n:"0"+n}),1e3),alert("You invested in "+e.state.selectedStock.title),document.getElementById("investdetails").style={display:"block"}}else alert("Enter Valid Investment Amount");else alert("Cancelled")},e.sellclicked=function(){!0===window.confirm("Do You Want To Sell?")?(e.forceUpdate(),e.setState((function(){return{capital:e.state.capital+e.state.investamt*e.state.investedStock.returns}})),document.getElementById("sellbtn").disabled=!0):alert("Cancelled")},e.state={stocks:[],selectedStockId:null,capital:1e4,selectedStock:{},investamt:null,investedStock:{},time:10},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;document.getElementById("sellbtn").disabled=!0,E.collection("stocks").get().then((function(t){var a=[];t.forEach((function(e){var t=e.data();a.push(t)})),e.setState({stocks:a})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){var e=this;return c.a.createElement("div",null,c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-2 mx-auto"},c.a.createElement("table",{className:"table table-dark"},c.a.createElement("tr",null,c.a.createElement("th",null,"#"),c.a.createElement("th",null,"Markets")),c.a.createElement("tbody",null,this.state.stocks.map((function(t){return c.a.createElement("tr",{key:t.id},c.a.createElement("td",null,t.id),c.a.createElement("td",{className:"stocktable",id:t.id,onClick:e.stockclicked},t.title))}))))),c.a.createElement("div",{className:"col-md-7",id:"selectedstockdetails",style:{display:"none"}},c.a.createElement(m,{stock:this.state.selectedStock}),c.a.createElement("div",{className:"container mx-auto my-3"},c.a.createElement("input",{type:"number",className:"form-control",id:"investinput",onChange:this.investamtchanged}),c.a.createElement("br",null),c.a.createElement("button",{id:"investbtn",className:"btn btn-success btn-sm mx-2",onClick:this.investclicked},"Invest"),c.a.createElement("button",{id:"sellbtn",className:"btn btn-warning btn-sm investdetails",onClick:this.sellclicked},"Sell"))),c.a.createElement("div",{className:"col-md-2 mx-auto mb-3 row"},c.a.createElement("div",{className:"card row  bg-dark Myport"},c.a.createElement(u,{capital:this.state.capital,investedStock:this.state.investedStock,investamt:this.state.investamt})),c.a.createElement("div",{className:"card row  bg-dark Timer"},c.a.createElement(p,{time:this.state.timer})))))}}]),a}(n.Component);a(26);var f=function(){return c.a.createElement("div",{className:"App mx-3 my-5"},c.a.createElement(b,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[14,1,2]]]);
//# sourceMappingURL=main.0f8f7add.chunk.js.map