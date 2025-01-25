import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';
import Card from '../components/Card';
import { buscarTemas } from '../utils/api';

const Home = () => {
  const [temas, setTemas] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = async () => {
    const resultados = buscarTemas(searchTerm);
    setTemas(resultados);
  };

  return (
    <div>
      <h1>Sistema Escolar</h1>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} handleSearch={handleSearch} />
      <div>
        {temas.map((tema) => (
          <Card key={tema.id} tema={tema} />
        ))}
      </div>
    </div>
  );
};

export default Home;
