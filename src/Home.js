import React, { useState } from "react";
import "./home.css";

function Home() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <>
      <div className="container">
        <div className="sections">
          <h1 className="heading">Counter</h1>
          <p className="para">{count}</p>
          <div className="buttons">
            <button className="increment btn" onClick={handleIncrement}>
              Increment
            </button>
            <button className="decrement btn" onClick={handleDecrement}>
              Decrement
            </button>
            <button className="reset btn" onClick={handleReset}>
              Reset
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
