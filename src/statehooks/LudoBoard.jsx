import {useState} from "react"
export default function LudoBoard (){

let[Moves,setMoves]=useState({blue : 0,yellow : 0,green : 0,red : 0});
let [cout,setcount]=useState(0);

let updateBlue = ()=>{
    setMoves(prev => ({
  ...prev,
  blue: prev.blue + 1
}));
}
let updateYellow = ()=>{
    setMoves(prev => ({
  ...prev,
  yellow: prev.yellow + 1
}));
}
let updateGreen = ()=>{
    setMoves(prev => ({
  ...prev,
  green: prev.green + 1
}));
}
let updateRed = ()=>{
    setMoves(prev => ({
  ...prev,
  red: prev.red + 1
}));
}

    return(
        <div>
            <p>Game Begins</p>
            <div className="board">
                <p>Blue Moves ={Moves.blue}</p>
                <button style={{backgroundColor: "blue", color: "white"}} onClick={updateBlue}>+1</button>

                <p>Yellow Moves = {Moves.yellow}</p>
                <button style={{backgroundColor: "yellow", color: "black"}} onClick={updateYellow}>+1</button>

                <p>Green Moves = {Moves.green}</p>
                <button style={{backgroundColor: "green", color: "white"}} onClick={updateGreen}>+1</button>

                <p>Red Moves = {Moves.red}</p>
                <button style={{backgroundColor: "red", color: "white"}} onClick={updateRed}>+1</button>

            </div>
        </div>
    )
}