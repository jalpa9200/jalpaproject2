import React from 'react';
import {Link} from 'react-router-dom';

const QuickDisplay = (props) => {

    const listProduct  = ({productData}) => {
        if(productData){
            return productData.map((item) => {
                return(
                    <Link to={`/listing/${item.product_name}`}>
                        <div className="tileContainer" key={item.product_id}>
                            <div className="categocomponent1">
                                <img src={item.meal_image} alt="dinner"/>
                            </div>
                            <div className="categocomponent1">
                                <div className="componentHeading">
                                    <link href="../listing">{item.product_category}</link>
                                </div>
                                <div className="card-body com2">
                                    {item.content}
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
            {listProduct(props)}
                
        </div>
        
    )
}

export default QuickDisplay;