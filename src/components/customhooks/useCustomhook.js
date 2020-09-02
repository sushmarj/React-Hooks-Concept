import { useEffect } from 'react';
function useDoc (count) {
    useEffect(()=>{
        document.title=`count - ${count}`
    },[count])
}
 
export default useDoc;