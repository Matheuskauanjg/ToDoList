import React from 'react';
import Link from 'next/link';

const Card = ({ tema }) => {
  return (
    <div>
      <h2>{tema.nome}</h2>
      <p>{tema.descricao}</p>
      <Link href={`/tema/${tema.id}`}>Ver detalhes</Link>
    </div>
  );
};

export default Card;
