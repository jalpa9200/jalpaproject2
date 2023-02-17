import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import './Header.css';

const url = "http://localhost:5000/api/auth/userinfo";

class Header extends Component {

    constructor() {
        super()

        this.state = {
            userData: ''
        }
    }

    handleLogout = () => {
        sessionStorage.removeItem('ltk')
        this.setState({ userData: '' })
        this.props.history.push('/')
    }

    conditionalHeader = () => {
        if (this.state.userData.name) {
            let data = this.state.userData;
            let outArray = [data.name, data.email, data.phone];
            sessionStorage.setItem('userInfo', outArray)
            return (
                <div id="social">
                    <Link to="/" className="btn btn-success">
                        <span className="glyphicon glyphicon-user"></span> Hi {data.name}
                    </Link> &nbsp;
                    <button onClick={()=>this.handleLogout()} className="btn btn-danger">
                        <span className="glyphicon glyphicon-log-out"></span> Logout
                    </button>
                </div>
            )


        } else {
            return (
                <div id="social">
                    <Link to="/login" className="btn btn-success">
                                            <span className="glyphicon glyphicon-log-in"></span> Login
                                        </Link> &nbsp;
                                        <Link to="/register" className="btn btn-danger">
                                            <span className="glyphicon glyphicon-user"></span> Register
                                        </Link>
                                    </div>
                                )
        }

    }

    render() {
        return (
            <React.Fragment>
                <header className="header" style={{ marginBottom: "unset" }}>
                    <nav className="navbar navbar-light header" id="nav">
                        <div className="container-fluid">
                            <Link className="navbar-brand" to="/" href="#">
                                <img
                                    src="https://i.ibb.co/M1FvV6S/logo.png"
                                    alt="logo"
                                    width={120}
                                    height={70}
                                    className="d-inline-block align-text-top"
                                />
                            </Link>
                            <Link className="btn btn-success home" to="/">Home</Link>
                            <div className="align-self-center mx-auto">
                                {/* <form className="d-flex">
                                    <input
                                        className="form-control me-2 pink2"
                                        type="search"
                                        placeholder="Search your Jewellery and more..."
                                        width={80}
                                        aria-label="Search"
                                    />
                                    <button className="btn try" type="submit">
                                        Search
                                    </button>
                                </form> */}
                            </div>
                            {/* <div id="social">
                                <Link to="/login" className="btn btn-success">
                                    <span className="glyphicon glyphicon-log-in"></span> Login
                                </Link> &nbsp;
                                <Link to="/register" className="btn btn-danger">
                                    <span className="glyphicon glyphicon-user"></span> Register
                                </Link>
                            </div> */}
                            {this.conditionalHeader()}
                            {/*geolocation*/}
                            {/* <div className="location">
                                <img
                                  onClick={()=>this.geolocation()}
                                    // onclick="geolocation()"

                                    src="https://i.ibb.co/ngpCfkG/we3.png" alt=""
                                />
                                <p id="out" style={{ color: "#ffffff" }} />
                                <p id="weatherOut" style={{ color: "#ffffff" }} />
                            </div> */}


                            {/*light-dark*/}
                            {/* <div className="theme-container shadow-light">
                                <img
                                    id="theme-icon"
                                    src="https://www.uplooder.net/img/image/55/7aa9993fc291bc170abea048589896cf/sun.svg"
                                    alt="ERR"
                                />
                            </div> */}
                        </div>
                    </nav>
                    <div id="coupon">
                        <button
                            onClick={()=>this.closeCoupon()}
                            className="btn btn-sm"
                            style={{ float: "right", opacity: 1 }}>

                        </button>
                        <h2 id="couponHeading">
                            <i>Exclusive offer for Diwali !!!</i>
                        </h2>
                        <div id="offer">
                            <div id="offerimage">
                                <img
                                    src="https://i.ibb.co/4KdKwyj/gold-img.jpg"
                                    alt="gold-set"
                                    id="imagestyle"
                                />
                            </div>
                            <div id="offerDetail">
                                <h3>This Festive Season all that Glitters is really Gold....</h3>
                                <p>Get Upto 30% off + Additional 15% off</p>
                                <p> On a Niyo Jewellery......</p>
                                <h4>
                                    <i>Hurry Up !! Few Days Left !!</i>
                                </h4>
                                <h5>Use code: EXrlkT04sy75</h5>
                                <button className="btn btn-outline-dark">See More &gt;&gt;</button>
                            </div>
                        </div>
                    </div>
                    {/* {this.conditionalHeader()} */}
                </header>
            </React.Fragment>
        )
    }


    componentDidMount() {
        fetch(url, {
            method: 'GET',
            headers: {
                'x-access-token': sessionStorage.getItem('ltk'),
            }
        })
            .then((res) => res.json())
            .then((data) => {
                this.setState({
                    userData: data
                })
            })
    }

}

export default withRouter(Header);