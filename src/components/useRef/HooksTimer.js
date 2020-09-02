import React, { useState, useEffect, useRef } from 'react';
const HooksTimer = () => {

const [timer, setTimer]=useState(0)
const intervalRef = useRef()
useEffect(()=>{
    intervalRef.current= setInterval(()=>{
    setTimer(prevState=> prevState +1)
    }, 1000)
return () =>{
        clearInterval(intervalRef.current)
        };
},[])
      return ( 
        <div>
            Hook Timer is {timer}
            <button onClick={()=>clearInterval(intervalRef.current)}>Clear time</button>
        </div>
     );
}
 
export default HooksTimer;