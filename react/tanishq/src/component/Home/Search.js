import React, { Component } from 'react';
import './Search.css';

// const lurl = "https://zomatoapi.onrender.com/location"
// const rurl = "https://zomatoapi.onrender.com/restaurant?stateId="

// const lurl = "http://localhost:9800/category"
// const rurl = "http://localhost:9800/product?productId="
class Search extends Component {

    render() {
        return (
            <>
                <div id="roop">
                    <div
                        id="carouselExampleInterval"
                        className="carousel slide"
                        data-bs-ride="carousel"
                    >
                        <div className="carousel-inner">
                            <div className="carousel-item active" data-bs-interval={10000}>
                                <img
                                    src="https://i.ibb.co/GCDVstf/no-1.jpg"
                                    className="d-block w-100 pari"
                                    alt="img1"
                                />
                            </div>
                            <div className="carousel-item" data-bs-interval={2000}>
                                <img
                                    src="https://i.ibb.co/6t761SS/no-2.jpg"
                                    className="d-block w-100 pari"
                                    alt="img2"
                                />
                            </div>
                            <div className="carousel-item">
                                <img
                                    src="https://i.ibb.co/TBYGJJS/no-4.jpg"
                                    className="d-block w-100 pari"
                                    alt="img4"
                                />
                            </div>
                            <div className="carousel-item">
                                <img
                                    src="https://i.ibb.co/hBXcQ7z/no-5.jpg"
                                    className="d-block w-100 pari"
                                    alt="img5"
                                />
                            </div>
                            <div className="carousel-item">
                                <img
                                    src="https://i.ibb.co/vdMJ75c/no-6.jpg"
                                    className="d-block w-100 pari"
                                    alt="img6"
                                />
                            </div>
                            <div className="carousel-item">
                                <img
                                    src="https://i.ibb.co/FVxkNd8/no-7.jpg"
                                    className="d-block w-100 pari"
                                    alt="img7"
                                />
                            </div>
                            <div className="carousel-item">
                                <img
                                    src="https://i.ibb.co/KXxKyMw/no-8.jpg"
                                    className="d-block w-100 pari"
                                    alt="img8"
                                />
                            </div>
                        </div>
                        <button
                            className="carousel-control-prev"
                            type="button"
                            data-bs-target="#carouselExampleInterval"
                            data-bs-slide="prev"
                        >
                            <span className="carousel-control-prev-icon" aria-hidden="true" />
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button
                            className="carousel-control-next"
                            type="button"
                            data-bs-target="#carouselExampleInterval"
                            data-bs-slide="next"
                        >
                            <span className="carousel-control-next-icon" aria-hidden="true" />
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>

                <div id="categories">
                    <div className="catego">
                        <h4>Shop By categories</h4>
                    </div>
                    <div className="categomain">
                        <div className="categocomponent1">
                            <div className="row row-cols-1 row-cols-md-6 g-7">
                                <div className="col">
                                    <div className="card cate1">
                                        <img
                                            src="https://i.ibb.co/XzhppyK/bangels.png"
                                            className="card-img-top catecom2"
                                            alt="bangles"
                                        />
                                        <div className="card-body com2">
                                            <h5 className="card-title">Bangels</h5>
                                            <div className="middle">
                                                <div className="text">
                                                    <a href="listing/bangles.html">Explore</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="card cate1">
                                        <img
                                            src="https://i.ibb.co/BNTH5hj/earing.jpg"
                                            className="card-img-top catecom2"
                                            alt="earing"
                                        />
                                        <div className="card-body com2">
                                            <h5 className="card-title">Earring</h5>
                                            <div className="middle">
                                                <div className="text">
                                                    <a href="listing/earring.html">Explore</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="card cate1">
                                        <img
                                            src="https://i.ibb.co/z4kXRYK/gold-coin.jpg"
                                            className="card-img-top catecom2"
                                            alt="coin"
                                        />
                                        <div className="card-body com2">
                                            <h5 className="card-title">Gold Coin</h5>
                                            <div className="middle">
                                                <div className="text">
                                                    <a href="listing/coin.html">Explore</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="card cate1">
                                        <img
                                            src="https://i.ibb.co/FJLMfBQ/necklace.jpg"
                                            className="card-img-top catecom2"
                                            alt="necklace"
                                        />
                                        <div className="card-body com2">
                                            <h5 className="card-title">Necklace</h5>
                                            <div className="middle">
                                                <div className="text">
                                                    <a href="listing/necklace.html">Explore</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="card cate1">
                                        <img
                                            src="https://i.ibb.co/LPJyK77/bracelets.jpg"
                                            className="card-img-top catecom2"
                                            alt="bracelets"
                                        />
                                        <div className="card-body com2">
                                            <h5 className="card-title">Bracelets</h5>
                                            <div className="middle">
                                                <div className="text">
                                                    <a href="listing/bracelet.html">Explore</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="card cate1">
                                        <img
                                            src="https://i.ibb.co/TB0MMcs/pendants.jpg"
                                            className="card-img-top catecom2"
                                            alt="pendants"
                                        />
                                        <div className="card-body com2">
                                            <h5 className="card-title">Pendants</h5>
                                            <div className="middle">
                                                <div className="text">
                                                    <a href="listing/pendant.html">Explore</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="card cate1">
                                        <img
                                            src="https://i.ibb.co/2P278Qb/engagement-ring.jpg"
                                            className="card-img-top catecom2"
                                            alt="engagement-ring"
                                        />
                                        <div className="card-body com2">
                                            <h5 className="card-title">Engagement-Ring</h5>
                                            <div className="middle">
                                                <div className="text">
                                                    <a href="listing/engmentring.html">Explore</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="card cate1">
                                        <img
                                            src="https://i.ibb.co/7GqfX5D/mangalsutra.jpg"
                                            className="card-img-top catecom2"
                                            alt="mangalsutra"
                                        />
                                        <div className="card-body com2">
                                            <h5 className="card-title">Mangalsutra</h5>
                                            <div className="middle">
                                                <div className="text">
                                                    <a href="listing/mangalsutra.html">Explore</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="card cate1">
                                        <img
                                            src="https://i.ibb.co/zF9k4W2/ring.jpg"
                                            className="card-img-top catecom2"
                                            alt="ring"
                                        />
                                        <div className="card-body com2">
                                            <h5 className="card-title">Ring</h5>
                                            <div className="middle">
                                                <div className="text">
                                                    <a href="listing/ring.html">Explore</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="card cate1">
                                        <img
                                            src="https://i.ibb.co/6H9Zjm6/pendant-errings-set.png"
                                            className="card-img-top catecom2"
                                            alt="pendant errings set"
                                        />
                                        <div className="card-body com2">
                                            <h5 className="card-title">Pendant Earring Set</h5>
                                            <div className="middle">
                                                <div className="text">
                                                    <a href="listing/pendantearset.html">Explore</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="card cate1">
                                        <img
                                            src="https://i.ibb.co/R9QXX8M/nose-pin.jpg"
                                            className="card-img-top catecom2"
                                            alt="nose pin"
                                        />
                                        <div className="card-body com2">
                                            <h5 className="card-title">Nose Pin</h5>
                                            <div className="middle">
                                                <div className="text">
                                                    <a href="listing/nosepin.html">Explore</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="card cate1">
                                        <img
                                            src="https://i.ibb.co/HCp2s9F/gold-chain.jpg"
                                            className="card-img-top catecom2 image"
                                            alt="gold chain"
                                        />
                                        <div className="card-body com2">
                                            <h5 className="card-title">Gold Chain</h5>
                                            <div className="middle">
                                                <div className="text">
                                                    <a href="listing/goldchain.html">Explore</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div id="veriouscategories">
                    <div className="catego">
                        <h4>Shop By Gender</h4>
                    </div>
                    <div className="varcat1">
                        <div className="lightbox">
                            <div className="row">
                                <div className="col-lg-6 main1">
                                    <img
                                        src="https://i.ibb.co/8BTVZSY/female.jpg"
                                        alt="female"
                                        className="w-100 shadow-1-strong rounded part1 pari2"
                                    />
                                    <figcaption className="women">Women</figcaption>
                                </div>
                                <div className="col-lg-6 main2">
                                    <div>
                                        <img
                                            src="https://i.ibb.co/cJ6WCKG/men.jpg"
                                            alt="men"
                                            className="w-100 mb-2 mb-md-4 shadow-1-strong rounde part2 pari2"
                                        />
                                        <figcaption className="men">Men</figcaption>
                                    </div>
                                    <div>
                                        <img
                                            src="https://i.ibb.co/Bn8r698/kid.png"
                                            alt="kids"
                                            className="w-100 shadow-1-strong rounded  part3 pari2"
                                        />
                                        <figcaption className="kid">Kids</figcaption>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="collection">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="catego">
                                    <h4>Shop By collection</h4>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4">
                                {/* Bootstrap 5 card box */}
                                <div className="card-box">
                                    <div className="card">
                                        <img
                                            src="https://i.ibb.co/WzT23TL/coll1.jpg"
                                            className="img-fluid"
                                            alt="collection1"
                                        />
                                    </div>
                                    <h5 className="rain">
                                        The enjoy of Dressing
                                        <button style={{ border: "none", float: "right" }}>
                                            <div className="text">
                                                <a href="listing/joy.html">Explore</a>
                                            </div>
                                        </button>
                                    </h5>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4">
                                {/* Bootstrap 5 card box */}
                                <div className="card-box">
                                    <div className="card">
                                        <img
                                            src="https://i.ibb.co/RCVZZM9/coll2.jpg"
                                            className="img-fluid"
                                            alt="collection2"
                                        />
                                    </div>
                                    <h5 className="rain">
                                        Drop-of-radiance
                                        <button style={{ border: "none", float: "right" }}>
                                            <div className="text">
                                                <a href="listing/dropofradiance.html">Explore</a>
                                            </div>
                                        </button>
                                    </h5>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4">
                                {/* Bootstrap 5 card box */}
                                <div className="card-box">
                                    <div className="card">
                                        <img
                                            src="https://i.ibb.co/j4P5zyk/coll3.jpg"
                                            className="img-fluid"
                                            alt="collection3"
                                        />
                                    </div>
                                    <h5 className="rain">
                                        Stunning every Ear
                                        <button style={{ border: "none", float: "right" }}>
                                            <div className="text">
                                                <a href="listing/stunning.html">Explore</a>
                                            </div>
                                        </button>
                                    </h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



            </>
        )
    }

    //api calling on page load
    // componentDidMount() {
    //     fetch(lurl, { method: "GET" })
    //         .then((res) => res.json())
    //         .then((data) => {
    //             this.setState({ location: data })
    //         })
    // }
}

export default Search;