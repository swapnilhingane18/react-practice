import {useState} from 'react';

export default function Counter(){
const [count,setCount]=useState(0);

    function incrementCount(){
        setCount(count+1);
    }
    function decrementCount(){
        setCount(count-1);
    }
    function resett(){
        setCount(count*0);
    }

    return (
        <div>
            <h1>States in React</h1>
            <h3>Count = {count}</h3>
            <button onClick={incrementCount}>+</button>
             <button onClick={decrementCount}>-</button>
              <button onClick={resett}>Reset Count</button>
        </div>
    );
}