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
                                <span className="f-18"> $265,000</span>
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
                                    2013 AMG GRAN TURISMO / <b>Concept</b>
                                </a>
                                <span className="f-18"> $400,000</span>
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
                                src={`${process.env.PUBLIC_URL}/images/b-img-44.jpg`}
                                alt=""
                                />
                            </a>
                            <div className="product-caption">
                                <h4 className="product-name">
                                <a  >
                                    2018 KOENIGSEGG AGERA RS / <b>CONCEPT</b>
                                </a>
                                <span className="f-18"> $1,250,000</span>
                                </h4>
                            </div>
                            <ul className="absolute-caption">
                                <li>
                                <i className="fa fa-clock-o" />2018
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
                                src={`${process.env.PUBLIC_URL}/images/b-img-101.jpg`}
                                alt=""
                                />
                            </a>
                            <div className="product-caption">
                                <h4 className="product-name">
                                <a  >
                                    2019 MC'LAREN 570 GT / <b>CONCEPT</b>
                                </a>
                                <span className="f-18"> $165,000</span>
                                </h4>
                            </div>
                            <ul className="absolute-caption">
                                <li>
                                <i className="fa fa-clock-o" />2019
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
                                src={`${process.env.PUBLIC_URL}/images/b-img-111.jpg`}
                                alt=""
                                />
                            </a>
                            <div className="product-caption">
                                <h4 className="product-name">
                                <a  >
                                    2019 BUGATTI LA VOITURE NOIRE / <b>CONCEPT</b>
                                </a>
                                <span className="f-18"> $2,000,000</span>
                                </h4>
                            </div>
                            <ul className="absolute-caption">
                                <li>
                                <i className="fa fa-clock-o" />2019
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