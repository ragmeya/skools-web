import React, { Component } from 'react';

class SearchArea extends Component {
   
    constructor(props) {
        super(props);
        // console.log(props)
        this.state = {term:props.initValue};
        // this.onChangeHandler = this.onChangeHandler.bind(this);
        this.handleTextChange = this.handleTextChange.bind(this);
    }
    
    onChangeHandler(term){
        // this.setState({
        //     term : term
        // });
        // console.log(this.props);
        this.props.onSearchTermChange(term);
    }
    
    handleTextChange(e) {
        this.props.onTextChange(e.target.value);
        // console.log(e.target.value.toUpperCase());
    }

    render() {
        const cities = Object.keys(this.props.plots.cities).map(function(city, index){
            return (
                <option key={index.toString()} value={city}>{city}</option>
            );
        });

        return (
            
            <div className="row" id="searchArea">
                <div className="col-md-10 col-md-offset-1">
                    <div className="col-md-6">
                        <select value={this.props.selectedCity} onChange={(event) => this.onChangeHandler(event.target.value)} className="form-control">
                            {cities}
                        </select>
                    </div>
                    <div className="col-md-6">
                        <input className="form-control" placeholder="Search for school, places" value={this.props.filterText} onChange={this.handleTextChange}/>
                    </div>
                </div>
            </div>
        );
        
    }
}

export default SearchArea;
