import React from 'react';
import Navbar from '../components/Navbar';
import SearchBar from '../components/SearchBar';
import styles from '../styles/Card.module.css';

const Home = () => {
  const handleSearch = (query) => {
    console.log('Pesquisa: ', query); // Implemente a lógica de pesquisa
  };

  return (
    <div>
      <Navbar />
      <SearchBar onSearch={handleSearch} />
      <div className={styles.card}>
        <h3>História</h3>
        <p>Explore os principais eventos históricos!</p>
      </div>
      <div className={styles.card}>
        <h3>Geografia</h3>
        <p>Descubra sobre países, clima e mais.</p>
      </div>
      {/* Mais cards conforme necessário */}
    </div>
  );
};

export default Home;
