// src/classes/Class2.tsx
import React, { useState, useEffect } from "react";

const Class2: React.FC = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(timer); // Cleanup timer on unmount
  }, []);

  return (
    <div>
      <h2>Welcome to Class 2: Understanding useEffect</h2>
      <p>In this lesson, we will learn about React's `useEffect` hook.</p>

      <h3>Exercise 1: Real-Time Clock</h3>
      <p>The current time is dynamically updated every second:</p>
      <h3 style={{ fontSize: "2rem", color: "#007BFF" }}>{time}</h3>

      <h3>Exercise 2: Modify the Timer</h3>
      <p>
        Try changing the interval timing in the code to update the clock
        less or more frequently. Experiment with cleanup functions to avoid memory leaks.
      </p>
    </div>
  );
};

export default Class2;
