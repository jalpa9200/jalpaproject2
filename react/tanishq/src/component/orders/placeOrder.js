import React,{Component} from 'react';
import './placeOrder.css';
import Header from '../Header';
// import axios from 'axios';

// const url = "https://jewelleryapi.onrender.com/productItem";
const url = "http://localhost:9800/productItem";

const oUrl ="http://localhost:9800/placeOrder";
// const oUrl ="https://jewelleryapi.onrender.com/placeOrder";

class PlaceOrder extends Component {
    constructor(props){
        super(props);

         let sessionData = sessionStorage.getItem('userInfo')?sessionStorage.getItem('userInfo').split(','):[]

        //let sessionData

        this.state={
            id:Math.floor(Math.random()*10000),
            product_name:this.props.match.params.product_name,
            name:sessionData?sessionData[0]:'',
            email:sessionData?sessionData[1]:'',
            cost:0,
            phone:sessionData?sessionData[2]:'',
            address:"Hno 62 nagpur",
            p_no:[]
            // productItem:sessionStorage.getItem('productItem'),
            // yaha error thi p_no ko [] array declare nahi kiya tha '' string kiya tha
        }
    }

    handleChange =(event) => {
        this.setState({[event.target.name]:event.target.value})
    }
    checkout=() => {
        let obj = this.state;
        obj.productItem = sessionStorage.getItem('product');
        fetch(oUrl,{
            method:'POST',
            headers:{
                'accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(obj)
        })
        .then(console.log('order added'))
        //.then(this.props.history.push('/viewBooking'))
    }


    renderItem=(data) => {
        console.log(data);
        if(data){
            return data.map((items) => {
                return(
                    <div className="orderItems" key={items.p_no}>
                        <img src={items.product_image} alt={items.product_name}/>
                        <h3 className='baloon'>{items.product_name}</h3>
                        <h4>Rs. {items.product_price}</h4>
                    </div>
                )
            })
        }
    }

    // rendetitem(data) {
    //     if(data){
    //         return data.map((items) => {
    //             return(
    //                 <div key={items.p_no}> 
    //                     <h4>{items.product_name}</h4>
    //                 </div>
                    
    //             )
    //         })
    //     }
    // }
    
    render(){
        return(
            <>
            <Header/>
            <div className="container">
                <div className="panel panel-primary">
                    <div className="panel-heading">
                   
                        {/* <h3>Order for {this.renderitem(this.state.p_no)}</h3> */}
                        <h3>Your Order {this.state.product_name}</h3>
                        
                        
                    </div>
                    <div className="panel-body">
                    <form action="http://localhost:4100/paynow" method="POST">
                            <input type="hidden" name="cost" value={this.state.cost}/>
                            <input type="hidden" name="id" value={this.state.id}/>
                            <input type="hidden" name="p_no" value={this.state.p_no}/>
                            <input type="hidden" name="product_name" value={this.state.product_name}/>
                            <div className="row">
                                <div className="form-group col-md-6">
                                    <label htmlFor="fname" className="control-label">FirstName</label>
                                    <input className="form-control" id="fname" name="name" value={this.state.name}
                                    onChange={()=>this.handleChange}/>
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="email" className="control-label">Email</label>
                                    <input className="form-control" id="email" name="email" value={this.state.email}
                                    onChange={()=>this.handleChange}/>
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="phone" className="control-label">Phone</label>
                                    <input className="form-control" id="phone" name="phone" value={this.state.phone}
                                    onChange={()=>this.handleChange}/>
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="address" className="control-label">Address</label>
                                    <input className="form-control" id="address" name="address" value={this.state.address}
                                    onChange={()=>this.handleChange}/>
                                </div>
                            
                            
                            {this.renderItem(this.state.p_no)}
                          
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <h2>Total Price is Rs.{this.state.cost}</h2>
                                </div>
                            </div>
                            <button className="btn btn-success" onClick={this.checkout}
                            type="submit">
                                PlaceOrder
                            </button>
                        </form>
                    </div>
                   
                </div>
            </div>
            </>
        )
    }

    componentDidMount(){

        // let p_no = sessionStorage.getItem('p_no');
        // console.log(p_no); //9,1,1      first check
        // let orderId = [];
        // if(p_no){

        //     p_no.split(',').map((items) => {
        //         orderId.push(parseInt(items));
        //         return 'ok'
        //     })
        let p_no = sessionStorage.getItem('p_no');
        let orderId = [];
        p_no.split(',').map((items) => {
            orderId.push(parseInt(items));
            return 'ok'
        })
        let orderID ={id:orderId}
        fetch(url,{
            method: 'POST',
            headers:{
                'accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(orderID)
        })
        
        .then((res) => res.json())
        .then((data) => {
            let totalPrice = 0;
            data.map((item) => {
                totalPrice = totalPrice + parseFloat(item.product_price);
                return 'ok'
            })
            this.setState({p_no:data,cost:totalPrice})
            // this.setState({ProductList:data,cost:totalPrice})
        })




    }










        
        
        // let p_no = sessionStorage.getItem('p_no');
        // console.log(p_no); //9,1,1      first check
        // let orderId = [];
        // if(p_no){

        //     p_no.split(',').map((items) => {
        //         orderId.push(parseInt(items));
        //         return 'ok'
        //     })
        //     console.log(">>productItem",p_no); //9,1,1   second check
            
        //     let obj ={id:orderId}
        //     console.log(obj)  // third check
        //     axios.post(url,obj)
        //     .then((res)=>{
        //         console.log(res.data);  // fourth check
        //         let totalPrice = 0;
        //         res.data.map((items) => {
        //             totalPrice = totalPrice + parseFloat(items.product_price);
        //             return 'ok'
        //         })
        //         this.setState({p_no:res.data,cost:totalPrice})
        //     })

            
        // }
    }
   




export default PlaceOrder;
