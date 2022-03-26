import React from 'react'
import './App.css'
import axios from "axios"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.js"
import Browse from './components/Browse.js'
import Search from './components/Search.js'
import Form from './components/Form.js'

const BASE_URL = "https://home-diy-ideas.herokuapp.com";

export default class App extends React.Component {

  state = {
    // database
    data: [],

    // page
    active: "browse",

    // search
    search_word: "",

    // submit search form
    submit: false
  }

  fetchData = async () => {
    let response = await axios.get(BASE_URL + "/projects");
    console.log(response.data)
    this.setState({
      data: response.data
    });
  };

  componentDidMount() {
    this.fetchData();
  }

  updateFormField = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  setActive = (page) => {
    this.setState({
      active: page
    })
  }

  submitForm = () => {
    this.setState({
      submit: true,
      active: "search"
    })
  }

  renderContent(){
    if (this.state.active === "browse") {
      return (
        <React.Fragment>
          <Browse setActive={this.setActive}
                  search_word={this.state.search_word}
                  updateFormField={this.updateFormField}
                  submitForm={this.submitForm}
                  data={this.state.data}/>
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
        {this.renderContent()}
      </React.Fragment>
    );
  }
}
