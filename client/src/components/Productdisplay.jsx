import React,{useState,useEffect,useContext} from 'react';
import {GlobalContext} from '../context/Globalcontext';
import {Link} from 'react-router-dom'
import axios from 'axios';
import Header from './header';
import Footer from './footer';
import styles from '../styles/Productdisplay.module.css'

const Productdisplay=(props) =>{
    const[item,setItem]=useState({});
    const {dispatch}=useContext(GlobalContext);

    //Making Api call to Backend server to retrieve the product information
    useEffect(()=>{
        axios.get('/product').then(res=>setItem(res.data)).catch(e=>console.error(e));
    },[])
    const addToCart=(e)=>
    {
        //Make an axios call to store our product in the cart database
        axios.post('/cart',{item}).then(res=>console.log(res)).catch(e=console.error(e))
         
    }
    return (
        <div>
            <Header />
                <div className={styles.container}>
                    <div className={styles.imageArea}>
                        <a><Link to="/">PewDiePie // Store</Link></a>
                        <h1>{item.title}</h1>
                        <img src={item.img} alt="Photo" />
                    </div>
                    <div className={styles.info}>
                        <div>  <label>LOCAL ESTIMATE</label>
                        <h1>{item.price}</h1>
                        </div>
                        <p>{item.desc}</p>
                        <p>*International Shipping Available</p>
                        <div className={styles.size}>
                            <span style={{fontSize:'12px'}}>Size <br/> Clothing</span><select>
                                <option>S</option>
                                <option>M</option>
                                <option>L</option>
                                <option>XL</option>
                                <option>XXL</option>
                            </select>
                        </div>
                        <Link to='/cart' style={{textDecoration:'none'}} onClick={addToCart} >
                        <div className={styles.classButton} >
                            <button >ADD TO CART</button> 
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
    )
}

export default Productdisplay;