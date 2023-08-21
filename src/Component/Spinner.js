import spin from "./spin.gif"
import React,{useState} from 'react'

 const Spinner = ()=> {

   const [data,setData] = useState(0);
    return (
    
      <div className="text-center">
        <img  src={spin} alt="spinner" height="80px" width="80px"/>
     
      </div>
    )
  
}
export default Spinner