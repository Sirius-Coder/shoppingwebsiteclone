import React from 'react';
import img from '../img/cover-pic.jpg'
import styles from'../styles/coverimg.module.css'

export default function coverimg() {
 
    return (
        <div>
            <img src={img} alt="cover" className={styles.cover}/>
        </div>
    )
}
