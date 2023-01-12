import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './Owl.css';
export class Owl extends Component {
    render() {
        return (
            
<div id="trends">
<div className="catego">
    <h4>Trending Products</h4>
  </div>
                <OwlCarousel items={5} className="owl-theme"
                loop
                nav
                margin={10}>
                    <div className="item">
                        <img src="https://i.ibb.co/YdzddBq/roll1.jpg" alt="roll1" />
                        <div className="pip">
                            <h5>Floral Bead Gold Mesh Bangle</h5>
                        </div>
                        <div className="pip1">
                            <h6>₹ 55012</h6>
                            <button>Explore Now</button>
                        </div>
                    </div>
                    <div className="item">
                        <img src="https://i.ibb.co/sqYZmHh/roll2.jpg" alt="roll2" />
                        <div className="pip">
                            <h5>Slender Gold Bracelet</h5>
                        </div>
                        <div className="pip1">
                            <h6>₹ 50135</h6>
                            <button>Explore Now</button>
                        </div>
                    </div>
                    <div className="item">
                        <img src="https://i.ibb.co/h9KLr4H/roll3.jpg" alt="roll3" />
                        <div className="pip">
                            <h5>Differentiated Short Drop Earrings</h5>
                        </div>
                        <div className="pip1">
                            <h6>₹ 68991</h6>
                            <button>Explore Now</button>
                        </div>
                    </div>
                    <div className="item">
                        <img src="https://i.ibb.co/f8byRPg/roll4.jpg" alt="roll4" />
                        <div className="pip">
                            <h5>Enchanting Leaflike Gold Necklace</h5>
                        </div>
                        <div className="pip1">
                            <h6>₹ 140500</h6>
                            <button>Explore Now</button>
                        </div>
                    </div>
                    <div className="item">
                        <img src="https://i.ibb.co/KVZssLk/roll5.jpg" alt="roll5" />
                        <div className="pip">
                            <h5>Enchanting Traditional Gold Mesh Ring</h5>
                        </div>
                        <div className="pip1">
                            <h6>₹ 20856</h6>
                            <button>Explore Now</button>
                        </div>
                    </div>
                    <div className="item">
                        <img src="https://i.ibb.co/3T4CGDR/roll6.jpg" alt="roll6" />
                        <div className="pip">
                            <h5>Alluring Foxtail Gold Chain</h5>
                        </div>
                        <div className="pip1">
                            <h6>₹ 38766</h6>
                            <button>Explore Now</button>
                        </div>
                    </div>
                    <div className="item">
                        <img src="https://i.ibb.co/CtF6hSH/roll7.jpg" alt="roll7" />
                        <div className="pip">
                            <h5>Contemporary Stylish Diamond Stud Earrings</h5>
                        </div>
                        <div className="pip1">
                            <h6>₹ 15116</h6>
                            <button>Explore Now</button>
                        </div>
                    </div>
                    <div className="item">
                        <img src="https://i.ibb.co/GQ8DKmX/roll8.jpg" alt="roll8" />
                        <div className="pip">
                            <h5>Intricate Floral Pendent and Earrings Set</h5>
                        </div>
                        <div className="pip1">
                            <h6>₹ 194887</h6>
                            <button>Explore Now</button>
                        </div>
                    </div>

                </OwlCarousel>
            </div>
        )
    }


}
export default Owl;