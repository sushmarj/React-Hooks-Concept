import React, { useReducer, useEffect } from 'react';
import axios from 'axios';
const initialState ={
    loading : true,
    error : ' ',
    post : { }
}
const reducer = (state, action)=>{
    switch(action.type){
        case 'fetchingsuccess':
            return {
                loading : false,
                error : ' ',
                post :  action.payload
            }
        case 'fetchingError':
            return {
                loading : false,
                error : 'Something went wrong ',
                post :  {}
                }
        default : 
            return state
    }
}
function DataFetching2() {
    const [state, dispatch]=useReducer(reducer, initialState) 
   
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts/2').then((res)=>{
       dispatch({type:"fetchingsuccess", payload : res.data})
    })
    .catch(err=>{
        dispatch({type:"fetchingError"})
    })
    },[])
    return(
        <div>
          {state.loading ? 'loading': state.post.title}
          {state.error ? state.error: null }
           
        </div>
    )
}
export default DataFetching2;