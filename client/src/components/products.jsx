import React,{useState} from 'react'
import styles from '../styles/products.module.css'
import Sidebar from './sidebar'
import Display from './display'
import hoodie from '../img/hoodie.jpg';
import hoodie2 from '../img/hoodie2.jpg';
import hoodie3 from '../img/hoodie3.jpg';
import hoodie4 from '../img/hoodie4.jpg';
import hoodie5 from '../img/hoodie5.jpg';
import hoodie6 from '../img/hoodie6.jpg';
import long1 from '../img/long1.jpg';
import long2 from '../img/long2.jpg';
import long3 from '../img/long3.jpg';
import long4 from '../img/long4.jpg';
import long5 from '../img/long5.jpg';
import long6 from '../img/long6.jpg';
import hat1 from '../img/hat1.jpg';
import hat2 from '../img/hat2.jpg';
import hat3 from '../img/hat3.jpg';
import hat4 from '../img/hat4.jpg';
import hat5 from '../img/hat5.jpg';
import shirt1 from '../img/shirt1.jpg';
import shirt2 from '../img/shirt2.jpg';
import shirt3 from '../img/shirt3.jpg';
import shirt4 from '../img/shirt4.jpg';
import shirt5 from '../img/shirt5.jpg';
import shirt6 from '../img/shirt6.jpg';
import sweatshirt1 from '../img/sweatshirt.jpg';

export default function Products() {
    //Styling for the product component
   
    //Updating the Display View by using UseEffect Hooks
    const[type,setType]=useState(['all'])
    //Hoodies array
    const hoodies=
    [{id:1,title:'Floor Gang // Pewdiepie',desc:"FLOOR GANG - OUH! - FLOOR GANG - OUH! If youre ceiling gang, GET OUTTA HERE! ",price:3780,img:hoodie},
    {id:2,title:'Consistently Floor Gang // PewDiePie',desc:"FLOOR GANG - OUH! - FLOOR GANG - OUH! If youre ceiling gang, GET OUTTA HERE! ",price:3780,img:hoodie2},
    {id:3,title:'сука блять // PewDiePie',desc:"FLOOR GANG - OUH! - FLOOR GANG - OUH! If youre ceiling gang, GET OUTTA HERE! ",price:3780,img:hoodie3},
    {id:4,title:'Fully Stacked Diamonds // PewDiePie',desc:"FLOOR GANG - OUH! - FLOOR GANG - OUH! If youre ceiling gang, GET OUTTA HERE! ",price:3780,img:hoodie4},
    {id:5,title:'Fully Stacked Diamonds // PewDiePie',desc:"FLOOR GANG - OUH! - FLOOR GANG - OUH! If youre ceiling gang, GET OUTTA HERE! ",price:3780,img:hoodie5},
    {id:6,title:'сука блять // PewDiePie',desc:"FLOOR GANG - OUH! - FLOOR GANG - OUH! If youre ceiling gang, GET OUTTA HERE! ",price:3780,img:hoodie6}]
    //Long Sleeves Shirts Array
    const long=[{id:1,title:'Floor Gang // Pewdiepie',desc:"FLOOR GANG - OUH! - FLOOR GANG - OUH! If youre ceiling gang, GET OUTTA HERE! ",price:3780,img:long1},
    {id:2,title:'Gaming Week 2.0 // PewDiePie',desc:"Simpnautica - Quarantine Edition Every item sold will help support The Ocean Foundation (oceanfdn.org) in its mission to reverse the destruction of ocean environments around the world. ",price:3780,img:long2},
    {id:3,title:'Hundred Mill Club // PewDiePie',desc:"FLOOR GANG - OUH! - FLOOR GANG - OUH! If youre ceiling gang, GET OUTTA HERE! ",price:3780,img:long3},
    {id:4,title:'Hundred Mill Club // PewDiePie',desc:"FLOOR GANG - OUH! - FLOOR GANG - OUH! If youre ceiling gang, GET OUTTA HERE! ",price:3780,img:long4},
    {id:5,title:'Fully Stacked Diamonds // PewDiePie',desc:"FLOOR GANG - OUH! - FLOOR GANG - OUH! If youre ceiling gang, GET OUTTA HERE! ",price:3780,img:long5},
    {id:6,title:'Fully Stacked Diamonds // PewDiePie',desc:"FLOOR GANG - OUH! - FLOOR GANG - OUH! If youre ceiling gang, GET OUTTA HERE! ",price:3780,img:long6},

    
]
//Hat Array
const hat=
[{id:1,title:'сука блять Hat // PewDiePie',desc:"",price:2270,img:hat1},
{id:2,title:'сука блять Hat // PewDiePie',desc:"",price:2270,img:hat2},
{id:3,title:'сука блять Beanie // PewDiePie',desc:"",price:2270,img:hat3},
{id:4,title:'сука блять Hat // PewDiePie',desc:"",price:2270,img:hat4},
{id:5,title:'Hundred Mill Club Hat // PewDiePie',desc:"",price:2270,img:hat5},
]
//Shirt Array
const shirts=[{id:1,title:'JöJö // PewDiePie',desc:"Gotta big PP?  Join the adventure!  #floorgang",price:2270,img:shirt1},
{id:2,title:'Consistently Floor Gang// PewDiePie',desc:"Gotta big PP? Join the adventure! #floorgang",price:2270,img:shirt2},
{id:3,title:'Gaming Week 2.0// PewDiePie',desc:"Gotta big PP? Join the adventure! #floorgang",price:2270,img:shirt3},
{id:4,title:'сука блять // PewDiePie',desc:"Gotta big PP? Join the adventure! #floorgang",price:2270,img:shirt4},
{id:5,title:'Hundred Mill Club // PewDiePie',desc:"Gotta big PP? Join the adventure! #floorgang",price:2270,img:shirt5},
{id:6,title:'Hundred Mill Club // PewDiePie',desc:"Gotta big PP? Join the adventure! #floorgang",price:2270,img:shirt6}]
//SweatShirt Array
const sweatshirt=[{id:1,title:'Meme Review // PewDiePie',desc:"Meme Review",price:3785,img:sweatshirt1}]
//All products array
const all=[];
all.push(...hoodies,...hat,...shirts,...long)
const item=(item)=>
{
    if(item==='all')
    setType(all)   //!Don't Use destructing with setState hook as it send the array as an object ot the child component and thus cannot perform map operation
    else if(item==='hat')
    setType(hat)
    else if(item==='hoodie')
    setType(hoodies)
    else if(item==='long')
    setType(long)
    else if (item==='shirts')
    setType(shirts)
    else if(item==='sweatshirt')
    setType(sweatshirt)
}
    return (
        <div className={styles.viewarea}>
            <Sidebar item={item}/>
            <Display type={type}/>
        </div>
    )
}
