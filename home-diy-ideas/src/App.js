import React from 'react'
import './App.css'
import axios from "axios"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.js"
import Browse from './components/Browse.js'
import Search from './components/Search.js'
import Form from './components/Form.js'

// const BASE_URL = "https://home-diy-ideas.herokuapp.com";

// for testing
const BASE_URL = "https://3000-neomq-tgc16assignment-x26hedur85s.ws-us38.gitpod.io";

export default class App extends React.Component {

  state = {
    // database
   all_data: [],

    // page
    active: "browse",

    // search
    search_word: "",
    category: "",
    craft_type: "",
    time_required: "",
    difficulty: "",
    search_data: []
  }

  fetchData = async () => {
    let response = await axios.get(BASE_URL + "/projects")
    console.log(response.data)
    this.setState({
      all_data: response.data
    })
  }

  getSearch = async () => {

    let queryString = ""

    // search word
    if (this.state.search_word) {
        queryString += `search_word=${this.state.search_word}`
    }
    // search category
    if (this.state.category !== "Select Category") {
        queryString += `&category=${this.state.category}`
    }
    // search craft_type
    if (this.state.craft_type !== "Select Craft Type") {
        queryString += `&craft_type=${this.state.craft_type}`
    }
    // search time_required
    if (this.state.time_required !== "Select Time Required") {
        queryString += `&time_required=${this.state.time_required}`
    }
    // search difficulty
    if (this.state.difficulty !== "Select Difficulty") {
        queryString += `&difficulty=${this.state.difficulty}`
    }

    let search_results = await axios.get(BASE_URL + "/projects/search/?" + queryString)
    // console.log(search_results)
    this.setState({
      search_data: search_results.data
    })
  }

  componentDidMount() {
    this.fetchData()
    // this.getSearch()
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

  renderContent(){
    if (this.state.active === "browse") {
      return (
        <React.Fragment>
          <Browse setActive={this.setActive}
                  all_data={this.state.all_data}/>
        </React.Fragment>
      );
    } else if (this.state.active === "search") {
      return (
        <React.Fragment>
          <Search setActive={this.setActive}
                  search_word={this.state.search_word}
                  category={this.state.category}
                  craft_type={this.state.craft_type}
                  time_required={this.state.time_required}
                  difficulty={this.state.difficulty}
                  getSearch={this.getSearch}
                  updateFormField={this.updateFormField}
                  search_data={this.state.search_data}/>
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
        <nav className="nav justify-content-between">
          <nav className="nav">
            <div className="nav-link" onClick={() => { this.setActive("browse") }}>Logo</div>
          </nav>
          <nav className="nav">
            <div className="nav-link" onClick={() => { this.setActive("search") }}>Search</div>
            <div className="nav-link" onClick={() => { this.setActive("form") }}>Share</div>
          </nav>
        </nav>

        {this.renderContent()}
      </React.Fragment>
    );
  }
}
