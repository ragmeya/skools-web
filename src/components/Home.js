import React, { Component } from 'react';
// import SearchArea from './SearchArea';
import logo from '..//image1.png';


class Home extends Component {
  // constructor(props){
  //   super(props)
  // }
  render() {
    const newState = this.props;
    // console.log(this.props);
    const ab  = this.props.selectedCity;
    const filterText = this.props.filterText;
    let counter = 0;
      // console.log(filterText);
    const output =  Object.keys(this.props.plots.cities).map(function(plot, value){
            const plotsArr = [];
            let myObj = newState.plots.cities;
            // console.log(myObj[plot]);
            // console.log(myObj[plot].plot1.name.indexOf(filterText));
            Object.keys(myObj[plot]).forEach((eachPlot) => {
              // console.log(myObj[plot][eachPlot].name);
              let cityName =  myObj[plot][eachPlot].name;
              cityName = cityName.toLowerCase();
            if(cityName.indexOf(filterText.toLowerCase()) === -1) {
              return;
            }

            if(plot === ab) {
              plotsArr.push(<div className="plot-blocks" key={myObj[plot][eachPlot].name}>
              <div className="row">
                <div className="col-sm-3">
                  <div ><img src={logo} alt={logo} /></div>
                </div>
                <div className="col-sm-6">{myObj[plot][eachPlot].name}<br/>{myObj[plot][eachPlot].add}</div>
                <div className="col-sm-3 ">Rating </div>
              </div>
              <hr/>
              <div className="row">
                <div className="col-sm-12">
                  <h5>Amenities</h5>
                  <ul>
                    <li>Swimming Pool</li>
                    <li>Gym</li>
                    <li>Indoor Games</li>
                  </ul>
                </div>
                <div className="col-sm-12"><button className="pull-left btn btn-info">Details</button><button className="pull-right btn btn-warning">Call</button></div>
              </div>
            </div>);
            }
          });
      //
          return (
            <div key={ab+counter++}>{plotsArr}</div>
          );

    });

    return (
      <div className="col-md-6" key={'plot'+1}>
          {output}
      </div>
    );
  }
}

export default Home;
