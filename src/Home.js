import React, { useState } from "react";
import "./home.css";

function Home() {
  const [count, setCount] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  const handleReset = () => {
    setCount(0);
  };

  const handleHover = () => {
    setIsHovered(true);

    // Remove the hover effect after a certain duration (e.g., 1 second)
    setTimeout(() => {
      setIsHovered(false);
    }, 1000);
  };

  return (
    <>
      <div className="container">
        <div className="sections">
          <h1 className="heading">Counter</h1>
          <p className="para">{count}</p>
          <div className="buttons">
            <button
              className={`increment btn ${isHovered ? "btn-hover" : ""}`}
              onMouseEnter={handleHover}
              onMouseLeave={handleHover}
              onClick={handleIncrement}
            >
              Increment
            </button>
            <button
              className={`decrement btn ${isHovered ? "btn-hover" : ""}`}
              onMouseEnter={handleHover}
              onMouseLeave={handleHover}
              onClick={handleDecrement}
            >
              Decrement
            </button>
            <button
              className={`reset btn ${isHovered ? "btn-hover" : ""}`}
              onMouseEnter={handleHover}
              onMouseLeave={handleHover}
              onClick={handleReset}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
