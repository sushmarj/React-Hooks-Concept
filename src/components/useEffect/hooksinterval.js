import React, { useState, useEffect } from 'react';
function HooksInterval() {
    const [count, setCount]= useState(0);
    
    const tick = e=>{
        setCount(prevCount=>prevCount+1)
    }
    useEffect(()=>{
       const interval = setInterval(tick, 1000)
        return()=>{
            console.log("component unmounting code");
            clearInterval(interval);
        }
    },[])
    return(
        <div> Using hooks - 
              {count}
        </div>
    )
}
export default HooksInterval;