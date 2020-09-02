import React, { useState, useEffect } from 'react';
function HooksCounter1() {
    const [count, setCount]= useState(0);
    const [name, setName]= useState();
    useEffect(()=>{
        console.log('Updating document title')
        document.title= `Clicked ${count} times`
    },[count])
    return(
        <div> Using hooks
             <input type="text" value={name} onChange={e => setName(e.target.value)} />
              <button onClick={()=>setCount(count+1)}>Count {count}</button>
        </div>
    )
}
export default HooksCounter1;