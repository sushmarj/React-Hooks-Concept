import React, { useState } from 'react';
function Hooks4() {
    const [items, setItems]= useState([]);
    const additem=()=>{
        setItems([...items,{
            id: items.length,
            value: Math.floor(Math.random()*10 + 1) //to randomly select numbers between 1 to 10
        }])
    }
    return(
      <div>
          <button onClick={additem}> Add item</button>
          <ul>
          {items.map(item=>(
              <li key={item.id}>{item.value}</li>
          ))}
          </ul>
         
      </div>
    )
}
export default Hooks4;