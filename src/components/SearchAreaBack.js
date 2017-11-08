import React, { Component } from 'react';

class SearchArea extends Component {
    constructor() {
        super();
        this.state = {
            value: 'Bangalore',
            selectValue: 'Bangalore'
        };
        this.location = {
          cities: {
              "Ahmedabad": {
                  plot1: {
                    name: "Ahmedabad-Name1",
                    add: "Ahmedabad-Street 1",
                      lat: 123,
                      long: 345
                  }
              },
              "Bangalore": {
                  plot1: {
                      name: "Bangalore-Name1",
                      add: "Bangalore-Street 1",
                      lat: 123,
                      long: 345
                  }
              },
              "Delhi": {
                  plot1: {
                      name: "Delhi-Name1",
                      add: "Delhi-Street 1",
                      lat: 123,
                      long: 345
                  }
              },
              "Gujurat": {
                  plot1: {
                      name: "Gujurat-Name1",
                      add: "Gujurat-Street 1",
                      lat: 123,
                      long: 345
                  }
              },
          },
        };
    }

    onChangeHandler(e) {
        this.setState({
            value: e.target.value,
            selectValue: Object.keys(this.location.cities).forEach(function(plot, index) {
                if(plot === e.target.value) {
                    if(plot === e.target.value) {
                        //console.log('display ' + e.target.value + ' details');
                        return (
                            
                            <div className="plot-blocks" key={index.toString()}>
                                <div className="row">
                                    <div className="col-sm-3">
                                        <div className="plot-img">{"Image: " + index}</div>
                                    </div>
                                    <div className="col-sm-4">{this.location.cities[plot].plot1.name}<br/>{this.location.cities[plot].plot1.add}</div>
                                    <div className="col-sm-3 col-sm-offset-2">Rating</div>
                                </div> 
                                <hr/>
                                <ul>
                                    <li>{"Plot Details"}</li>
                                </ul>
                            </div>
                            
                        );
                    } else {
                        console.log('No');
                    }
                }
            }),
        });
    }

    render() {
        const cities = Object.keys(this.location.cities).map(function(city, index){
            return (
                <option key={index.toString()} value={city}>{city}</option>
            );
        });

        // var selectedCity='You selected '+this.state.selectValue;
        const bangalorePlots = Object.keys(this.location.cities).map((plot, index) => {
            if(plot === "Bangalore") {
                return (
                    
                    <div className="plot-blocks" key={index.toString()}>
                        <div className="row">
                            <div className="col-sm-3">
                                <div className="plot-img">{"Image: " + index}</div>
                            </div>
                            <div className="col-sm-4">{this.location.cities[plot].plot1.name}<br/>{this.location.cities[plot].plot1.add}</div>
                            <div className="col-sm-3 col-sm-offset-2">Rating</div>
                        </div> 
                        <hr/>
                        <ul>
                            <li>{"Plot Details"}</li>
                        </ul>
                    </div>
                    
                );
            }
        });

        return (
            
            <div className="row" id="searchArea">
                <div className="col-md-10 col-md-offset-1">
                    <div className="col-md-6">
                        <select value={this.state.selectValue} onChange={this.onChangeHandler.bind(this)} className="form-control">
                            {cities}
                        </select>
                    </div>
                    <div className="col-md-6"><input onChange={this.onChangeHandler.bind(this)} type="text" value={this.state.value} className="form-control"/></div>
                </div>
                <div className="clearfix"></div>



                <hr/>
                <div className="col-md-6">
                    {bangalorePlots}
                </div>


                
            </div>
        );
    }
}

export default SearchArea;
