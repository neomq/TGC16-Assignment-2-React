import React from 'react'
import './App.css';
// import axios from "axios"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.js"
import Browse from './components/Browse.js'
import Search from './components/Search.js'


export default class App extends React.Component {

  state = {
    "data": [],

    "active": "browse"
  }

  updateFormField=(e)=>{
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  setActive = (page) => {
    this.setState({
      "active": page
    })
  }

  renderContent(){
    if (this.state.active === "browse") {
      return (
        <React.Fragment>
          <Browse setActive={this.setActive}/>
        </React.Fragment>
      );
    } else if (this.state.active === "search") {
      return (
        <React.Fragment>
          <Search setActive={this.setActive}/>
        </React.Fragment>
      );
    }

  }

  render() {
    return(
      <React.Fragment>

        <nav className="navbar navbar-light bg-light p-2">
          <div className="container-fluid p-2">
            <a className="navbar-brand" href="#">Logo</a>
            <button className="btn btn-primary">Share</button>
          </div>
        </nav>

        {this.renderContent()}
      </React.Fragment>
    );
  }
}
