import React from 'react'
import './App.css'
import axios from "axios"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle"
import BrowseProject from './components/BrowseProject.js'
import SearchResults from './components/SearchResults.js'
import SearchProject from './components/SearchProject.js'
import AddProject from './components/AddProject.js'
import EditProject from './components/EditProject.js'
import ViewProject from './components/ViewProject.js'

// const BASE_URL = "https://home-diy-ideas.herokuapp.com";

// for testing
const BASE_URL = "https://3000-neomq-tgc16assignment-x26hedur85s.ws-us38.gitpod.io";

export default class App extends React.Component {

  state = {
    // database
    all_data: [],
    project_data: {},

    // page display
    active: "browse",
    search: false,
    form: false,
    edit_form: false,
    display_project: false,

    // search project
    search_word: "",
    category: "",
    craft_type: "",
    time_required: "",
    difficulty: "",
    search_data: [],

    // search filters
    category_list: [],
    craft_type_list: [],

    // create new and update project
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
    new_instructions_link: "",
    projectId_to_update: ""
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
    // console.log(search_results.data)
    this.setState({
      search_data: search_results.data,
      active: "search_results",
      search: false,
      display_project: false,
      project_data: {}
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
      active: page,
      form: false,
      display_project: false
    })
  }

  cancelAdd = () => {
    this.setState({
      form: false,

      // reset form fields
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
    })
  }

  displayAddForm = () => {
    this.setState({
      form: true,

      // reset form fields
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
    })
  }

  cancelEdit = () => {
    this.setState({
      edit_form: false,

      // reset form fields to empty state
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
      new_instructions_link: "",
      projectId_to_update: ""
    })
  }

  setActiveSearch = (y) => {
    this.setState({
      search: y
    })
  }

  displayProject = (d) => {
    this.setState({
      display_project: d,
      project_data: {}
    })
  }

