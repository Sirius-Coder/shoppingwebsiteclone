import React, { useState, useEffect, useContext } from 'react';
import { GlobalContext } from '../context/Globalcontext';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Header from './header';
import Footer from './footer';
import styles from '../styles/cart.module.css';

export default function Cart() {
  const [change, setChange] = useState(0);
  const { cart, deleteCart } = useContext(GlobalContext);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [change]);
  const del = (item) => {
    deleteCart(item);
    setChange(change + 1);
  };
  const total = cart.reduce((a, b) => a + b.price, 0);

  return (
    <div>
      <Header />
      <div className={styles.container}>
        <div className={styles.itemview}>
          <h2>YOUR CART</h2>
          <span>Shipping by JUL 24,2020</span>
          {cart.map((para) => (
            <CartItem cart={para} del={del} />
          ))}
        </div>
        <div className={styles.checkout}>
          <div className={styles.cost}>
            <h3>Subtotal</h3>
            <h3>₹{total}</h3>
          </div>
          <div className={styles.cost}>
            <h3>Shipping</h3>
            <h3>₹{Math.round(total * 0.12)}</h3>
          </div>
          <div className={styles.cost}>
            <h3>Total</h3>
            <h3>₹{Math.round(total * 1.12)}</h3>
          </div>
          <Link
            to='/checkout'
            style={{ textDecoration: 'none', outline: 'none' }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              className={styles.classButton}
            >
              <button>CHECKOUT</button>
            </div>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}

function CartItem(props) {
  return (
    <div className={styles.cartItem}>
      <img src={props.cart.img} alt='item' />
      <div className={styles.cartIteminner}>
        <h3>{props.cart.title}</h3>
        <p>
          ₹{props.cart.price}-Black-{props.cart.size || 'Medium'}
        </p>
      </div>
      <button
        onClick={(e) => {
          e.preventDefault();
          props.del(props.cart);
        }}
      >
        REMOVE
      </button>
    </div>
  );
}
