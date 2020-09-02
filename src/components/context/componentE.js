import React, {useContext} from 'react';
import ComponentF from './componentF';
import {Usercontext, Channelcontext} from  '../../App'
function ComponentE() {
    const user = useContext(Usercontext);
    const channel = useContext(Channelcontext);
    return(
        <div>
             <ComponentF/>
             {user} . {channel}
        </div>
    )
}
export default ComponentE;