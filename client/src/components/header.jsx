import React from 'react';
import img from '../img/header-logo.png';
import styles from '../styles/header.module.css'
import {Link} from 'react-router-dom'

export default function header() {
    return (
        <header className={styles.container}>
           <Link to="/"> <img src={img} alt="homepage" /></Link>
            <h2>PewDiePie // Store </h2>
           <Link to="/cart"> <i className="fas fa-shopping-cart icon"></i></Link>
        </header>
    )
}
