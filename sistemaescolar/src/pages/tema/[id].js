import React from 'react';
import { useRouter } from 'next/router';
import temas from '../../data/temas.json'; // Importa dados do JSON
import Card from '../../components/Card';

const TemaDetalhes = () => {
  const router = useRouter();
  const { id } = router.query;
  const tema = temas.find((tema) => tema.id == id);

  if (!tema) return <p>Carregando...</p>;

  return (
    <div>
      <h1>{tema.nome}</h1>
      <p><strong>Categoria:</strong> {tema.categoria}</p>
      <p><strong>Descrição:</strong> {tema.descricao}</p>
      <p>{tema.detalhes}</p>
    </div>
  );
};

export default TemaDetalhes;
