import React,{useState,useEffect} from 'react';
import styles from '../styles/sidebar.module.css';

export default function Sidebar(props) {
    const [product,setproduct]=useState('all');
    useEffect(() => {
        props.item(product);  
    },[product])
    return (
        <div className={styles.container}>
            <label>FILTER BY PRODUCT</label>
            <nav>
                <a onClick={()=>setproduct('all')}>All Products</a>
                <a onClick={()=>setproduct('hat')}>Hats</a>
                <a onClick={()=>setproduct('hoodie')}>Hoodies</a>
                <a onClick={()=>setproduct('long')}>Long Sleeves</a>
                <a onClick={()=>setproduct('shirts')}>Shirts</a>
                <a onClick={()=>setproduct('sweatshirt')}>Sweatshirts</a>
            </nav>
        </div>
    )
}
