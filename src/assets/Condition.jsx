import { useState } from "react";

function Condition (){
    const [count , setCount ] = useState(0)
    let message = '' 
    if(count === 0 ){
        message = 'it is the minimam Number'
    }else if(
        count === 10
    ){
        message = 'it is the maximam Number'
    }
    else{
        message = 'you can change the Number'
    }
    return (
      <div>
        <h3>Condition : {count}</h3>
        <p>
            {message} 
        </p> <hr />
        <button onClick={() => {
            if(count > 0 && count <= 10){
                return (
                    setCount(count + 1)
                )
            }
        }}
            disabled='message'>Increase</button>
        <button onClick={() => {
            if( count >=0 && count <=10){
                return (
                    setCount(count - 1)
                )
            }
        }}
            disabled= 'message'>Decrease</button>
      </div>
    );
}

export default Condition 