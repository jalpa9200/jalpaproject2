import React, { Component } from 'react';
import axios from 'axios';
import './listing.css';
import CostFilter from '../filter/costFilter';
import Header from '../Header';
import ListingDisplay from './listingDisplay';

//const lurl = "https://zomatoapi.onrender.com/restaurant?mealtype_id="
const lurl = "https://jewelleryapi.onrender.com/product?productId="

class Listing extends Component {
    constructor(props) {
        super(props)

        this.state = {
            productList: ''
        }
    }

    setDataPerFilter = (data) => {
        this.setState({ productList: data })
    }

    render() {
        return (
            <>
                <Header />
                <div id="content">
                    <div id="filterDiv">
                        <h1 className="filter-heading">Filter</h1>
                        <CostFilter product_id={this.props.match.params.product_id}
                            productPerCost={(data) => { this.setDataPerFilter(data) }} />
                    </div>
                    <div id="contentDiv">
                        {/* <a href="../details/details.html">Details</a> */}
                        <div id="main1">
                            <div className="filecontain">
                                <ListingDisplay listData={this.state.productList} />
                            </div>
                        </div>
                    </div>
                </div>

            </>
        )
    }

    //api with axios 
    componentDidMount() {
        let product_id = this.props.match.params.product_id;
        sessionStorage.setItem('product_id', product_id)
        axios.get(`${lurl}${product_id}`)
            .then((res) => { this.setState({ productList: res.data }) })
    }
}

export default Listing;