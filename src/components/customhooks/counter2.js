import React, { useState} from 'react';
import useCounterCustom from './counterCustom';
function Counter2() {
    const [count, increment, decrement, reset]= useCounterCustom(10, 10)
    return(
        <div> Count {count}
              <button onClick={increment}> increment</button>
              <button onClick={decrement}> decrement</button>
              <button onClick={reset}> reset</button>
        </div>
    )
}
export default Counter2; 