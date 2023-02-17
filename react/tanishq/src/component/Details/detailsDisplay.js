import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class DetailDisplay extends Component  {
    constructor (props){
        super(props);
    }
    proceed  () {
        console.log(this.props)
        sessionStorage.setItem('p_no', this.props.userItem);
        this.props.props.history.push(`/placeOrder/${sessionStorage.getItem('p_no')}`)
    }
    
    renderData  (props) {
        if (props.listData) {
            if (props.listData.length > 0) {
                return props.listData.map((items) => {
                    return (
                        <div key={items._id}>
                            <div id="containerDetail">
                                <div className="row1">
                                    <div className="col">
                                        <div className="slider">
                                            <div className="preview">
                                                <img
                                                    src={items.product_image} id="imagebox" alt=''
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="content">
                                            <p className="brand">{items.product_type} | {items.product_category}</p>
                                            <h2>{items.product_name}</h2>
                                            <p className="price">Price: ₹ {items.product_price}</p>
                                            <p>{items.product_detail}</p>
                                            <p>
                                                Quantity: <input type="text" defaultValue={1} />
                                            </p>
                                            <button type="button" className='btn btn-primary fa fa-shopping-cart' onClick={()=>this.proceed()}> PROCEED </button>
                                            <button className='btn btn-danger fa fa-back' type='button'><Link to={`/listing/${items.product_id}`}>BACK</Link></button>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })

            } else {
                return (
                    <div>
                        <h2>No Data Available As Per Filter..</h2>
                    </div>
                )
            }
        } else {
            return (
                <div className='loader1'>
                    <img src="/images/loading.gif" alt="loader" />
                    <h2>Loading..</h2>
                </div>
            )
        }
    }
    
    render(){
        return (
            <>
                <div id="contentMain">
                    {this.renderData(this.props)}
                </div>
            </>
        )
    }
    
}

export default DetailDisplay;


