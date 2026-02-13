// app/components/StarBackground.tsx
import React from 'react';
import styles from './StarBackground.module.css';

const StarBackground = () => {
  return (
    <div className={styles.starsWrapper}>
      <div className={styles.starsLayer1} />
      <div className={styles.starsLayer2} />
      {/* 👇 记得加上这一行！ */}
      <div className={styles.starsLayer3} />
    </div>
  );
};

export default StarBackground;