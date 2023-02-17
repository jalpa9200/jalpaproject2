import React, { Component } from 'react';

class ProductDisplay extends Component {


    orderId = [];

    placeOrder = (id) => {
        this.orderId.push(id);
        this.props.finalOrder(this.orderId)
    }

    removeOrder = (id) => {
        if (this.orderId.indexOf(id) > -1) {
            this.orderId.splice(this.orderId.indexOf(id), 1)
        }
        this.props.finalOrder(this.orderId)
    }


    renderCart = (orders) => {
        if (orders) {
            return orders.map((items, index) => { 
                return (
                    <b key={index}>{items}&nbsp;</b>
                )
            })
        }
    }

    renderProduct = ({ productdata }) => {
        if (productdata) {
            return productdata.map((items) => {
                return (
                    <div key={items._id}>
                        <div className='filecap1'>
                            <div className="col-md-7">
                                <b>{items.p_no}</b>
                                <img src={items.product_image} style={{ height: 80, width: 80 }} alt='' /> &nbsp;
                                {items.product_name} - Rs.{items.product_price}
                            </div>
                            <div className="col-md-4">
                                <button className="btn btn-success"
                                    onClick={() => { this.placeOrder(items.p_no) }}>
                                    <span className="bi bi-plus-lg"></span>
                                </button> &nbsp;
                                <button className="btn btn-danger"
                                    onClick={() => { this.removeOrder(items.p_no) }}>
                                    <span className="bi bi-dash-lg"></span>
                                </button>

                            </div>
                        </div>
                    </div>

                )
            })
        }
    }

    render() {
        return (
            <div className='sky1'>
                <div className="col-md-12 sky">
                    <div className='sky2'>
                        <h1>Item Added</h1>
                        Item Numbers {this.renderCart(this.orderId)} Added
                    </div>
                </div>
                <div className="col-md-12">
                    {this.renderProduct(this.props)}
                </div>
            </div>
        )
    }

}

export default ProductDisplay;