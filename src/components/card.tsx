import React from 'react';
import styles from '../styles/card.module.css';

type Props = {
  children: React.ReactNode;
  style?: React.CSSProperties;
};
const Card = ({ children, style }: Props) => {
  return (
    <div style={style} className={styles.card}>
      {children}
    </div>
  );
};

export default Card;
