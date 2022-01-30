import { useState } from "react";

const UseStateFun = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount((prev) => prev + 1)}>increament</button>
      <button onClick={() => setCount((prev) => prev - 1)}>decreament</button>
    </div>
  );
};

export default UseStateFun;
