import React, { useState, useEffect, useContext } from 'react';
import { GlobalContext } from '../context/Globalcontext';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Header from './header';
import Footer from './footer';
import styles from '../styles/Productdisplay.module.css';

const sizeMap = {
  S: 'Small',
  M: 'Medium',
  L: 'Large',
  XL: 'Extra Large',
};

const Productdisplay = (props) => {
  const [item, setItem] = useState({});
  const { product, addToCart } = useContext(GlobalContext);

  useEffect(() => {
    setItem(product);
  }, []);

  const addCart = (e) => {
    addToCart(item);
  };

  const onSizeSelect = (e) => {
    setItem({ ...item, size: sizeMap[e.target.value] });
  };
  return (
    <div>
      <Header />
      <div className={styles.container}>
        <div className={styles.imageArea}>
          <a>
            <Link to='/'>PewDiePie // Store</Link>
          </a>
          <h1>{item.title}</h1>
          <img src={item.img} alt='Photo' />
        </div>
        <div className={styles.info}>
          <div>
            {' '}
            <label>LOCAL ESTIMATE</label>
            <h1>{item.price}</h1>
          </div>
          <p>{item.desc}</p>
          <p>*International Shipping Available</p>
          <div className={styles.size}>
            <span style={{ fontSize: '12px' }}>
              Size <br /> Clothing
            </span>
            <select onChange={onSizeSelect}>
              <option>S</option>
              <option>M</option>
              <option>L</option>
              <option>XL</option>
            </select>
          </div>
          <Link to='/cart' style={{ textDecoration: 'none' }} onClick={addCart}>
            <div className={styles.classButton}>
              <button>ADD TO CART</button>
            </div>
          </Link>

          <div className={styles.random}>
            <p>Shipping starts on July 24</p>
            <p>Available until July 8</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Productdisplay;
