import { useState } from "react"

const Count = () => {
    const [count , setCount] = useState(1)
    return (
      <div>
        <h4>Counter : {count}</h4>
        {count > 0 && count <= 10  ? "Number is Small" : ""}
        {count > 10 && count <= 20 ? 'Number is mediem' : ''}
        {count > 20 && <p>"Number is large"</p>}
        <hr />
        <button
          onClick={() => {
            if (count > 0) {
              setCount(count + 1);
            }
          }}
        >
          Number
        </button>
      </div>
    );
}

export default Count