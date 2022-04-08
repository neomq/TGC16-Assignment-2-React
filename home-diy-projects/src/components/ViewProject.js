import React from 'react'

export default function ViewProject (props) {
    return (
        <React.Fragment>
            {/* {props.goToTop()} */}

            {/* Nav Bar */}
            <nav className="navbar fixed-top justify-content-between py-3 border-bottom">
                {/* Home Button */}
                <div className="div">
                    <button type="button"
                            className="text btn-sec btn rounded-0 py-1 px-3"
                            onClick={() => { props.setActive("home") }}
                    >HOME
                    </button>
                </div>
                {/* Submit / Search */}
                <div className="div">
                    {/* Submit Button */}
                    <button type="button" className="text btn-sec btn rounded-0 py-1 px-3"
                        onClick={props.displayAddForm}>
                        SUBMIT DECOR</button>
                    
                    <div className="vr"></div>

                    {/* Search Button */}
                    <button type="button"
                        className="text btn-pri btn rounded-0 py-1 px-3"
                        data-bs-toggle="modal"
                        data-bs-target="#searchModal">
                        <i className="fa-solid fa-magnifying-glass px-1"></i>
                    </button>

                    {/* Search Bar Modal */}
                    <div className="modal fade" id="searchModal" tabIndex="-1" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered modal-xl">
                            <div className="modal-content">
                                <div className="row justify-content-end pt-4 pb-1 px-5">
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    {/* Search Bar */}
                                    <div className="col-12 mt-1 px-3 pt-2 pb-5">
                                        {/* Search Input */}
                                        <div className="input-group input-group-lg border-bottom">
                                            <input className="search-input form-control border-0 text-wrap"
                                                name="search_word"
                                                type="text"
                                                value={props.search_word}
                                                onChange={props.updateFormField}
                                                placeholder="What would you like to make today?"
                                                autoComplete="off" />
                                        </div>

                                        {/* Filter */}
                                        <div className="row mt-3">
                                            {/* Filter by Category */}
                                            <div className="col-md-6 col-lg-3 mt-1">
                                                <select className="search-filter form-select border-bottom rounded-0"
                                                    name="category"
                                                    value={props.category}
                                                    onChange={props.updateFormField}>
                                                    <option value="">Category</option>
                                                    {props.category_list.map((c) =>
                                                        <option key={c.category}
                                                            value={c.category}
                                                        >{c.form_display}
                                                        </option>
                                                    )}
                                                </select>
                                            </div>

                                            {/* Filter by Craft */}
                                            <div className="col-md-6 col-lg-3 mt-1">
                                                <select className="search-filter form-select border-bottom rounded-0"
                                                    name="craft_type"
                                                    value={props.craft_type}
                                                    onChange={props.updateFormField}>
                                                    <option value="">Craft Type</option>
                                                    {props.craft_type_list.map((a) =>
                                                        <option key={a.craft_type}
                                                            value={a.craft_type}
                                                        >{a.form_display}
                                                        </option>
                                                    )}
                                                </select>
                                            </div>

                                            {/* Filter by Time */}
                                            <div className="col-md-6 col-lg-3 mt-1">
                                                <select className="search-filter form-select border-bottom rounded-0"
                                                    name="time_required"
                                                    value={props.time_required}
                                                    onChange={props.updateFormField}>
                                                    <option value="">Time Required</option>
                                                    <option value="less than 30 mins">Less than 30 mins</option>
                                                    <option value="30 mins - 60 mins">30 mins - 60 mins</option>
                                                    <option value="more than 60 mins">More than 60 mins</option>
                                                </select>
                                            </div>

                                            {/* Filter by Difficulty */}
                                            <div className="col-md-6 col-lg-3 mt-1">
                                                <select className="search-filter form-select border-bottom rounded-0"
                                                    name="difficulty"
                                                    value={props.difficulty}
                                                    onChange={props.updateFormField}>
                                                    <option value="">Difficulty</option>
                                                    <option value="easy">Easy</option>
                                                    <option value="normal">Normal</option>
                                                    <option value="challenging">Challenging</option>
                                                </select>
                                            </div>
                                        </div>

                                        {/* Search Button */}
                                        <div className="d-flex flex-column col-md-12 col-lg-3 mt-5">
                                            <button type="button"
                                                className="text btn-pri btn btn-dark rounded-0 p-2"
                                                data-bs-dismiss="modal"
                                                onClick={props.getSearch}>
                                                <i className="fa-solid fa-magnifying-glass px-1"></i>
                                                <span>SEARCH</span>
                                            </button>
                                        </div>
                                    </div>
                                    {/* End of Search Bar */}
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* End of Search Bar Modal */}
                </div>
            </nav>

            <div className="div-container">
                {/* Edit / Delete */}
                <div className="d-flex edit-delete-back justify-content-end">
                    {/* Edit Button */}
                    <button type="button"
                        className="btn me-2"
                        onClick={props.editProject}
                    ><i className="fa-solid fa-pen-to-square px-1"></i>Edit
                    </button>
                    <div className="vr"></div>
                    {/* Delete Button */}
                    <button type="button" className="btn ms-2" data-bs-toggle="modal" data-bs-target="#deleteModal">
                        <i className="fa-solid fa-trash-can px-1"></i>Delete
                    </button>
                    {/* Delete Modal */}
                    <div className="modal fade" id="deleteModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered">
                            <div className="modal-content">
                                <div className="modal-body">
                                    Are you sure you want to delete {props.project_data[0].project_title}?
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">No, Cancel</button>
                                    <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={props.deleteProject}>Yes, Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                

                {/* Main content section */}
                {props.project_data.map((p) => (
                    <div className="mt-4" key={p._id}>
                        <p className="view-smalltext">{p.category.join(" , ")}</p>
                        <h2 className="view-title overflow-hidden">{p.project_title}</h2>
                        <p className="view-bodytext">{p.description}</p>
                        <p className="view-smalltext py-2">By {p.user_name} / {p.date_of_post.toString().split('T')[0]}</p>
                        <span className="view-smalltext badge rounded-pill bg-light text-dark p-2">{p.time_required} mins</span>
                        <span className="view-smalltext badge rounded-pill bg-light text-dark p-2 ms-2">{p.difficulty} difficulty</span>
                        <img src={p.photo} className="mt-3 w-100" alt="..." />
                        <h5 className="mt-5 overflow-hidden view-subtitle">What You Need</h5>
                        <ol className="view-bodytext mt-2">
                            {p.supplies.map((s, index) => (
                                <li key={index}>
                                    {index+1}. {s}
                                </li>
                            ))}
                        </ol>
                        <h5 className="mt-4 overflow-hidden view-subtitle">How to Do it</h5>
                        {p.instructions.text.map((i, index) => (
                            <div className="mt-2" key={index}>
                                {/* <p className="view-smalltext">Step {index+1}</p> */}
                                <p className="view-bodytext">
                                    <span className="view-smalltext">Step {index+1}<br></br></span>{i}
                                </p>
                            </div>
                        ))}
                        <hr className="w-25"/>
                        {p.instructions.link ?
                                <div className="mt-3 py-3">
                                    <a href={`${p.instructions.link}`}>
                                        <span className="view-link">More about {p.project_title}</span>
                                    </a>
                                </div>
                        : null}
                    </div>  
                ))}

                <div className="d-flex edit-delete-back my-5">
                    {/* Back Button */}
                    <button type="button"
                        className="btn p-0"
                        onClick={() => { props.displayProject(false) }}
                    ><i className="fa-solid fa-chevron-left pe-2"></i>
                        Back to {props.active}
                    </button>
                </div>

            </div>

            {/* Comments section */}
            <div className="comments-container comments">
                <h4 className="overflow-hidden">Leave a comment</h4>
                <div className="mt-3">
                    <input type="text"
                        className="form-control rounded-0"
                        name="new_comment_name"
                        value={props.new_comment_name}
                        onChange={props.updateFormField}
                        placeholder="Name" />
                </div>
                <div className="mt-2">
                    <textarea className="form-control rounded-0"
                        name="new_comment_text"
                        value={props.new_comment_text}
                        onChange={props.updateFormField}
                        placeholder="Message"
                    />
                </div>
                <button type="button"
                        className="text btn-pri btn btn-dark rounded-0 mt-3"
                        onClick={props.addComment}
                >POST COMMENT</button>

                <div className="card-group d-flex flex-column mt-5">
                    {props.comments_data.map((c) => (
                        <div className="card bg-transparent border-0 m-0" key={c.comment_id}>
                            <div className="card-header border-0 px-0 bg-transparent d-flex justify-content-between">
                                <div>
                                    <p className="mb-0">{c.comment_name} &#183; <span>{c.comment_date.toString().split('T')[0]}</span></p>
                                </div>

                                <div className="edit-delete-back d-flex align-items-center">
                                    {/* Edit Button */}
                                    <button type="button"
                                        className="btn btn-sm p-0 me-3"
                                        data-bs-toggle="modal"
                                        data-bs-target="#staticBackdrop"
                                        onClick={() => {
                                            props.editComment(c.comment_id, c.comment_name, c.comment_text)
                                        }}
                                    >Edit
                                    </button>
                                    <div className="vr h-50 align-self-center"></div>
                                    {/* Delete Button */}
                                    <button type="button"
                                        className="btn btn-sm p-0 ms-3"
                                        onClick={() => {
                                            props.deleteComment(c.comment_id)
                                        }}
                                    >Delete
                                    </button>
                                </div>
                            </div>
                            <div className="card-body p-0 mt-3">
                                <p className="mb-0">{c.comment_text}</p>
                            </div>
                            <hr/>
                            {/* Modal to edit comments */}
                            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                <div className="modal-dialog modal-dialog-centered">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className="modal-title" id="staticBackdropLabel">Edit Comment</h5>
                                        </div>
                                        <div className="modal-body">
                                            <form>
                                                <div className="mb-3">
                                                    <label htmlFor="name" className="col-form-label">Name</label>
                                                    <input type="text"
                                                        id="name"
                                                        className="form-control"
                                                        name="update_comment_name"
                                                        value={props.update_comment_name}
                                                        onChange={props.updateFormField}
                                                        placeholder="Your name" />
                                                </div>
                                                <div className="mb-3">
                                                    <label htmlFor="message" className="col-form-label">Comment</label>
                                                    <textarea className="form-control"
                                                        id="message"
                                                        name="update_comment_text"
                                                        value={props.update_comment_text}
                                                        onChange={props.updateFormField}
                                                        placeholder="Your comments" />
                                                </div>
                                            </form>
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                                            <button type="button"
                                                className="btn btn-primary"
                                                data-bs-dismiss="modal"
                                                onClick={props.updateComment}
                                            >Update
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div> {/* End of modal */}
                        </div>
                    ))}
                </div>


            </div> {/* End of comments section */}

        </React.Fragment>
    )
}