import React from 'react';
import { Usercontext, Channelcontext } from '../../App';
function ComponentF() {
    
    return(
        <div> 
            <Usercontext.Consumer >
                {user => {
                    return (

                <Channelcontext.Consumer>
                {
                    channel => {
                    return  <div> User Context Value : {user}, channel context value : {channel}</div>
                    }
                }
                </Channelcontext.Consumer>
               ) } } 
            </Usercontext.Consumer>
              
        </div>
    )
}
export default ComponentF;