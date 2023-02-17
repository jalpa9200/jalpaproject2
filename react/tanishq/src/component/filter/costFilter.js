import React, { Component } from 'react';
import axios from 'axios';

// const url = "http://3.17.216.66:4000/filter";
const url = "https://jewelleryapi.onrender.com/filter";

class CostFilter extends Component {

    costFilter = (event) => {
        let p_id = this.props.product_id;
        let cost = (event.target.value).split('-');
        let lcost = cost[0];
        let hcost = cost[1];
        let costUrl = "";
        if (event.target.value === "") {
            costUrl = `${url}/${p_id}`
        } else {
            costUrl = `${url}/${p_id}?hcost=${hcost}&lcost=${lcost}`
        }
        axios.get(costUrl)
            .then((res) => { this.props.productPerCost(res.data) })
    }

    render() {
        return (
            <>
                <div className="cuisine" onChange={this.costFilter}>
                    <h3 className="cuisine-headline">Price</h3>
                    <label htmlFor="cuisine"><input type="radio" name="cost" value="Less than 10000" />Less than 10000</label>

                    <label htmlFor="cuisine"><input type="radio" name="cost" value="10000-25000" />10k-25k</label>

                    <label htmlFor="cuisine"><input type="radio" name="cost" value="25000-50000" />25k-50k</label>

                    <label htmlFor="cuisine"> <input type="radio" name="cost" value="50000-100000" />50k-100k</label>

                    <label htmlFor="cuisine"><input type="radio" name="cost" value="100000-200000" />100k-200k</label>

                    <label htmlFor="cuisine"><input type="radio" name="cost" value="200000-500000" />200k-500k</label>

                </div>

            </>
        )
    }
}

export default CostFilter;