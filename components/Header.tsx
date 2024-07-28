// components/Header.tsx
import React from 'react';
import styles from '../styles/Header.module.css';
import { FaUserCircle } from 'react-icons/fa';

const Header: React.FC = () => (
  <div className={styles.headerContainer}>
    <div className={styles.logo}>
      <h1>Logo</h1>
    </div>
    <div className={styles.navLinks}>
      <a href="#" className={styles.navLink}>MY NOTESHEETS</a>
      <a href="#" className={styles.navLink}>PENDING</a>
      <a href="#" className={styles.navLink}>LINKS</a>
      <a href="#" className={styles.navLink}>LINKS</a>
      <div className={styles.profileIcon}>
        <FaUserCircle size={30} />
      </div>
    </div>
  </div>
);

export default Header;
