import React from 'react';

const SearchBar = ({ searchTerm, setSearchTerm, handleSearch }) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Digite o tema que deseja buscar"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Buscar</button>
    </div>
  );
};

export default SearchBar;
