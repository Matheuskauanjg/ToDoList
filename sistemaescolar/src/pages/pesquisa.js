import React from 'react';
import { useRouter } from 'next/router';
import { buscarTemas } from '../utils/api';
import Card from '../components/Card';

const Pesquisa = () => {
  const router = useRouter();
  const { termo } = router.query; // Captura o termo de busca da URL

  const temas = buscarTemas(termo || ''); // Filtra os temas com base no termo

  return (
    <div>
      <h1>Resultados de Pesquisa</h1>
      {temas.length > 0 ? (
        temas.map((tema) => <Card key={tema.id} tema={tema} />)
      ) : (
        <p>Nenhum tema encontrado para "{termo}"</p>
      )}
    </div>
  );
};

export default Pesquisa;
