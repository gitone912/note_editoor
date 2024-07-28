import React from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import NoteEditor from '../components/NoteEditor';
import styles from '../styles/NewPage.module.css';

const NewPage: React.FC = () => (
  <div className={styles.mainContainer}>
    <Sidebar />
    <div className={styles.contentContainer}>
      <Header />
      <NoteEditor />
    </div>
  </div>
);

export default NewPage;
