import React from 'react';
import useInput from './useInput';
function UserForm () {
    const [firstname, bindFirstname, resetFirstname] = useInput('')
    const [lastname, bindLastname, resetLastname] = useInput('')
    
    const submitHandler = e =>{
        e.preventDefault()
        alert(`Hello ${firstname}. ${lastname}`);
        resetFirstname()
        resetLastname()
    }
    return ( 
    <div>
        <form onSubmit={submitHandler}> 
            <div>
                <label>First Name</label>
                <input 
                { ...bindFirstname} 
                type="text" />
            </div>
            <div>
                <label>Last Name</label>
                <input
                 { ...bindLastname} 
                 type="text" />
            </div>
            <button >Submit</button>
        </form>

    </div> 
    );
}
 
export default UserForm;