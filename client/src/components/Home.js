import React,{Component} from 'react';

class Home extends Component{

    componentDidMount(){
       window.updateCarousel();
       window.reRenderRangeSlider();
    }
    
    render(){
        return(
            <div className="wrap-body-inner">
                <div className="product product-grid product-grid-2 car m-t-lg-90 p-t-sm-35 m-b-lg-20">
                    <div className="heading">
                        <h3>CONCEPTS CARS</h3>
                    </div>
                    <div className="row">
                        <div
                        id="fifi"
                        className="owl"
                        data-items="3"
                        data-itemsdesktop="2"
                        data-itemsdesktopsmall="2"
                        data-itemstablet="2"
                        data-itemsmobile="1"
                        data-pag="false"
                        data-buttons="true"
                        >
                        <div className="col-lg-12">
                            <div className="product-item hover-img">
                            <a   className="product-img">
                                <img
                                src={`${process.env.PUBLIC_URL}/images/b-img-22.jpg`}
                                alt=""
                                />
                            </a>
                            <div className="product-caption">
                                <h4 className="product-name">
                                <a>
                                    2020 BMW VISION / <b>Concept</b>
                                </a>
                                <span className="f-18"> $300,000</span>
                                </h4>
                            </div>
                            <ul className="absolute-caption">
                                <li>
                                <i className="fa fa-clock-o" />2020
                                </li>
                                <li>
                                <i className="fa fa-car" />Auto
                                </li>
                                <li>
                                <i className="fa fa-road" />Hybrid
                                </li>
                            </ul>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="product-item hover-img">
                            <a   className="product-img">
                                <img
                                src={`${process.env.PUBLIC_URL}/images/b-img-14.jpg`}
                                alt=""
                                />
                            </a>
                            <div className="product-caption">
                                <h4 className="product-name">
                                <a>
                                    2017 AUDI E-Tron SPYDER / <b>Concept</b>
                                </a>
                                <span className="f-18"> $165,000</span>
                                </h4>
                            </div>
                            <ul className="absolute-caption">
                                <li>
                                <i className="fa fa-clock-o" />2017
                                </li>
                                <li>
                                <i className="fa fa-car" />Auto
                                </li>
                                <li>
                                <i className="fa fa-road" />Electric
                                </li>
                            </ul>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="product-item hover-img">
                            <a   className="product-img">
                                <img
                                src={`${process.env.PUBLIC_URL}/images/b-img-15.jpg`}
                                alt=""
                                />
                            </a>
                            <div className="product-caption">
                                <h4 className="product-name">
                                <a  >
                                    2013 AMG GRAN TURISMO / <b>used</b>
                                </a>
                                <span className="f-18"> $200,000</span>
                                </h4>
                            </div>
                            <ul className="absolute-caption">
                                <li>
                                <i className="fa fa-clock-o" />2013
                                </li>
                                <li>
                                <i className="fa fa-car" />Auto
                                </li>
                                <li>
                                <i className="fa fa-road" />Gas
                                </li>
                            </ul>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="product-item hover-img">
                            <a   className="product-img">
                                <img
                                src={`${process.env.PUBLIC_URL}/images/b-img-4.jpg`}
                                alt=""
                                />
                            </a>
                            <div className="product-caption">
                                <h4 className="product-name">
                                <a  >
                                    HYUNDAI VELOSTER TURBO SPORT / <b>used</b>
                                </a>
                                <span className="f-18"> $201,000</span>
                                </h4>
                            </div>
                            <ul className="absolute-caption">
                                <li>
                                <i className="fa fa-clock-o" />2016
                                </li>
                                <li>
                                <i className="fa fa-car" />Auto
                                </li>
                                <li>
                                <i className="fa fa-road" />Gas
                                </li>
                            </ul>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="product-item hover-img">
                            <a   className="product-img">
                                <img
                                src={`${process.env.PUBLIC_URL}/images/b-img-10.jpg`}
                                alt=""
                                />
                            </a>
                            <div className="product-caption">
                                <h4 className="product-name">
                                <a  >
                                    HYUNDAI ELANTRA 2016 NEW MODEL / <b>used</b>
                                </a>
                                <span className="f-18"> $201,000</span>
                                </h4>
                            </div>
                            <ul className="absolute-caption">
                                <li>
                                <i className="fa fa-clock-o" />2016
                                </li>
                                <li>
                                <i className="fa fa-car" />Auto
                                </li>
                                <li>
                                <i className="fa fa-road" />Gas
                                </li>
                            </ul>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="product-item hover-img">
                            <a   className="product-img">
                                <img
                                src={`${process.env.PUBLIC_URL}/images/b-img-11.jpg`}
                                alt=""
                                />
                            </a>
                            <div className="product-caption">
                                <h4 className="product-name">
                                <a  >
                                    BMW , NAVI, LEATHER, ABS / <b>used</b>
                                </a>
                                <span className="f-18"> $201,000</span>
                                </h4>
                            </div>
                            <ul className="absolute-caption">
                                <li>
                                <i className="fa fa-clock-o" />2016
                                </li>
                                <li>
                                <i className="fa fa-car" />Auto
                                </li>
                                <li>
                                <i className="fa fa-road" />Gas
                                </li>
                            </ul>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
                <div className="banner-item banner-2x banner-bg-9 color-inher m-b-lg-50">
                <h3 className="f-weight-300">
                    Start Selling With <strong>Car Docs</strong> Now!
                </h3>
                <a className="ht-btn ht-btn-default">
                    Click to sell your car
                </a>
                </div>   
            </div>
        ); 
    }
}

export default Home ;