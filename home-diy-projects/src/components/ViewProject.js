import React from 'react'

export default function ViewProject (props) {
    return (
        <React.Fragment>
            {/* Nav Bar */}
            <nav className="navbar fixed-top justify-content-between py-3 border-bottom">
                <div className="div">
                    <button type="button"
                            className="text btn-sec btn rounded-0 py-1 px-3"
                            onClick={() => { props.setActive("browse") }}
                    >HOME
                    </button>
                </div>
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

            {/* Back Button */}
            <button type="button"
                        className="btn btn-outline-secondary"
                        onClick={() => { props.displayProject(false) }}
                >Back
            </button>

            {/* Edit Button */}
            <button type="button"
                className="btn btn-outline-secondary"
                onClick={props.editProject}
            >Edit
            </button>

            {/* Delete Button */}
            <button type="button"
                className="btn btn-outline-secondary"
                onClick={props.deleteProject}
            >Delete
            </button>

            {/* Main content section */}
            {props.project_data.map((p) => (
                    <div key={p._id}>
                        <p>{p.category.join(",")}</p>
                        <h2>{p.project_title}</h2>
                        <p>{p.description}</p>
                        <p>By {p.user_name} on {p.date_of_post}</p>
                        <hr/>
                        <img src={p.photo} className="card-img-top w-25" alt="..." />
                        <p>Difficulty: {p.difficulty}</p>
                        <p>Time required: {p.time_required} mins</p>
                        <h5>Supplies</h5>
                        <ol>
                            {p.supplies.map((s, index) => (
                                <li key={index}>
                                    {index+1}. {s}
                                </li>
                            ))}
                        </ol>
                        <h5>How to Do it</h5>
                        {p.instructions.text.map((i, index) => (
                            <div key={index}>
                                <p>Step {index+1}</p>
                                <p>{i}</p>
                            </div>
                        ))}

                        <p>{p.instructions.link}</p>
                    </div>  
            ))}

            {/* Comments section */}
            <div>
                <h4>Leave a comment</h4>
                <div>
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text"
                            id="name"
                            className="form-control"
                            name="new_comment_name"
                            value={props.new_comment_name}
                            onChange={props.updateFormField}
                            placeholder="Your name"/>
                </div>
                <div>
                    <label htmlFor="message" className="form-label">Comment</label>
                    <textarea className="form-control"
                            id="message"
                            name="new_comment_text"
                            value={props.new_comment_text}
                            onChange={props.updateFormField}
                            placeholder="Your comments"
                    />
                </div>
                <button type="button" className="btn btn-dark"
                        onClick={props.addComment}
                >Post Comment
                </button>

                <div className="card-group d-flex flex-column">
                    {props.comments_data.map((c) => (
                        <div className="card mt-1" key={c.comment_id}>
                            <div className="card-header">
                                <p>{c.comment_name}</p>
                                <p>{c.comment_id}</p>
                                {/* Edit Button */}
                                <button type="button"
                                    className="btn btn-sm btn-outline-dark"
                                    data-bs-toggle="modal"
                                    data-bs-target="#staticBackdrop"
                                    onClick={() => {
                                        props.editComment(c.comment_id, c.comment_name, c.comment_text)
                                    }}
                                >Edit
                                </button>
                                {/* Delete Button */}
                                <button type="button"
                                    className="btn btn-sm btn-outline-dark"
                                    onClick={() => {
                                        props.deleteComment(c.comment_id)
                                    }}
                                >Delete
                                </button>
                            </div>
                            <div className="card-body">
                                <p>{c.comment_date}</p>
                                <p>{c.comment_text}</p>
                            </div>
                            {/* Modal to edit comments */}
                            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                <div className="modal-dialog">
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
                                                        placeholder="Your name"/>
                                                </div>
                                                <div className="mb-3">
                                                    <label htmlFor="message" className="col-form-label">Comment</label>
                                                    <textarea className="form-control"
                                                        id="message"
                                                        name="update_comment_text"
                                                        value={props.update_comment_text}
                                                        onChange={props.updateFormField}
                                                        placeholder="Your comments"/>
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