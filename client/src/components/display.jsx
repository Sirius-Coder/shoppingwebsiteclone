import React, { useContext } from 'react';
import styles from '../styles/display.module.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { GlobalContext } from '../context/Globalcontext';
export default function Display(props) {
  return (
    <div className={styles.container}>
      {props.type.map((para) => (
        <Displayitem
          key={para.id}
          id={para.id}
          title={para.title}
          price={para.price}
          img={para.img}
          desc={para.desc}
        />
      ))}
    </div>
  );
}
function Displayitem(props) {
  const { displayProduct } = useContext(GlobalContext);
  const showProduct = (e) => {
    displayProduct({
      id: props.id,
      title: props.title,
      price: props.price,
      img: props.img,
      desc: props.desc,
    });
  };

  return (
    <div className={styles.item}>
      <Link to='/product'>
        <a onClick={showProduct}>
          <img src={props.img} alt='hoodies' />
        </a>{' '}
      </Link>
      <h3>{props.title}</h3>
      <p>₹ {props.price}</p>
    </div>
  );
}
