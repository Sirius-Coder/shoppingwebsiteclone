import React from 'react';
import {BrowserRouter as Router , Switch,Link,Route} from 'react-router-dom';
import Header from './components/header.jsx';
import Coverimg from './components/coverimg';
import Complete from './components/Complete'
import Products from './components/products.jsx'
import Footer from './components/footer'
import GlobalProvider from'./context/Globalcontext';
import Productdisplay from './components/Productdisplay';
import Cart from './components/Cart.jsx';

import './App.css';

function App() { //!Wrap GlobalProvider along the components you want the global state to be accessible
    return ( 
        <Switch>
           < GlobalProvider >
            <Route path="/" exact component={GlobalProvider}>
           
           <Header />
           <Coverimg />
           <div className='links'>
                <button>Products</button>
                <button>About</button>
           </div>
           <Products > </Products>
           <Footer />
       
          </Route>
          <Route path="/product" component={Productdisplay} />
            <Route path="/checkout" component={Complete}/>
          <Route path="/cart" component={Cart} />
          </ GlobalProvider>
        </Switch>
        
    );
}

export default App;