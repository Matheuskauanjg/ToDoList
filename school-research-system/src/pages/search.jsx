import React, { useState } from 'react';
import { mockData } from '../utils/mockData'; // Importando os dados simulados
import Card from '../components/Card'; // Componente para exibir os resultados

const Search = () => {
  const [results, setResults] = useState([]);
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    const filteredResults = mockData.filter(item => 
      item.topic.toLowerCase().includes(query.toLowerCase()) ||
      item.category.toLowerCase().includes(query.toLowerCase())
    );
    setResults(filteredResults);
  };

  return (
    <div>
      <input 
        type="text" 
        value={query} 
        onChange={(e) => setQuery(e.target.value)} 
        placeholder="Pesquisar por categoria ou tema"
      />
      <button onClick={handleSearch}>Buscar</button>
      
      <div>
        {results.length > 0 ? (
          results.map(item => (
            <Card key={item.id} data={item} />
          ))
        ) : (
          <p>Nenhum resultado encontrado.</p>
        )}
      </div>
    </div>
  );
};

export default Search;
