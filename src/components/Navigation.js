import React from 'react';
import { Link } from 'react-router-dom';
import * as styles from '../styles';

const Navigation = () => {
  return (
    <div>
      <ul>
        <Link to='/' style={styles.styles}>
          Home
        </Link>
        <Link to='/m1' style={styles.styles}>
          Abhishek
        </Link>
        <Link to='/m2' style={styles.styles}>
          Adeeb
        </Link>
      </ul>
    </div>
  );
};

export default Navigation;
