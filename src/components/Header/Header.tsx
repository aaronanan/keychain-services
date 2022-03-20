import React from 'react';
import styles from 'styles/Header.module.css';
import { VscAccount } from 'react-icons/vsc';

const Header: React.FC = () => (
  <div className={styles.container}>
    <div className={styles.header}>
      <h1 className={styles.logo}>{process.env.titleName}</h1>
      <VscAccount size={25} className={styles.profile} />
    </div>
  </div>
);

export default Header;
