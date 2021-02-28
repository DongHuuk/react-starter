import React from 'react';
import styles from './CSSModule.module.scss';

const CSSModule = () => {
  const Hi = 'Hi';
  const Hello = '';
  return (
    <div className={`${styles.wrapper} ${styles.inverted}`}>
      안녕하세요 저는 <span className="something">CSSModule</span>
      <span
        value={console.log(styles)}
        className={`${Hi}  ${Hello ? 'Hello' : 'null'}`}
      >
        {' '}
        Hello{' '}
      </span>
    </div>
  );
};

export default CSSModule;
