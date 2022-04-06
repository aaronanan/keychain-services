import React from 'react';
import styles from 'styles/Header.module.css';
import { VscAccount } from 'react-icons/vsc';
import Link from 'next/link';

const Navbar: React.FC = () => (
  <div className={styles.navContainer}>
    <div className={styles.navbar}>
      <div className={styles.navItems}>
        <Link href="/">
          <p className={styles.navText}>Home</p>
        </Link>
        <Link href="/services">
          <p className={styles.navText}>Services</p>
        </Link>
        <p className={styles.navText}>nav3</p>
      </div>
      <p className={styles.navText}>Post Service</p>
    </div>
  </div>
);

export default Navbar;
