import { useState } from "react";
import "./Lottery.css"
function generateTicket() {
    return [
        Math.floor(Math.random() * 10),
        Math.floor(Math.random() * 10),
        Math.floor(Math.random() * 10)
    ];
}


export default function Lottery() {
    let [ticket, setticket] = useState(generateTicket());
    return (
    <div>
        <h1>Lottery Game</h1>

        <div className="ticket">
            <span>{ticket[0]}</span>
            <span>{ticket[1]}</span>
            <span>{ticket[2]}</span>
        </div>

        </div>);
}
