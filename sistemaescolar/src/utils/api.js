export const buscarTemas = (termo) => {
    const temas = require('../data/temas.json');
    return temas.filter((tema) =>
      tema.nome.toLowerCase().includes(termo.toLowerCase())
    );
  };
  