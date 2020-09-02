import React, { useState, useMemo } from 'react';
function Counter() {
    const [count, setCount]= useState(0);
    const [count2, setCount2]= useState(0);
    const incrementCounter = ()=>{
        setCount(count+1)
    }
    const incrementCounter2 = ()=>{
        setCount2(count2+1)
    }
    const isEven = useMemo( ()=>{
        let i=0
        while(i <200000000) i++
        return count %2 === 0
    },[count])
    return(
        <div> Using  useMemo hooks
              <button onClick={incrementCounter}>Counter one {count}</button>
              <span>{isEven? 'Even': 'Odd'}</span>
              <button onClick={incrementCounter2}>Counter two {count2}</button>
        </div>
    )
}
export default Counter;