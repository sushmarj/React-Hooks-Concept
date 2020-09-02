import React, {useReducer} from 'react';
import CompA from './compA';
import CompB from './compB';
import CompC from './compC';
export const CountContext = React.createContext();
const initialState = 0;
const reducer = (state, action) => {
    switch(action){
        case 'increment' :
            return state + 1
        case 'decrement' :
            return state - 1
        case 'reset' :
            return initialState
        default :
            return state
    }
}
function Root() {
    const [count, dispatch]= useReducer(reducer, initialState)
    return(
        <CountContext.Provider value= {{countState: count, countDispatch: dispatch}}>
        <div> <div>Count - {count}</div>
            <CompA/>
            <CompB/>
            <CompC/>
              
        </div>
        </CountContext.Provider>
    )
}
export default Root;