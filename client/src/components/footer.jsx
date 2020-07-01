import React from 'react';
import styles from '../styles/footer.module.css';
import img from '../img/represent-logo.png'

export default function Footer() {
    return (
        <div className={styles.container}>
           <img src={img} alt="represent logo"/>
           <div className={styles.subcontainer}>
           <div className={styles.links}>
                <li>Design your Product</li>
                <li>Sell on Represent</li>
                <li>Features</li>
                <li>FAQ</li>
                <li>Contact Us</li>
           </div>
          <div className={styles.social}>
              <h2>Show the world what you stand for |</h2>
              <i class="fab fa-facebook-f"></i>
              <i class="fab fa-twitter"></i>
              <i class="fab fa-instagram"></i>
          </div>
        </div>

           </div>
          
    )
}
