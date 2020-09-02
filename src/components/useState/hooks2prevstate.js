import React, { useState } from 'react';
function Hooks2(){
    const initialCount = 0;
    const [count, setCount]= useState(initialCount);
    const incrementfive=()=>{
        for(let i=0; i<5; i++)
        setCount(prevCount => prevCount+ 1)
    }
    return (
        <div> count {count}
            <button onClick={()=>setCount(prevCount=> prevCount+ 1)}>Increment Count </button>
            <button onClick={()=>setCount(prevCount=> prevCount- 1)}>Decrement Count </button>
            <button onClick={()=>setCount(initialCount)}>Reset Count </button>
            <button onClick={incrementfive}>Increment by 5 Count </button>

        </div>
    )
}
 
export default Hooks2;