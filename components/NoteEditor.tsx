import React from 'react';
import styles from '../styles/NoteEditor.module.css';

const NoteEditor: React.FC = () => (
  <div className={styles.noteEditorContainer}>
    <h2 className={styles.upperText}>FILL IN THE DETAILS</h2>
    <div className={styles.inputForm}>INPUT FORM</div>
    <div className={styles.buttonContainer}>
      <button className={`${styles.button} ${styles.review}`}>REVIEW</button>
      <button className={`${styles.button} ${styles.cancel}`}>CANCEL</button>
    </div>
  </div>
);

export default NoteEditor;
