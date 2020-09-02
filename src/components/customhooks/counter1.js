import React from 'react';
import useCounterCustom from './counterCustom';

function Counter1() {
    const [count, increment, decrement, reset]= useCounterCustom(0, 1)
    return(
        <div> Count {count}
              <button onClick={increment}> increment</button>
              <button onClick={decrement}> decrement</button>
              <button onClick={reset}> Reset</button>
        </div>
    )
}
export default Counter1; 