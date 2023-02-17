import React from 'react';
import {Link} from 'react-router-dom'

const ListingDisplay =(props) => {

    const renderData = ({listData}) => { 
        if(listData){
            if(listData.length > 0){
                return listData.map((items)=>{
                    return(
                        <div key={items._id}>
                    
                    <Link to={`/Details/${items.p_no}`}>
                           
                           <div className="file1">
                                <div className="filecomponent1">
                                    <img src={items.product_image} alt="" />
                                </div>
                                <div className="filecomponent2">
                                    <hr />
                                    <h3>{items.product_name}</h3>
                                    <h2 className="price">Price: ₹ {items.product_price}</h2>
                                    <h1 className="offer">{items.product_type} | {items.product_category}</h1>
                                    <div className="pip5">
                                    <button><Link to={`/Details/${items.p_no}`}>Explore Now</Link></button>
                                    </div>
       
                                </div>
                            </div>
                    
                            </Link>
                        </div>
                        
                    )
                })

            }else{
                return(
                    <div>
                        <h2>No Data Available As Per Filter..</h2>
                    </div>
                )
            }
        }else{
            return(
                <div className='loader'>
                     <img src="/images/loader.gif" alt="loader"/>
                    <h2>Loading..</h2>
              </div>
            )
        }
    }

    return(
        <>
        <div id="contentMain">
            {renderData(props)}
        </div>
        </>
    )
}

export default ListingDisplay;

