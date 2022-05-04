import React from 'react';
import styles from '../styles/header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className="d-flex ai-center">
        <img
          className={styles.header_img}
          src={require('../images/rly-logo.png')}
          alt="small rly network logo"
        />
        <div
          className="text-white"
          style={{
            fontWeight: 600,
            textTransform: 'uppercase',
            marginLeft: 12,
          }}>
          RLY Network
        </div>
      </div>
    </header>
  );
};

export default Header;
