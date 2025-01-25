import React from "react";
import ReactDOM from "react-dom";
import App from "./App"; // Importando o App.js
import "./index.css"; // Se você tiver estilos globais, importa aqui

// Renderizando o componente App dentro do elemento com id="root" no index.html
ReactDOM.render(
  <React.StrictMode>
    <App />  {/* App.js é renderizado aqui */}
  </React.StrictMode>,
  document.getElementById("root")
);
