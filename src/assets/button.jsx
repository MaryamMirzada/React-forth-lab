import { useState } from "react";

function Button (){
    const [count , setcount] = useState(0)
    return (
      <div>
        <h3>Counter : {count}</h3> 
       <hr />
    
      <button onClick={() => { 
        if(count >=0 && count <= 9){
            return (
                setcount (count + 1 )
               
            )     
        }
      } }>Increase</button>
      <button onClick={() => {
        if(count > 0 && count <12){
            return(
                setcount(count -1)
            )
        }
      }}>Decrease</button>
      </div>
    );
}
export default Button