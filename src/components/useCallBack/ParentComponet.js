import React,{useState, useCallback} from 'react';
import Title from './title';
import Count from './count';
import Button from './botton';

function ParentComponent() {
 const [age, setAge]=useState(27)
 const [salary, setSalary]=useState(25000)
 const incrementAge = useCallback( ()=>{
     setAge(age+1)
  },[age] )
 const incrementsalary = useCallback( ()=>{
    setSalary(salary+5000)
  },[salary]  )
    return(
        <div> 
            <Title/>
            <Count text="age" count={age} />
            <Button handleClick={incrementAge}>Increment Age</Button>
            <Count text="salary" count={salary} />
            <Button handleClick={incrementsalary}>Increment Salary</Button>
                            
        </div>
    )
}
export default ParentComponent;