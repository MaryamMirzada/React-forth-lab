import { useState } from "react"
const Counter = () => {
    const [count , setCount ] = useState(0)
    return(
        <div>
            <h4>
                Count : {count}
            </h4> <hr />
            <button onClick={() => setCount(count + 3)}>
                +
            </button>
            <button onClick={() => setCount(count - 3)}>
                - 
            </button>
            <button onClick={() => setCount(count * 3)}>
                * 
            </button>
            <button onClick={() => setCount(count / 3)}>
                /
            </button>
        </div>
    )
}
export default Counter