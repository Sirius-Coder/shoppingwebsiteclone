import React,{createContext,useReducer,useState} from 'react';
import shirt1 from '../img/shirt1.jpg';
import AppReducer from './AppReducer.js'
//*Define Intial State
const intialState={
    cart:[{id:1,title:'JöJö // PewDiePie',desc:"Gotta big PP?  Join the adventure!  #floorgang",price:2270,img:shirt1}]
}
//*Creating the GlobalContext
export const GlobalContext=createContext(intialState);

//*Provider function to gives access to all the component
 const GlobalProvider=({children})=> {
    const[state,dispatch]=useReducer(AppReducer,intialState);
    
    function deletecart(id)
    {
        dispatch({
            type:'DEL_CART',
            payload:id
        })
    }

    return (
        <GlobalContext.Provider value={{cart:state.cart,dispatch,deletecart}}>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalProvider