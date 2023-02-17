import React from 'react';
import {Link} from 'react-router-dom';

const Product = (props) => {

    const list  = ({productData}) => {
        if(productData){
            return productData.map((item) => {
                return(
                    <Link to={`/listing/${item.product_id}`}>
                        <div class="card cate1">
                            <img src={item.product_image}  class="card-img-top catecom2 image" alt="bangles"/>
                                    <div class="card-body com2">
                                        <h5 class="card-title">{item.product_category}</h5>
                                        <div class="middle">
                                            <div class="text"><a href="listing/listing.html">Explore</a></div>
                                        </div>
                                    </div>
                                </div>
                   </Link> 
                )
            })
        }
    }


    return(
        <div id="main">
            {list(props)}
                
        </div>
        
    )
}

export default Product;