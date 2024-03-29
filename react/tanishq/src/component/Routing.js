import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Footer from './Footer';
import Home from './Home/Home';
import listing from './listing/listing';
import Details from './Details/details';
import PlaceOrder from './orders/placeOrder';
import ViewOrder from './orders/viewOrder';
import Login from './Login/login';
import Register from './Login/register';



const Routing = () => {
    return(
        <BrowserRouter>
        <Route exact path="/" component={Home}/>
        <Route path="/listing/:product_id" component={listing}/>
        <Route path="/Details/:p_no" component={Details}/>
        <Route path="/placeOrder/:p_no" component={PlaceOrder}/>
        <Route path="/viewBooking" component={ViewOrder}/>
        <Route path="/login" component={Login}/>
        <Route path="/register" component={Register}/>
        <Footer/>
        </BrowserRouter>
    )
}

export default Routing