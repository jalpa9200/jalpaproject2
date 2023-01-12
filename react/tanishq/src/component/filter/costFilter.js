import React, { Component } from 'react';
import axios from 'axios';

// const url = "http://3.17.216.66:4000/filter";
const url = "https://jewelleryapi.onrender.com/filter";

class CostFilter extends Component {

    costFilter = (event) => {
        let product_id = this.props.product_id;
        let cost = (event.target.value).split('-');
        let lcost = cost[0];
        let hcost = cost[1];
        let costUrl = "";
        if (event.target.value === "") {
            costUrl = `${url}/${product_id}`
        } else {
            costUrl = `${url}/${product_id}?hcost=${hcost}&lcost=${lcost}`
        }
        axios.get(url)
            .then((res) => { this.props.restPerCost(res.data) })
    }

    render() {
        return (
            <>
                <div id="content">
                    <div id="filterDiv">
                        <h1 className="filter-heading">Filter</h1>
                        <div className="cuisine">
                            <h4 className="cuisine-headline">Price</h4>
                            <label htmlFor="cuisine">Less than 10000</label>
                            <input type="checkbox" name="Less than 10000" />
                            <label htmlFor="cuisine">10k-25k</label>
                            <input type="checkbox" name="10k-25k" />
                            <label htmlFor="cuisine">25k-50k</label>
                            <input type="checkbox" name="25k-50k" />
                            <label htmlFor="cuisine">50k-100k</label>
                            <input type="checkbox" name="50k-100k" />
                            <label htmlFor="cuisine">100k-200k</label>
                            <input type="checkbox" name="100k-200k" />
                            <label htmlFor="cuisine">200k-500k</label>
                            <input type="checkbox" name="200k-500k" />
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default CostFilter