  addProject = async () => {
    let craft_type = ""
    if (this.state.new_craft_type_1) {
      craft_type += this.state.new_craft_type_1
    }
    if (this.state.new_craft_type_2) {
      craft_type += "," + this.state.new_craft_type_2
    }
    if (this.state.new_craft_type_3) {
      craft_type += "," + this.state.new_craft_type_3
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

    // display updated set of data on main page
    let new_data = await axios.get(BASE_URL + "/projects")
    this.setState({
      form: false,
      active: "browse",
      all_data: new_data.data
    })
  }

  viewProject = async (id) => {

    let project_id = "/" + id
    let display_project = await axios.get(BASE_URL + "/projects" + project_id)
    console.log(display_project.data)

    this.setState({
      display_project: true,
      project_data: display_project.data

    })
  }

  editProject = () => {
    // retrieve data of project to edit from state
    let to_edit = this.state.project_data[0]

    this.setState({
      // display form to update project
      edit_form: true,

      // display data to edit on form
      new_user_name: to_edit.user_name,
      new_project_title: to_edit.project_title,
      new_photo: to_edit.photo,
      new_description: to_edit.description,
      new_category_1: to_edit.category[0],
      new_category_2: to_edit.category[1],
      new_category_3: to_edit.category[2],
      new_craft_type_1: to_edit.craft_type[0],
      new_craft_type_2: to_edit.craft_type[1],
      new_craft_type_3: to_edit.craft_type[2],
      new_supplies: to_edit.supplies.toString(),
      new_time_required: to_edit.time_required,
      new_difficulty: to_edit.difficulty,
      new_instructions_text: to_edit.instructions.text.toString(),
      new_instructions_link: to_edit.instructions.link,

      // id of project to update
      projectId_to_update: to_edit._id
    })
  }

  updateProject = async () => {
    let craft_type = ""
    if (this.state.new_craft_type_1) {
      craft_type += this.state.new_craft_type_1
    }
    if (this.state.new_craft_type_2) {
      craft_type += "," + this.state.new_craft_type_2
    }
    if (this.state.new_craft_type_3) {
      craft_type += "," + this.state.new_craft_type_3
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
    
    let data_to_update = {
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

    let project_id = "/" + this.state.projectId_to_update
    let update_project = await axios.put(BASE_URL + "/projects" + project_id, data_to_update)
    console.log(update_project.data)

    // display updated project on page
    let updated_project = await axios.get(BASE_URL + "/projects" + project_id)

    // display updated data on main page
    let new_data = await axios.get(BASE_URL + "/projects")

    // display updated data on search results page
    let search_results = await axios.get(BASE_URL + "/projects_search", {
      params: {
        'search_word': this.state.search_word,
        'category': this.state.category,
        'craft_type': this.state.craft_type,
        'time_required': this.state.time_required,
        'difficulty': this.state.difficulty
      }
    })

    this.setState({
      edit_form: false,
      project_data: updated_project.data,
      all_data: new_data.data,
      search_data: search_results.data
    })
  }

  deleteProject = async () => {
    // retrieve id of project to delete
    let project_id = "/" + this.state.project_data[0]._id

    await axios.delete(BASE_URL + "/projects" + project_id)

    // display updated data on main page
    let new_data = await axios.get(BASE_URL + "/projects")
    
    this.setState({
      display_project: false,
      all_data: new_data.data
    })
  }

  renderContent(){
    if (this.state.form === true) {
      return (
        <React.Fragment>
          <AddProject setActive={this.setActive}
                cancelAdd={this.cancelAdd}
                resetForm={this.resetForm}
                new_user_name={this.state.new_user_name}
                new_project_title={this.state.new_project_title}
                new_photo={this.state.new_photo}
                new_description={this.state.new_description}
                new_category_1={this.state.new_category_1}
                new_category_2={this.state.new_category_2}
                new_category_3={this.state.new_category_3}
                category_list={this.state.category_list}
                new_craft_type_1={this.state.new_craft_type_1}
                new_craft_type_2={this.state.new_craft_type_2}
                new_craft_type_3={this.state.new_craft_type_3}
                craft_type_list={this.state.craft_type_list}
                new_supplies={this.state.new_supplies}
                new_time_required={this.state.new_time_required}
                new_difficulty={this.state.new_difficulty}
                new_instructions_text={this.state.new_instructions_text}
                new_instructions_link={this.state.new_instructions_link}
                addProject={this.addProject}
                updateFormField={this.updateFormField}/>
        </React.Fragment>
      );
    }

    if (this.state.edit_form === true) {
      return (
        <React.Fragment>
          <EditProject cancelEdit={this.cancelEdit}
                    updateProject={this.updateProject}
                    new_user_name={this.state.new_user_name}
                    new_project_title={this.state.new_project_title}
                    new_photo={this.state.new_photo}
                    new_description={this.state.new_description}
                    new_category_1={this.state.new_category_1}
                    new_category_2={this.state.new_category_2}
                    new_category_3={this.state.new_category_3}
                    category_list={this.state.category_list}
                    new_craft_type_1={this.state.new_craft_type_1}
                    new_craft_type_2={this.state.new_craft_type_2}
                    new_craft_type_3={this.state.new_craft_type_3}
                    craft_type_list={this.state.craft_type_list}
                    new_supplies={this.state.new_supplies}
                    new_time_required={this.state.new_time_required}
                    new_difficulty={this.state.new_difficulty}
                    new_instructions_text={this.state.new_instructions_text}
                    new_instructions_link={this.state.new_instructions_link}
                    updateFormField={this.updateFormField}/>
        </React.Fragment>
      );
    }

    if (this.state.search === true) {
      return (
        <React.Fragment>
          <SearchProject setActive={this.setActive}
                  setActiveSearch={this.setActiveSearch}
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
      )
    }

    if (this.state.display_project === true) {
      return (
        <React.Fragment>
          <ViewProject setActive={this.setActive}
                displayAddForm={this.displayAddForm}
                setActiveSearch={this.setActiveSearch}
                displayProject={this.displayProject}
                project_data={this.state.project_data}
                editProject={this.editProject}
                deleteProject={this.deleteProject}/>
        </React.Fragment>
      )
    }

    if (this.state.active === "browse") {
      return (
        <React.Fragment>
          <BrowseProject setActive={this.setActive}
                  displayAddForm={this.displayAddForm}
                  setActiveSearch={this.setActiveSearch}
                  all_data={this.state.all_data}
                  viewProject={this.viewProject}/>
        </React.Fragment>
      );
    } else if (this.state.active === "search_results") {
      return (
        <React.Fragment>
          <SearchResults setActive={this.setActive}
                        displayAddForm={this.displayAddForm}
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
