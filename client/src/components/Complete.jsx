import React, { useEffect, useContext } from 'react';
import { GlobalContext } from '../context/Globalcontext';
import styles from '../styles/Complete.module.css';
import { Link } from 'react-router-dom';

export default function Complete() {
  const { clearCart } = useContext(GlobalContext);
  useEffect(() => {
    clearCart();
  }, []);
  return (
    <div className={styles.container}>
      <h1>Your Order has been placed Succesfully</h1>
      <Link to='/'>
        {' '}
        <a>Continue Shopping</a>
      </Link>
    </div>
  );
}
