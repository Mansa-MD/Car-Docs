import React, {Component} from 'react';
import {connect} from 'react-redux';
import { fetchFiltredCars,turnOnHomefilter  } from '../actions';  
import { withRouter } from 'react-router';
import $ from 'jquery';
class SearchBarHome extends Component {

    constructor(props){
      super(props);
      this.state = {
          condition : '',
          body : '',
          make : '',
          model : '',
          year : '',
          transition : '',
          priceRange:''
      };
      this.setCarCondition=this.setCarCondition.bind(this);
      this.setCarBody=this.setCarBody.bind(this);
      this.setCarMake=this.setCarMake.bind(this);
      this.setCarYear=this.setCarYear.bind(this);
      this.setCarTransition=this.setCarTransition.bind(this);
    }
  buttonSearchClicked() {
    if (this.state !== null) {
      var { condition, body, make, model, year, transition, priceRange } = this.state;
      var filter = {};
      priceRange = $("#priceslider").val();

      

      
      filter = { condition, body, make, model, year, transition, priceRange };
      this.props.fetchFiltredCars(filter);
      this.props.turnOnHomefilter();
    }


    this.props.history.push('/cars');
    this.props.filters(filter);         

  }
  setCarCondition(event) {
    this.setState({ condition: event.target.id });
  }
  setCarBody(event) {
    this.setState({ body: event.target.id });
  }
  setCarMake(event) {
    this.setState({ make: event.target.id });
  }
  setCarYear(event) {
    this.setState({ year: event.target.id });
  }
  setCarTransition(event) {
    this.setState({ transition: event.target.id });
  }
    

    render(){
        // future filter selection at home page
        return(
            <div className="search-1 m-t-sm-40">
            <div className="container">
              <div className="search-option p-lg-30 p-b-lg-15 p-b-sm-30 p-r-sm-45 p-xs-15">
                <div className="row">
                  <div className="col-sm-12 col-md-7 col-lg-7">
                    
                  </div>
                  {/* <div className="col-sm-5 col-md-3 col-lg-3">
                    <input id="priceslider" type="text" disabled className="slider_amount m-t-lg-30 m-t-xs-0 m-t-sm-10"/>
                    <div id='spanrange' className="slider-range"></div>
                  </div> */}
                  {/* <div className="col-sm-3 col-md-2 col-lg-2 p-r-sm-0 pull-right pull-left-xs">
                    <button type="button" className="ht-btn ht-btn-default m-t-lg-30 m-t-sm-10 pull-right pull-left-xs" onClick={this.buttonSearchClicked.bind(this)}><i className="fa fa-search"></i> Search</button>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        );
    }




}

export default connect(null,{fetchFiltredCars, turnOnHomefilter})(withRouter(SearchBarHome));