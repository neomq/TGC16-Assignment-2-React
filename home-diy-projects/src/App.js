import React from 'react'
import './App.css'
import axios from "axios"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle"
import BrowseProject from './components/BrowseProject.js'
import SearchResults from './components/SearchResults.js'
import AddProject from './components/AddProject.js'
import EditProject from './components/EditProject.js'
import ViewProject from './components/ViewProject.js'

// const BASE_URL = "https://home-diy-ideas.herokuapp.com";

// for testing
const BASE_URL = "https://3000-neomq-tgc16assignment-x26hedur85s.ws-us39.gitpod.io";

export default class App extends React.Component {

  state = {
    // database
    all_data: [],
    search_data: [],
    project_data: {},
    comments_data: [],

    // page display
    active: "home",
    add_form: false,
    edit_form: false,
    display_project: false,

    // search project
    search_word: "",
    category: "",
    craft_type: "",
    time_required: "",
    difficulty: "",
    
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
    new_supplies: [],
    new_supplies_added: "",
    new_time_required: "",
    new_difficulty: "",
    new_instructions_text: [],
    new_instructions_text_added: "",
    new_instructions_link: "",
    projectId_to_update: "",

    // validation
    error_message: {},

    // create and update comments
    new_comment_name: "",
    new_comment_text: "",
    update_comment_name: "",
    update_comment_text: "",
    commentId_to_update: ""
  }

  updateFormField = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  setActive = (page) => {
    this.setState({
      active: page,
      add_form: false,
      display_project: false,

      // reset search
      search_word: "",
      search_data: []
    })
  }

  fetchData = async () => {
    let response = await axios.get(BASE_URL + "/projects")
    console.log(response.data)
    this.setState({
      all_data: response.data
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
      active: "search results",
      search: false,
      display_project: false,
      project_data: {}
    })
  }

  closeSearch = () => {
    this.setState({
      //reset search
      category: "",
      craft_type: "",
      time_required: "",
      difficulty: "",
      search_word: ""
    })
  }

