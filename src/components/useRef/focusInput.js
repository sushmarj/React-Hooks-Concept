import React, { useEffect, useRef, useReducer } from 'react';
const FocusInput = () => {
    const inputRef= useRef(null)
    useEffect(()=>{
        // focus on input tag
        inputRef.current.focus()
    },[])
    return ( 
        <div>
             <input ref={inputRef} type="text" />
        </div>
     );
}
 
export default FocusInput;