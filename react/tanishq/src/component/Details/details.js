import React,{Component} from 'react';
import axios from 'axios';
import './details.css';
import DetailDisplay from './detailsDisplay';
import ProductDisplay from './itemList';
import Header from '../Header';

const listurl = "https://jewelleryapi.onrender.com/details"
const producturl = "https://jewelleryapi.onrender.com/product?productId="

class Details extends Component {
    constructor(props){
        super(props)

        this.state={
            ProductList:'',
            p_no:sessionStorage.getItem('p_no'),
            product_id:sessionStorage.getItem('product_id'),
            userItem:[]

        }
    }

    addToCart=(data) => {
        this.setState({userItem:data})
    }
    
    setDataPerFilter = (data) => {
        this.setState({ProductList:data})
    }

    render(){
        return(
            <>
                <Header/>
                <div className="hero">
                <DetailDisplay props={this.props} listData={this.state.ProductList} userItem={this.state.userItem}/>  
                </div>      

                <div className="col-md-12">
                    <ProductDisplay productdata={this.state.itemList}
                    finalOrder={(data) => {this.addToCart(data)}}/>
                </div> 
                {console.log(this.state.userItem)}
            </>
        )
    }


    async componentDidMount(){
        let p_no = this.props.match.params.p_no;
        let res = await axios.get(`${listurl}/${p_no}`);
        let product_id = res.data[0].product_id;
        let productdata = await axios.get(`${producturl}${product_id}`);
        this.setState({ProductList:res.data,itemList:productdata.data})
        console.log(productdata);
   }
}

export default Details;



