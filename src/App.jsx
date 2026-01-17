import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './basics/Counter.jsx'
import Button from './basics/Button.jsx'
import Form from './basics/Form.jsx'
import LikeButton from './basics/LikeButton.jsx'
import LudoBoard from './statehooks/LudoBoard.jsx'
import ToDoList from './mini-projects/ToDoList.jsx'
import "./mini-projects/ToDoList.css";
import Lottery from './mini-projects/Lottery.jsx'
import TicketNumber from './mini-projects/TicketNumber.jsx' 
import SearchBox from './mini-projects/SearchBox.jsx'



function App() {

  return (
    <>
    <SearchBox/>
    </>
  )
}

export default App
