import React from 'react'
import './App.css'
import axios from "axios"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.js"
import Browse from './components/Browse.js'
import SearchResults from './components/SearchResults.js'
import Search from './components/Search.js'
import Form from './components/Form.js'
import View from './components/View.js'

// const BASE_URL = "https://home-diy-ideas.herokuapp.com";

// for testing
const BASE_URL = "https://3000-neomq-tgc16assignment-x26hedur85s.ws-us38.gitpod.io";

export default class App extends React.Component {

  state = {
    // database
    all_data: [],
    project_data: {},

    // page
    active: "browse",
    form: false,

    // search project
    search_word: "",
    category: "",
    craft_type: "",
    time_required: "",
    difficulty: "",
    search_data: [],

    // search filter
    category_list: [],
    craft_type_list: [],

    // create new project
    new_user_name: "",
    new_project_title: "",
    new_photo: "",
    new_description: "",
    new_category_1: "",
    new_category_2: "",
    new_category_3: "",
    new_craft_type_1: "",
    new_craft_type_2: "",
    new_craft_type_3: "",
    new_supplies: "",
    new_time_required: "",
    new_difficulty: "",
    new_instructions_text: "",
    new_instructions_link: ""
  }

  fetchData = async () => {
    let response = await axios.get(BASE_URL + "/projects")
    console.log(response.data)
    this.setState({
      all_data: response.data
    })
  }

  getSearch = async () => {
    let search_results = await axios.get(BASE_URL + "/projects_search", {
      params: {
        'search_word': this.state.search_word,
        'category': this.state.category,
        'craft_type': this.state.craft_type,
        'time_required': this.state.time_required,
        'difficulty': this.state.difficulty
      }
    })
    // console.log(search_results)
    this.setState({
      search_data: search_results.data,
      active: "search_results"
    })
  }

  getCategories = async () => {
    let categories = await axios.get(BASE_URL + "/category_list")
    console.log(categories)
    this.setState({
      category_list: categories.data
    })
  }

  getCraftTypes = async () => {
    let craft_types = await axios.get(BASE_URL + "/craft_type_list")
    console.log(craft_types)
    this.setState({
      craft_type_list: craft_types.data
    })
  }

  componentDidMount() {
    this.fetchData()
    this.getCategories()
    this.getCraftTypes()
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

  setActiveForm = (x) => {
    this.setState({
      form: x
    })
  }

  addProject = async () => {
    let craft_type = ""
    if (this.state.new_craft_type_1) {
      craft_type += this.state.new_craft_type_1
    }
    if (this.state.new_craft_type_2) {
      craft_type += this.state.new_craft_type_2
    }
    if (this.state.new_craft_type_3) {
      craft_type += this.state.new_craft_type_3
    }

    let category = ""
    if (this.state.new_category_1) {
      category += this.state.new_category_1
    }
    if (this.state.new_category_2) {
      category += "," + this.state.new_category_2
    }
    if (this.state.new_category_3) {
      category += "," + this.state.new_category_3
    }

    let data = {
      project_title: this.state.new_project_title,
      user_name: this.state.new_user_name,
      photo: this.state.new_photo,
      description: this.state.new_description,
      supplies: this.state.new_supplies,
      craft_type: craft_type,
      category: category,
      time_required: this.state.new_time_required,
      difficulty: this.state.new_difficulty,
      text: this.state.new_instructions_text,
      link: this.state.new_instructions_link
    }
    
    let data_added = await axios.post(BASE_URL + "/projects", data)
    console.log(data_added.data)

    let new_data = await axios.get(BASE_URL + "/projects")
    this.setState({
      form: false,
      all_data: new_data.data
    })
  }

  viewProject = async (id) => {

    let project_id = "/" + id
    let display_project = await axios.get(BASE_URL + "/projects" + project_id)
    console.log(display_project.data)

    this.setState({
      active: "view",
      project_data: display_project.data
    })
  }

  renderContent(){
    if (this.state.form === true) {
      return (
        <React.Fragment>
          <Form setActive={this.setActive}
                setActiveForm={this.setActiveForm}
                user_name={this.state.new_user_name}
                project_title={this.state.new_project_title}
                photo={this.state.new_photo}
                description={this.state.new_description}
                category_1={this.state.new_category_1}
                category_2={this.state.new_category_2}
                category_3={this.state.new_category_3}
                category_list={this.state.category_list}
                craft_type_1={this.state.new_craft_type_1}
                craft_type_2={this.state.new_craft_type_2}
                craft_type_3={this.state.new_craft_type_3}
                craft_type_list={this.state.craft_type_list}
                supplies={this.state.new_supplies}
                time_required={this.state.new_time_required}
                difficulty={this.state.new_difficulty}
                instructions_text={this.state.new_instructions_text}
                instructions_link={this.state.new_instructions_link}
                addProject={this.addProject}
                updateFormField={this.updateFormField}/>
        </React.Fragment>
      );
    }

    if (this.state.active === "browse") {
      return (
        <React.Fragment>
          <Browse setActive={this.setActive}
                  setActiveForm={this.setActiveForm}
                  all_data={this.state.all_data}
                  viewProject={this.viewProject}/>
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
                  category_list={this.state.category_list}
                  craft_type_list={this.state.craft_type_list}/>
        </React.Fragment>
      );
    } else if (this.state.active === "search_results") {
      return (
        <React.Fragment>
          <SearchResults setActive={this.setActive}
                        setActiveForm={this.setActiveForm}
                        search_word={this.state.search_word}
                        category={this.state.category}
                        craft_type={this.state.craft_type}
                        time_required={this.state.time_required}
                        difficulty={this.state.difficulty}
                        getSearch={this.getSearch}
                        updateFormField={this.updateFormField}
                        category_list={this.state.category_list}
                        craft_type_list={this.state.craft_type_list}
                        search_data={this.state.search_data}
                        viewProject={this.viewProject}/>
        </React.Fragment>
      );
    } else if (this.state.active === "view") {
      return (
        <React.Fragment>
          <View setActive={this.setActive}
                setActiveForm={this.setActiveForm}
                project_data={this.state.project_data}/>
        </React.Fragment>
      )
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
