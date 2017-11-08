import React, { Component } from 'react';

class Home extends Component {
  render() {
    console.log(this.props.ABC);
    return (
      <div className="col-md-6">
        <div className="plot-blocks">
          <div className="row">
            <div className="col-sm-3">
              <div className="plot-img">Image</div>
            </div>
            <div className="col-sm-3">{this.props.plots.name}<br/>{this.props.plots.name}</div>
            <div className="col-sm-3 col-sm-offset-3">Rating</div>
          </div> 
          <hr/>
          <ul>
            <li></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Home;
