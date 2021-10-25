import React, { useState } from "react";

const UpdateState = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <h1>{count}</h1>
      <button onClick={()=>{
          setCount(count+1)
      }}>update count</button>
    </>
  );
};

export default UpdateState;
