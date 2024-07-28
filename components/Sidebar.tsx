import React from 'react';
import Link from 'next/link';
import { FaHome, FaPlus, FaFolderOpen } from 'react-icons/fa';
import styles from '../styles/Sidebar.module.css';

const Sidebar: React.FC = () => (
  <div className={styles.sidebarContainer}>
    <img
      className={styles.logoImage}
      src="https://upload.wikimedia.org/wikipedia/en/thumb/5/52/Indian_Institute_of_Technology%2C_Patna.svg/440px-Indian_Institute_of_Technology%2C_Patna.svg.png"
      alt="Logo"
    />
    <Link href="/">
      <div className={styles.sidebarItem}>
        <span className={styles.icon}><FaHome /></span> HOME
      </div>
    </Link>
    <Link href="/new">
      <div className={styles.sidebarItem}>
        <span className={styles.icon}><FaPlus /></span> NEW
      </div>
    </Link>
    <Link href="/open">
      <div className={styles.sidebarItem}>
        <span className={styles.icon}><FaFolderOpen /></span> OPEN
      </div>
    </Link>
  </div>
);

export default Sidebar;
