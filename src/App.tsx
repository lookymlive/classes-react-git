import React, { useState } from "react";
import { Class1 } from "./classes";

const App: React.FC = () => {
  const [selectedClass, setSelectedClass] = useState<number | null>(null);

  const classes = [
    { id: 1, name: "Class 1: Introduction to React", component: <Class1 /> },
    // Add more classes as needed here
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h1>React Vite Classes</h1>
      <p>Select a class to start learning:</p>

      <select
        onChange={(e) => setSelectedClass(Number(e.target.value))}
        defaultValue=""
      >
        <option value="" disabled>
          Select a Class
        </option>
        {classes.map((cls) => (
          <option key={cls.id} value={cls.id}>
            {cls.name}
          </option>
        ))}
      </select>

      <div style={{ marginTop: "20px" }}>
        {selectedClass !== null && classes[selectedClass - 1].component}
      </div>
    </div>
  );
};

export default App;