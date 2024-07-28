import React from 'react';
import styles from '../styles/TemplateGrid.module.css';

const TemplateGrid: React.FC = () => (
  <div className={styles.gridContainer}>
    <div className={styles.templateBox}>Template 1</div>
    <div className={styles.templateBox}>Template 2</div>
    <div className={styles.templateBox}>Template 3</div>
    <div className={styles.templateBox}>Template 4</div>
    <div className={styles.templateBox}>Template 5</div>
    <div className={styles.templateBox}>Template 6</div>
  </div>
);

export default TemplateGrid;
