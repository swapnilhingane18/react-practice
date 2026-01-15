import { useState } from "react";
import "./Lottery.css"
function generateTicket() {
    return [
        Math.floor(Math.random() * 10),
        Math.floor(Math.random() * 10),
        Math.floor(Math.random() * 10)
    ];
}

function sum(arr) {
    return arr.reduce((sum,val) => sum + val, 0);
} 

generateTicket = () =>{
    return [
        Math.floor(Math.random() * 10),
        Math.floor(Math.random() * 10),
        Math.floor(Math.random() * 10)
    ]
}


export default function Lottery() {
    let [ticket, setticket] = useState(generateTicket());
    let iswinner = sum(ticket) == 15;
    return (
    <div>
        <h1>Lottery Game</h1>

        <div className="ticket">
            <span>{ticket[0]}</span>
            <span>{ticket[1]}</span>
            <span>{ticket[2]}</span>
        </div>
        
        <button onClick={() => setticket(generateTicket())}>New Ticket</button>
        <h3>{iswinner ? "You Win!" : "Try Again"}</h3>

        </div>);
}
