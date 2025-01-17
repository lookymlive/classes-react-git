import React, { useState } from "react";
import { Class1, Class2 } from "./classes";

const App: React.FC = () => {
  const [claseSeleccionada, setClaseSeleccionada] = useState<number>(1);

  const renderClase = () => {
    switch (claseSeleccionada) {
      case 1:
        return <Class1 />;
      case 2:
        return <Class2 />;
      default:
        return <div>Seleccione una clase válida</div>;
    }
  };

  return (
    <div>
      <h1>Selector de Clases</h1>
      <select
        value={claseSeleccionada}
        onChange={(e) => setClaseSeleccionada(Number(e.target.value))}
      >
        <option value={1}>Clase 1</option>
        <option value={2}>Clase 2</option>
      </select>
      <div style={{ marginTop: "20px" }}>{renderClase()}</div>
    </div>
  );
};

export default App;
