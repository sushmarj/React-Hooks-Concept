import React, { useState, useEffect } from 'react';
function HooksMouse() {
    const [x, setX]= useState(0);
    const [y, setY]= useState(0);

    const logMousePositon =e=>{
        setX(e.clientX)
        setY(e.clientY)
    }
useEffect(()=>{
    console.log('useEffect called')
    window.addEventListener('mousemove', logMousePositon)
    return()=>{
        console.log("component unmounting code");
        window.removeEventListener('mousemove', logMousePositon)
    }
}, []) //if it doesn't depend on any condition, state or props, there is no reason to call this on rerenders
    return(
        <div> Using hooks
              X - {x}
               Y - {y}
        </div>
    )
}
export default HooksMouse;