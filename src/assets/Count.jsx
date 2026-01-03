import { useState } from "react";

function Count() {
  const [count, setCount] = useState(2);

  return (
    <div>
      <h3>Count : {count}</h3>
      <hr />

      {count > 50 && <p>It is more than 50</p>}
      {count < 50 && <p>It is less than 50</p>}

      {/* جفت یا طاق */}
      {count % 2 === 0 ? <p>عدد جفت است ✅</p> : <p>عدد طاق است ❌</p>}

      <button
        onClick={() => {
          if (count >= 0 && count < 100) {
            setCount(count + 2);
          }
        }}
      >
        Increase
      </button>

      <button
        onClick={() => {
          if (count > 0) {
            setCount(count - 1);
          }
        }}
      >
        Decrease
      </button>
    </div>
  );
}

export default Count;
