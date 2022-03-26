import React from 'react'
import './App.css'
import './Browse.css'
import axios from "axios"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.js"
import Home from './components/Home.js'
import DisplaySearch from './components/DisplaySearch.js'
import Form from './components/Form.js'

const BASE_URL = "https://home-diy-ideas.herokuapp.com";

export default class App extends React.Component {

  state = {
    // database
    data: [],

    // page
    active: "home",

    // search
    search_word: "",
    category: "",
    craft_type: "",
    time: "",
    difficulty: "",

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
      active: "search_page"
    })
  }

  renderContent(){
    if (this.state.active === "home") {
      return (
        <React.Fragment>
          <Home setActive={this.setActive}
                  search_word={this.state.search_word}
                  category={this.state.category}
                  craft_type={this.state.craft_type}
                  time={this.state.time}
                  difficulty={this.state.difficulty}
                  updateFormField={this.updateFormField}
                  submitForm={this.submitForm}
                  data={this.state.data}/>
        </React.Fragment>
      );
    } else if (this.state.active === "search_page") {
      return (
        <React.Fragment>
          <DisplaySearch setActive={this.setActive}/>
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
