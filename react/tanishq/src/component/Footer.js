import React from 'react';
import './Footer.css';
const Footer = () => {
    return (
        <React.Fragment>
            <footer id="footer">
                <div className="footer-top">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-md-6 footer-links">
                                <h5>Useful Links</h5>
                                <ul>
                                    <li>
                                        <i className="bx bx-chevron-right" />
                                        <a href="#">Delivery Information</a>
                                    </li>
                                    <li>
                                        <i className="bx bx-chevron-right" />
                                        <a href="#">International Shipping</a>
                                    </li>
                                    <li>
                                        <i className="bx bx-chevron-right" />
                                        <a href="#">Payment Options</a>
                                    </li>
                                    <li>
                                        <i className="bx bx-chevron-right" />
                                        <a href="#">Track Your Order</a>
                                    </li>
                                    <li>
                                        <i className="bx bx-chevron-right" />
                                        <a href="#">Return</a>
                                    </li>
                                    <li>
                                        <i className="bx bx-chevron-right" />
                                        <a href="#">Fina a Store</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-3 col-md-6 footer-links">
                                <h5>INFORMATION</h5>
                                <ul>
                                    <li>
                                        <i className="bx bx-chevron-right" />
                                        <a href="#">Careers</a>
                                    </li>
                                    <li>
                                        <i className="bx bx-chevron-right" />
                                        <a href="#">Blog</a>
                                    </li>
                                    <li>
                                        <i className="bx bx-chevron-right" />
                                        <a href="#">Offers &amp; Contest Details</a>
                                    </li>
                                    <li>
                                        <i className="bx bx-chevron-right" />
                                        <a href="#">Help &amp; FAQs</a>
                                    </li>
                                    <li>
                                        <i className="bx bx-chevron-right" />
                                        <a href="#">About Tanisq</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-3 col-md-6 footer-contact">
                                <h5>Contact Us</h5>
                                <p>1800-266-0123</p>
                            </div>
                            <div className="col-lg-3 col-md-6 footer-info">
                                <h3>Download the Tanishq App Now</h3>
                                <img
                                    src="https://i.ibb.co/ZKVcKhj/apple-store.png"
                                    className="pari1"
                                />
                                <img
                                    src="https://i.ibb.co/qMmbn75/google-play.png"
                                    className="pari1"
                                />
                                <div className="social-links mt-3">
                                    <h3>Follow Us On</h3>
                                    <a href="#" className="twitter">
                                        <i className="bi bi-twitter" />
                                    </a>
                                    <a href="#" className="facebook">
                                        <i className="bi bi-facebook" />
                                    </a>
                                    <a href="#" className="instagram">
                                        <i className="bi bi-instagram" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="cont">
                    <div className="copyright">
                        {" "}
                        © Copyright{" "}
                        <strong>
                            <span>Jalpa</span>
                        </strong>
                        . All Rights Reserved
                    </div>
                    <div className="credits">
                        {" "}
                        Designed by <a href="#">Jalpa</a>{" "}
                    </div>
                </div>
            </footer>

        </React.Fragment>
    )
}

export default Footer;