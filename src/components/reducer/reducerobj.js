import React, {useReducer} from 'react';
const initialState = {
    firstCounter : 0 ,         // converting into object
    secondCounter : 10
}
const reducer = (state, action) => {
    switch(action.type){
        case 'increment' :
            return {...state, firstCounter :state.firstCounter + action.value} //using action as object we can use addtion data in reducer function
        case 'decrement' :
            return {...state, firstCounter :state.firstCounter - action.value}
        case 'increment2' :
            return {...state, secondCounter :state.secondCounter + action.value} 
        case 'decrement2' :
            return {...state, secondCounter :state.secondCounter - action.value}
        case 'reset' :
            return initialState
        default :
            return state
    }
}
function ReducerObj() {
   const [count, dispatch]= useReducer(reducer, initialState)
    return(
        <div>
            <div> First Count - {count.firstCounter}</div>
            <div> Second Count - {count.secondCounter}</div>
        /* converting action into object with property type */
            <button onClick={()=>dispatch({type:'increment', value:1 })} >Increment</button>      
            <button onClick={()=>dispatch({type:'decrement', value:1})} >Decrement</button>
            <button onClick={()=>dispatch({type:'increment', value:6})} >Increment 6</button>      
            <button onClick={()=>dispatch({type:'decrement', value:6})} >Decrement 6</button>
            
            <button onClick={()=>dispatch({type:'reset'})}>Reset</button>
            <div>
            <button onClick={()=>dispatch({type:'increment2', value:1 })} >Increment counter 2</button>      
            <button onClick={()=>dispatch({type:'decrement2', value:1})} >Decrement counter 2</button>
            </div>
            
        </div>
    )
}
export default ReducerObj;