import React from 'react';
import styles from '../styles/Navbar.module.css';
import { FaSearch, FaHome } from 'react-icons/fa';  // Usando ícones do React Icons

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div>
        <a href="/">Home</a>
      </div>
      <ul>
        <li>
          <a href="/search">
            <FaSearch /> Buscar
          </a>
        </li>
        <li>
          <a href="/">
            <FaHome /> Página Inicial
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
