import React from "react";
import "./styles.css";
import Pagina1 from "./Components/pagina1/index";
import Bv from "./Components/BoasVindas";
export default function App() {
  return (
    <div className="App">
      <Pagina1 />
      <h1>Hello CodeSandbox</h1>
      <h2>Testando </h2>
    </div>
  );
}

function App2() {
  return <Bv />;
}
export { App2 };
