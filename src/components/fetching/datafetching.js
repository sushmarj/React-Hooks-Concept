import React, { useState, useEffect } from 'react';
import axios from 'axios';
function DataFetching() {
    const [posts, setPosts]= useState([]);
    useEffect(()=>{
        axios.get('http://localhost:5000/api/eventreg').then((res)=>{
        console.log(res)    
        setPosts(res.data)
    })
    .catch(err=>{
        console.log(err)
    })
    },[])
    return(
        <div> Using hooks
            <ul>
             { posts.map(post => (<li key={post.id}>{post.fullname}</li>)
            )}
            
              </ul>
        </div>
    )
}
export default DataFetching;