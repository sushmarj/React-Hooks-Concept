import React, { useState, useEffect } from 'react';
import axios from 'axios';
function FetchingId() {
   
    const [post, setPost]= useState([]);
    const [id, setId]= useState(1);
    const [idFromButton, setIdFromBottom]= useState(1);
    const handleClick=()=>{
        setIdFromBottom(id)

    }

    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromButton}`).then((res)=>{
        console.log(res)    
        setPost(res.data)
    })
    .catch(err=>{
        console.log(err)
    })
    },[idFromButton])
    return(
        <div> Using hooks
           <input type='text' value={id} onChange={e=>setId(e.target.value)} />
           <button onClick={handleClick}> Fetch data </button>
          <div>{post.title}</div> 
        </div>
    )
}
export default FetchingId;