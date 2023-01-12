import React , { Component } from 'react';
import { Link } from 'react-router-dom';
import "./listing.css";

const listingurl = "https://jewelleryapi.onrender.com/filter/8"

class listing extends Component {
    constructor(props) {
        super(props);
        this.state = {
            productList: []
        }
    }

    renderItemList(data) {
        if (data) {
            return data.map((item) => {
                return (
                    <Link to={`/details/${item.id}`}>
                        <div className="file1">
                            <div className="filecomponent1" key={item.id}>
                                <img src={item.product_image} alt={item.product_name} />
                            </div>
                            <div className="filecomponent2">
                                <hr />
                                <h3>{item.product_name}</h3>
                                <h2 className="price">{item.product_price}</h2>
                                <h1 className="offer">{item.product_type} | {item.product_category}</h1>
                                <div className="pip5">
                                    <button>
                                        <a>Explore Now</a>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </Link>
                );
            });
        }
        else {
            return (<><h1 style={{ textAlign: "center" }} >Loading...</h1></>)
        }
    }

    handleFilter(event) {
        console.log(event.target.value);
        // this.setState({
        //   categoryList: this.state.productList.filter((item) => {
        //     return item.brand_id == event.target.value;
        //   }),
        // });
    }

    componentDidMount() {
        let product_id = this.props.match.params.product_id;
        let query = '';
        query = this.props.location.search;
        console.log(this.props.location.search)
        fetch(`${listingurl}/${product_id}${query}`, {
            method: "GET",
        })
            .then((res) => res.json())
            .then((data) => {
                this.setState({ productList: data });
            }
            );
    }
    render() {
        return (
            <>
                <div id="main">
                    <div className="container-fluid">
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

                        
                    </div>
                </div>
            </>
        );
    }
}
  export default listing