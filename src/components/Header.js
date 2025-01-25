import React from "react";

function Header() {
  return (
    <header>
      <h1>Sistema de Pesquisa Escolar</h1>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/tema">Temas</a></li>
          <li><a href="/quiz">Quiz</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
