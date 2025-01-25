import React from "react";
import Header from "./components/Header"; // Importando o Header.js
import Home from "./pages/Home"; // Importando a página Home

function App() {
  return (
    <div className="App">
      <Header /> {/* Componente Header */}
      <Home /> {/* Componente Home */}
    </div>
  );
}

export default App;
