import React from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import TemplateGrid from '../components/TemplateGrid';
import styles from '../styles/Home.module.css';

const Home: React.FC = () => (
  <div className={styles.mainContainer}>
    <Sidebar />
    <div className={styles.contentContainer}>
      <Header />
      <TemplateGrid />
    </div>
  </div>
);

export default Home;
