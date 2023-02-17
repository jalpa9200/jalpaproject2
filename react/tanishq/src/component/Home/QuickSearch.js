import React, { Component } from 'react';
import './QuickSearch.css';


class QuickSearch extends Component {

    // constructor(){
    //     super()

    //     this.state={
    //         productType:''
    //     }
    // }

    render() {
        return (
            <>
                <div id="offer">
                    <video width={400} className="vi1" controls="" loop autoPlay muted playsInline id="offervideo">
                        <source
                            src="https://staticimg.titan.co.in/Tanishq/Video/colormejoy-dt.mp4"
                            type="video/mp4"
                        ></source>
                    </video>
                </div>

                <div id="adverties">
                    <div className="catego">
                        <h4>
                            NEW <i>FOR</i> YOU !
                        </h4>
                    </div>
                    <div className="flower">
                        <div className="cards">
                            <div className="elms-animation">
                                <span className="one" />
                                <span className="two" />
                                <span className="three" />
                                <span className="four" />
                            </div>
                            <img
                                className="img-fluid flower1"
                                src="https://i.ibb.co/4FVbBmQ/news1.jpg"
                                alt="Chania"
                                width="15%"
                                height="300px"
                            />
                            <div className="content">
                                <button className="new">
                                    <a>View</a>
                                </button>
                            </div>
                        </div>
                        <div className="cards">
                            <div className="elms-animation">
                                <span className="one" />
                                <span className="two" />
                                <span className="three" />
                                <span className="four" />
                            </div>
                            <img
                                className="img-fluid flower1"
                                src="https://i.ibb.co/PCgWTwL/news2.jpg"
                                alt="Chania"
                                width="15%"
                                height="300px"
                            />
                            <div className="content">
                                <button className="new">
                                View
                                </button>
                            </div>
                        </div>
                        <div className="cards">
                            <div className="elms-animation">
                                <span className="one" />
                                <span className="two" />
                                <span className="three" />
                                <span className="four" />
                            </div>
                            <img
                                className="img-fluid flower1"
                                src="https://i.ibb.co/QN8m0MF/news3.jpg"
                                alt="Chania"
                                width="15%"
                                height="300px"
                            />
                            <div className="content">
                                <button className="new">
                                    View
                                </button>
                            </div>
                        </div>
                        <div className="cards">
                            <div className="elms-animation">
                                <span className="one" />
                                <span className="two" />
                                <span className="three" />
                                <span className="four" />
                            </div>
                            <img className="img-fluid flower1" src="https://i.ibb.co/tXYNKWV/news4.jpg" alt="Chania" width="15%" height="300px"/>
                            <div className="content">
                                <button className="new">View
                                    
                                    {/* <a href="listing/wave.html">View</a> */}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                

            </>
        )
    }

    
    // componentDidMount(){
    //     fetch(qurl,{method:'GET'})
    //     .then((res) => res.json())
    //     .then((data) => {
    //         this.setState({productType:data})
    //     })
    // }
}

export default QuickSearch;