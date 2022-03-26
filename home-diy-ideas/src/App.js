import React from 'react'
import './App.css';
// import axios from "axios"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.js"
import Browse from './components/Browse.js'
import Search from './components/Search.js'
import Form from './components/Form.js'


export default class App extends React.Component {

  state = {
    "data": [],
    "active": "browse"
  }

  updateFormField = (e) => {
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
    } else if (this.state.active === "form") {
      return (
        <React.Fragment>
          <Form setActive={this.setActive}/>
        </React.Fragment>
      );
    }

  }

  render() {
    return(
      <React.Fragment>

        {/* <nav className="navbar navbar-light bg-light p-2">
          <div className="container-fluid p-2">
          <button className="btn btn-light"
                  onClick={ ()=>{this.setActive("browse")} }>Logo</button>
            <button className="btn btn-primary"
                    onClick={ ()=>{this.setActive("form")} }>Share</button>
          </div>
        </nav> */}

        {this.renderContent()}
      </React.Fragment>
    );
  }
}
