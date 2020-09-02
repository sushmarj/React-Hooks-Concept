import React, { useState } from 'react';
import HooksMouse from './hooksmouse';
function MouseContainer() {
    const [display, setDisplay]= useState(true);
    
    return(
        <div> Using hooks
              <button onClick={()=>setDisplay(!display)}> Toggle Display </button>
              {display && <HooksMouse/>}
        </div>
    )
}
export default MouseContainer;