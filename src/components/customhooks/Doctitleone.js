import React, { useState} from 'react';
import useDoc from './useCustomhook';
function DocTitleOne() {
    const [count, setCount]= useState(0);
    useDoc(count)
    return(
        <div> Using hooks
              <button onClick={()=>setCount(count+1)}>Count {count}</button>
        </div>
    )
}
export default DocTitleOne;