import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Footer from './Footer';
import Home from './Home/Home';
import listing from './listing/listing';
import Login from './Login/login';
import Register from './Login/register';



const Routing = () => {
    return(
        <BrowserRouter>
        <Route exact path="/" component={Home}/>
        <Route path="/listing" component={listing}/>
        <Route path="/login" component={Login}/>
        <Route path="/register" component={Register}/>
        <Footer/>
        </BrowserRouter>
    )
}

export default Routing