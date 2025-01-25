import React from 'react';
import styles from '../styles/Card.module.css'; // Importando os estilos para o card

const Card = ({ data }) => {
  return (
    <div className={styles.card}>
      <h3>{data.topic}</h3>
      <p>{data.category}</p>
      <p>{data.description}</p>
    </div>
  );
};

export default Card;
