import React, { Component } from 'react';

class Signin extends Component {

  constructor(props) {
    super(props);
    this.state = {};
    this.submitForm = this.submitForm.bind(this);
  }

  submitForm() {
    console.log('button clicked');
    this.props.history.push('/');
  }

  render() {
    return (
      <div className="col-md-6 col-md-offset-3">
        <h2>Signin</h2>
        <br/>
        <form>
          Username : <input className="form-control" type="text"/>
          <br/>
          Password : <input className="form-control" type="password"/>
          <br/>
          <button className="btn btn-primary pull-right" onClick={this.submitForm}>Submit</button>
        </form>
      </div>
    );
  }
}

export default Signin;
