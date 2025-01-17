import React, { useState } from "react";

const Class1: React.FC = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h2>Welcome to Class 1: Introduction to React</h2>
      <p>In this lesson, we will cover the basics of React components, JSX, and state management.</p>

      <h3>Exercise 1: Counter Component</h3>
      <p>This is a simple counter. Try incrementing and decrementing the value:</p>

      <div style={{ margin: "20px 0", display: "flex", gap: "10px", alignItems: "center" }}>
        <button onClick={handleDecrement} style={buttonStyle}>-</button>
        <span style={{ fontSize: "1.5rem" }}>{count}</span>
        <button onClick={handleIncrement} style={buttonStyle}>+</button>
      </div>

      <h3>Exercise 2: Modify the Counter</h3>
      <p>
        Change the initial value of the counter or add a reset button. Explore how React state works by modifying the code!
      </p>
    </div>
  );
};

const buttonStyle = {
  padding: "10px 20px",
  fontSize: "1rem",
  cursor: "pointer",
  border: "none",
  borderRadius: "5px",
  backgroundColor: "#007BFF",
  color: "white",
};

export default Class1;