  displayProject = (d) => {
    this.setState({
      display_project: d,
      project_data: {},
      comments_data: []
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

  addProject = async () => {
    let craft_type = []
    if (this.state.new_craft_type_1) {
      craft_type.push(this.state.new_craft_type_1)
    }
    if (this.state.new_craft_type_2) {
      craft_type.push(this.state.new_craft_type_2)
    }
    if (this.state.new_craft_type_3) {
      craft_type.push(this.state.new_craft_type_3)
    }

    let category = []
    if (this.state.new_category_1) {
      category.push(this.state.new_category_1)
    }
    if (this.state.new_category_2) {
      category.push(this.state.new_category_2)
    }
    if (this.state.new_category_3) {
      category.push(this.state.new_category_3)
    }

    // Form validation
    let errorMessage = {}
    
    if (!this.state.new_user_name){
      errorMessage.name_error = "Please enter a name."
    } else if (this.state.new_user_name.length < 2){
      errorMessage.name_error = "Name must be at least 2 characters long."
    }
    if (!this.state.new_project_title){
      errorMessage.title_error = "Please enter a project title."
    } else if (this.state.new_project_title.length < 3) (
      errorMessage.title_error = "Title must be at least 3 characters long."
    )
    if (!this.state.new_photo){
      errorMessage.image_error = "Please insert a link to your image."
    }
    if (!this.state.new_description){
      errorMessage.description_error = "Please enter a description."
    } else if (this.state.new_description.length < 5){
      errorMessage.description_error = "Description must be at least 5 characters long."
    } else if (this.state.new_description.length > 150){
      errorMessage.description_error = "Character limit reached."
    }
    if (category.length === 0){
      errorMessage.category_error = "Please select at least one category."
    }
    if (craft_type.length === 0){
      errorMessage.craft_type_error = "Please select at least one craft type."
    }
    if (this.state.new_supplies.length === 0){
      errorMessage.supplies_error = "Please enter at least one item."
    }
    if (!this.state.new_time_required){
      errorMessage.time_error = "Please enter the time required (in mins)."
    } else if (isNaN(this.state.new_time_required) === true) {
      errorMessage.time_error = "Time must be a number."
    } else if (this.state.new_time_required <= 0) {
      errorMessage.time_error = "Time must be more than 0 mins."
    }
    if (!this.state.new_difficulty){
      errorMessage.difficulty_error = "Please select a difficulty level."
    }
    if (this.state.new_instructions_text.length === 0){
      errorMessage.instructions_error = "Please enter at least one step."
    }

    if (Object.keys(errorMessage).length > 0){
      errorMessage.form_error = "One or more fields have an error. Please check and try again."
      this.setState({
        error_message: errorMessage
      })
    } else {
      // proceed to add data
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

      let data_to_add = await axios.post(BASE_URL + "/projects", data)
      console.log(data_to_add.data)

      // display updated set of data on main page
      let new_data = await axios.get(BASE_URL + "/projects")
      this.setState({
        add_form: false,
        active: "home",
        display_project: "false",
        all_data: new_data.data,

        // clear error message (if any)
        error_message: {}
      })
    }
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
      new_supplies: to_edit.supplies,
      new_time_required: to_edit.time_required,
      new_difficulty: to_edit.difficulty,
      new_instructions_text: to_edit.instructions.text,
      new_instructions_link: to_edit.instructions.link,

      // id of project to update
      projectId_to_update: to_edit._id
    })
  }

  updateProject = async () => {
    let craft_type = []
    if (this.state.new_craft_type_1) {
      craft_type.push(this.state.new_craft_type_1)
    }
    if (this.state.new_craft_type_2) {
      craft_type.push(this.state.new_craft_type_2)
    }
    if (this.state.new_craft_type_3) {
      craft_type.push(this.state.new_craft_type_3)
    }

    let category = []
    if (this.state.new_category_1) {
      category.push(this.state.new_category_1)
    }
    if (this.state.new_category_2) {
      category.push(this.state.new_category_2)
    }
    if (this.state.new_category_3) {
      category.push(this.state.new_category_3)
    }

    // Form validation
    let errorMessage = {}
    
    if (!this.state.new_user_name){
      errorMessage.name_error = "Please enter a name."
    } else if (this.state.new_user_name.length < 2){
      errorMessage.name_error = "Name must be at least 2 characters long."
    }
    if (!this.state.new_project_title){
      errorMessage.title_error = "Please enter a project title."
    } else if (this.state.new_project_title.length < 3) (
      errorMessage.title_error = "Title must be at least 3 characters long."
    )
    if (!this.state.new_photo){
      errorMessage.image_error = "Please insert a link to your image."
    }
    if (!this.state.new_description){
      errorMessage.description_error = "Please enter a description."
    } else if (this.state.new_description.length < 5){
      errorMessage.description_error = "Description must be at least 5 characters long."
    } else if (this.state.new_description.length > 150){
      errorMessage.description_error = "Character limit reached."
    }
    if (category.length === 0){
      errorMessage.category_error = "Please select at least one category."
    }
    if (craft_type.length === 0){
      errorMessage.craft_type_error = "Please select at least one craft type."
    }
    if (this.state.new_supplies.length === 0){
      errorMessage.supplies_error = "Please enter at least one item."
    }
    if (!this.state.new_time_required){
      errorMessage.time_error = "Please enter the time required (in mins)."
    } else if (isNaN(this.state.new_time_required) === true) {
      errorMessage.time_error = "Time must be a number."
    } else if (this.state.new_time_required <= 0) {
      errorMessage.time_error = "Time must be more than 0 mins."
    }
    if (!this.state.new_difficulty){
      errorMessage.difficulty_error = "Please select a difficulty level."
    }
    if (this.state.new_instructions_text.length === 0){
      errorMessage.instructions_error = "Please enter at least one step."
    }

    if (Object.keys(errorMessage).length > 0){
      errorMessage.form_error = "One or more fields have an error. Please check and try again."
      this.setState({
        error_message: errorMessage
      })
    } else {
      // proceed to update data
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

      // update project
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
        search_data: search_results.data,

        // clear error message (if any)
        error_message: {}
      })
    }
  }

  deleteProject = async () => {
    // retrieve id of project to delete
    let project_id = "/" + this.state.project_data[0]._id

    // delete project
    await axios.delete(BASE_URL + "/projects" + project_id)

    // display updated data on main page
    let new_data = await axios.get(BASE_URL + "/projects")
    
    this.setState({
      display_project: false,
      all_data: new_data.data
    })
  }

  resetFormField = {
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
    new_supplies: [],
    new_time_required: "",
    new_difficulty: "",
    new_instructions_text: [],
    new_instructions_link: ""
  }

  displayAddForm = () => {
    this.setState({
      add_form: true,
    })
    this.setState(this.resetFormField)
  }

  addNewSupplies = () => {
    this.setState({
      new_supplies: [...this.state.new_supplies, this.state.new_supplies_added],
      new_supplies_added: ""
    })
  }

  addNewInstruction = () => {
    this.setState({
      new_instructions_text: [...this.state.new_instructions_text, this.state.new_instructions_text_added],
      new_instructions_text_added: ""
    })
  }

  deleteSupply = (index) => {
    this.setState({
      'new_supplies': [
        ...this.state.new_supplies.slice(0, index),
        ...this.state.new_supplies.slice(index+1)
      ]
    })
  }

  updateSupplies = (index, newValue) => {
    this.setState({
      'new_supplies': [
        ...this.state.new_supplies.slice(0,index),
        newValue,
        ...this.state.new_supplies.slice(index+1)
      ]
    })
  }

  updateInstructions = (index, newValue) => {
    this.setState({
      'new_instructions_text': [
        ...this.state.new_instructions_text.slice(0,index),
        newValue,
        ...this.state.new_instructions_text.slice(index+1)
      ]
    })
  }

  deleteInstruction = (index) => {
    this.setState({
      'new_instructions_text': [
        ...this.state.new_instructions_text.slice(0, index),
        ...this.state.new_instructions_text.slice(index+1)
      ]
    })
  }

  cancelAdd = () => {
    this.setState({
      add_form: false,
      error_message: {}
    })
    this.setState(this.resetFormField)
  }

  cancelEdit = () => {
    this.setState({
      edit_form: false,
      projectId_to_update: "",
      error_message: {}
    })
    this.setState(this.resetFormField)
  }

  getComments = async (id) => {
    let project_id = "/" + id
    let comments = await axios.get(BASE_URL + "/projects" + project_id + "/comments")

    let comments_data = []
    if (comments.data[0].comments) {
      comments_data = comments.data[0].comments
    } else {
      comments_data = []
    }

    this.setState({
      comments_data: comments_data
    })
  }

  addComment = async () => {
    let data = {
      comment_name: this.state.new_comment_name,
      comment_text: this.state.new_comment_text
    }

    let project_id = "/" + this.state.project_data[0]._id

    let comment_to_add = await axios.post(BASE_URL + "/projects" + project_id + "/comments", data)
    console.log(comment_to_add.data)

    // display updated comments on project page
    let new_comments = await axios.get(BASE_URL + "/projects" + project_id + "/comments")

    this.setState({
      comments_data: new_comments.data[0].comments,
      new_comment_name: "",
      new_comment_text: ""
    })
  }

  editComment = (id, name, text) => {
    this.setState({
      commentId_to_update: id,

      // display comment to edit
      update_comment_name: name,
      update_comment_text: text
    })
  }

  updateComment = async () => {
    let data_to_update = {
      comment_name: this.state.update_comment_name,
      comment_text: this.state.update_comment_text
    }

    // update comment
    let project_id = "/" + this.state.project_data[0]._id
    let comment_id = "/" + this.state.commentId_to_update
    let update_comment = await axios.put(BASE_URL + "/projects" + project_id + "/comments" + comment_id, data_to_update)
    console.log(update_comment.data)

    // display updated comment in the comments section
    let updated_comments = await axios.get(BASE_URL + "/projects" + project_id + "/comments")

    this.setState({
      comments_data: updated_comments.data[0].comments,
      update_comment_name: "",
      update_comment_text: ""
    })
  }

  deleteComment = async (id) => {
    // retrieve id of project
    let project_id = "/" + this.state.project_data[0]._id

    // retrieve id of comment to delete
    let comment_id_todelete = "/" + id

    // delete comment
    await axios.delete(BASE_URL + "/projects" + project_id + "/comments" + comment_id_todelete)

    // display updated comment in the comments section
    let updated_comments = await axios.get(BASE_URL + "/projects" + project_id + "/comments")

    this.setState({
      comments_data: updated_comments.data[0].comments
    })
  }

  goToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    })
}

  renderContent(){
    if (this.state.add_form === true) {
      return (
        <React.Fragment>
          <AddProject setActive={this.setActive}
                cancelAdd={this.cancelAdd}
                resetForm={this.resetForm}
                onSubmit={this.onSubmit}
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
                new_supplies_added={this.state.new_supplies_added}
                new_time_required={this.state.new_time_required}
                new_difficulty={this.state.new_difficulty}
                new_instructions_text={this.state.new_instructions_text}
                new_instructions_text_added={this.state.new_instructions_text_added}
                new_instructions_link={this.state.new_instructions_link}
                addProject={this.addProject}
                addNewSupplies={this.addNewSupplies}
                updateSupplies={this.updateSupplies}
                deleteSupply={this.deleteSupply}
                addNewInstruction={this.addNewInstruction}
                updateInstructions={this.updateInstructions}
                deleteInstruction={this.deleteInstruction}
                error_message={this.state.error_message}
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
                    new_supplies_added={this.state.new_supplies_added}
                    new_time_required={this.state.new_time_required}
                    new_difficulty={this.state.new_difficulty}
                    new_instructions_text={this.state.new_instructions_text}
                    new_instructions_text_added={this.state.new_instructions_text_added}
                    new_instructions_link={this.state.new_instructions_link}
                    addNewSupplies={this.addNewSupplies}
                    updateSupplies={this.updateSupplies}
                    deleteSupply={this.deleteSupply}
                    addNewInstruction={this.addNewInstruction}
                    updateInstructions={this.updateInstructions}
                    deleteInstruction={this.deleteInstruction}
                    error_message={this.state.error_message}
                    updateFormField={this.updateFormField}/>
        </React.Fragment>
      );
    }

    if (this.state.display_project === true) {
      return (
        <React.Fragment>
          <ViewProject setActive={this.setActive}
                active={this.state.active}
                displayAddForm={this.displayAddForm}
                displayProject={this.displayProject}
                project_data={this.state.project_data}
                editProject={this.editProject}
                deleteProject={this.deleteProject}
                comments_data={this.state.comments_data}
                getComments={this.getComments}
                new_comment_name={this.state.new_comment_name}
                new_comment_text={this.state.new_comment_text}
                addComment={this.addComment}
                update_comment_name={this.state.update_comment_name}
                update_comment_text={this.state.update_comment_text}
                editComment={this.editComment}
                updateComment={this.updateComment}
                deleteComment={this.deleteComment}
                updateFormField={this.updateFormField}
                search_word={this.state.search_word}
                category={this.state.category}
                craft_type={this.state.craft_type}
                time_required={this.state.time_required}
                difficulty={this.state.difficulty}
                getSearch={this.getSearch}
                closeSearch={this.closeSearch}
                category_list={this.state.category_list}
                craft_type_list={this.state.craft_type_list}
                goToTop={this.goToTop}/>
        </React.Fragment>
      )
    }

    if (this.state.active === "home") {
      return (
        <React.Fragment>
          <BrowseProject setActive={this.setActive}
                  displayAddForm={this.displayAddForm}
                  all_data={this.state.all_data}
                  viewProject={this.viewProject}
                  getComments={this.getComments}
                  search_word={this.state.search_word}
                  category={this.state.category}
                  craft_type={this.state.craft_type}
                  time_required={this.state.time_required}
                  difficulty={this.state.difficulty}
                  getSearch={this.getSearch}
                  closeSearch={this.closeSearch}
                  updateFormField={this.updateFormField}
                  category_list={this.state.category_list}
                  craft_type_list={this.state.craft_type_list}
                  goToTop={this.goToTop}/>
        </React.Fragment>
      );
    } else if (this.state.active === "search results") {
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
                        viewProject={this.viewProject}
                        getComments={this.getComments}/>
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
