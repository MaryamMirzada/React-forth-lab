import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);


  return (
    <div>
      <h2>Counter</h2>
      {count > 0 && count <= 20 && <h3>Count started ✅</h3>}

      {count > 20 && count < 30 &&  <p>It is more than 20 🔥🔥</p>}
      {count > 30 && <p> it is more than 30 🌸</p>}
      <h4>count : {count}</h4>

      <button onClick={() => setCount(count + 5)}>Add Number</button>
      <button onClick={() => setCount(count - 7)}>Delete Number</button>

    
    </div>
  );
  
}

export default Counter;
