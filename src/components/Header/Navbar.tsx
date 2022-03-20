import React from 'react';
import styles from 'styles/Header.module.css';
import { VscAccount } from 'react-icons/vsc';

const Navbar: React.FC = () => (
  <div className={styles.navContainer}>
    <div className={styles.navbar}>
      <div className={styles.navItems}>
        <p className={styles.navText}>nav1</p>
        <p className={styles.navText}>nav2</p>
        <p className={styles.navText}>nav3</p>
      </div>
      <p className={styles.navText}>Post Service</p>
    </div>
  </div>
);

export default Navbar;
