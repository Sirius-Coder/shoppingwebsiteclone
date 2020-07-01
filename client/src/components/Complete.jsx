import React from 'react'
import styles from'../styles/Complete.module.css'
import {Link} from 'react-router-dom'

export default function Complete() {
    return (
        <div className={styles.container}>
            <h1>Your Order has been placed Succesfully</h1>
           <Link to='/'> <a>Continue Shopping</a></Link>
        </div>
    )
}
