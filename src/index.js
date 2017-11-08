import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import Header from './components/Header';
import Signin from './components/Signin';
import SearchArea from './components/SearchArea';
import Filter from './components/Filter';
import Home from './components/Home';
import Map from './components/Map';

import {
    BrowserRouter as Router,
    Route,
  } from 'react-router-dom';
// var test;
var plots = {
    cities: {
        "Ahmedabad": {
            plot1: {
                name: "Ahmedabad-Plot-Name 1",
                add: "Ahmedabad-Street 1",
                lat: 23.032189,
                lng: 72.567373
            },
            plot2: {
                name: "Ahmedabad-Plot-Name 2",
                add: "Ahmedabad-Street 2",
                lat: 23.231433,
                lng: 72.637479
            }
        },
        "Bangalore": {
            plot1: {
                name: "Marathahalli Plot",
                add: "Bngl-Street 1",
                lat: 12.959895,
                lng: 77.701573
            },
            plot2: {
                name: "Koramangala Plot",
                add: "Bngl-Street 2",
                lat: 12.935056,
                lng: 77.612319
            },
            plot3: {
                name: "Whitefield Plot",
                add: "Bngl-Street 3",
                lat: 13.002231,
                lng: 77.696505
            }
        },
        "Chennai": {
            plot1: {
                name: "Chennai-Plot-Name 1",
                add: "Chennai-Street 1",
                lat: 13.051331,
                lng: 80.283853
            },
            plot2: {
                name: "Chennai-Plot-Name 2",
                add: "Chennai-Street 2",
                lat: 13.102247,
                lng: 80.200426
            }
        },
        "Delhi": {
            plot1: {
                name: "Delhi-Plot-Name 1",
                add: "Delhi-Street 1",
                lat: 28.612364,
                lng: 77.234106
            },
            plot2: {
                name: "Delhi-Plot-Name 2",
                add: "Delhi-Street 2",
                lat: 28.524730,
                lng: 77.185413
            }
        }
    },
} 
class AppA extends Component{

    constructor(props){
        super(props);
        this.state={ 
              selectedCity:"Bangalore",
              filterText : ''
        };

    //    this.citySearch('Bangalore');
       this.citySearch = this.citySearch.bind(this);
       this.handleFilter = this.handleFilter.bind(this);

    } //constructor end 
    citySearch(term){
        // console.log(this.setState);
        // test = term
        this.setState({
            selectedCity:term
        })
    }  

    handleFilter(filterVal) {
        this.setState({
        filterText : filterVal
        });
    }


    render(){
        //const citySearch = this.citySearch(term);
       return (
        <Router>
            <div className="container-fluid">
                <Header/>
                <div className="container">

                    <SearchArea initValue="Bangalore" plots={plots} onSearchTermChange = {this.citySearch} selectedCity={this.state.selectedCity} onTextChange={this.handleFilter}/>
                    <div className="row">
                        <Filter />
                        <Home plots={plots} selectedCity={this.state.selectedCity} filterText={this.state.filterText} onTextChange={this.handleFilter}/>
                        <Map plots={plots} selectedCity={this.state.selectedCity} />
                    </div>
                    <div className="row">
                        <Route path="/signin" component={Signin}/>
                    </div> 
                
                </div> 
            </div>
        </Router>
        );
    }    
}
//Take this component's generated HTML and put it on the page
ReactDOM.render(<AppA/>, document.getElementById('root'));