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
                                                    <option value="intermediate">Intermediate</option>
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
                {/* Title */}
                <div className="title text-center py-3">
                    <h2 className="m-0">HomeMade</h2>
                    <p>DIY Decorating Ideas <br /> For Your Home</p>
                </div>
               
                {/* Main content section */}
                <div className="section-container">
                    <hr className="opacity-25" />
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
                                <div className="modal-content p-3">
                                    <div className="delete-modal modal-body">
                                        <p>Are you sure you want to delete <span>{props.project_data[0].project_title}?</span></p>
                                    </div>
                                    <div className="modal-footer border-0">
                                        <button type="button" className="text btn-pri btn btn-dark rounded-0" data-bs-dismiss="modal">No, Cancel</button>
                                        <button type="button" className="text btn-sec btn btn-outline-dark rounded-0" data-bs-dismiss="modal" onClick={props.deleteProject}>Yes, Delete</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* Project details */}
                    {props.project_data.map((p) => (
                        <div className="mt-4" key={p._id}>
                            <div className="mb-4 mb-md-5">
                                <p className="view-smalltext">{p.category.join(" , ")}</p>
                                <h2 className="view-title overflow-hidden">{p.project_title}</h2>
                                <p className="view-bodytext">{p.description}</p>
                                <p className="view-smalltext py-2">By {p.user_name} / {p.date_of_post.toString().split('T')[0]}</p>
                                <span className="view-smalltext badge rounded-pill bg-light text-dark p-2">{p.time_required} mins</span>
                                <span className="view-smalltext badge rounded-pill bg-light text-dark p-2 ms-2">{p.difficulty}</span>
                            </div>
                            
                            <hr className="opacity-25"/>
                            
                            {/* Content Body */}
                            <div className="mt-2 mb-md-5 content-body row row-cols-1 row-cols-md-2 g-5">
                                <div className="col-md-7 mt-4">
                                    <img src={p.photo} className="mt-md-3 mb-2 w-100" alt="..." />
                                </div>
                                
                                <div className="col-md-5 mt-4">
                                    <h5 className="mt-md-3 overflow-hidden view-subtitle">What You'll Need</h5>
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

                                    <div className="d-flex edit-delete-back mt-5 mb-5 mb-md-4">
                                        {/* Back Button */}
                                        <button type="button"
                                            className="btn p-0"
                                            onClick={() => { props.displayProject(false) }}
                                        ><i className="fa-solid fa-chevron-left pe-2"></i>
                                            Back to {props.active}
                                        </button>
                                    </div>
                                </div>
                            </div>
                            {/* End Content Body */}

                        </div>  
                    ))}
                </div>

            </div>

            {/* Comments section */}
            <div className="comments-container">
                <div className="comments section">
                    <h4 className="overflow-hidden">Leave a comment</h4>
                    <div className="mt-3">
                        <input type="text"
                            className="form-control rounded-0"
                            name="new_comment_name"
                            value={props.new_comment_name}
                            onChange={props.updateFormField}
                            placeholder="Name"
                            autoComplete="off"/>
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
                                        <div className="modal-content edit-modal p-3">
                                            <div className="modal-header border-0">
                                                <h4 className="modal-title" id="staticBackdropLabel">Edit Comment</h4>
                                            </div>
                                            <div className="comments modal-body px-3 py-0">
                                                    <div className="mb-3">
                                                        <input type="text"
                                                            className="form-control rounded-0"
                                                            name="update_comment_name"
                                                            value={props.update_comment_name}
                                                            onChange={props.updateFormField}
                                                            placeholder="Name"
                                                            autoComplete="off"/>
                                                    </div>
                                                    <div className="mb-3">
                                                        <textarea className="form-control rounded-0"
                                                            name="update_comment_text"
                                                            value={props.update_comment_text}
                                                            onChange={props.updateFormField}
                                                            placeholder="Message"/>
                                                    </div>
                                            </div>
                                            <div className="modal-footer border-0">
                                                <button type="button" className="text btn-pri btn btn-outline-dark rounded-0" data-bs-dismiss="modal">CANCEL</button>
                                                <button type="button"
                                                    className="text btn-pri btn btn-dark rounded-0"
                                                    data-bs-dismiss="modal"
                                                    onClick={props.updateComment}
                                                >UPDATE
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div> {/* End of modal */}
                            </div>
                        ))}
                    </div>
                </div>
            </div> {/* End of comments section */}

        </React.Fragment>
    )
}