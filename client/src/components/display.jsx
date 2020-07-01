import React from 'react';
import styles from '../styles/display.module.css';
import {Link} from 'react-router-dom';
import axios from 'axios';
export default function Display(props) {
   
    return (
        <div className={styles.container}>
           {
           props.type.map(para=>(<Displayitem key={para.id} id={para.id} title={para.title} price={para.price} img={para.img} desc={para.desc}/>))
           }
        </div>
    )
}
function Displayitem(props)
{ 
   
        const displayProduct=(e)=>
    {
        axios.post('/product',{id:props.id,title:props.title,price:props.price,img:props.img,desc:props.desc}).then((res)=>console.log(res)).catch(e=>console.error(e));
           
            
    }

 
    
    return(
        <div className={styles.item}>
      <Link to="/product"><a onClick={displayProduct}><img src={props.img} alt='hoodies' /></a> </Link>
         <h3>{props.title}</h3>
         <p>₹ {props.price}</p>
         
        </div>
    )
}

