import React from 'react'

export default function ViewProject (props) {
    return (
        <React.Fragment>
            {/* Nav Bar */}
            <nav className="nav justify-content-between">
                <nav className="nav">
                    <div className="nav-link" onClick={() => { props.setActive("browse") }}>Logo</div>
                </nav>
                <nav className="nav">
                    <div className="nav-link" onClick={() => { props.setActiveSearch(true) }}>Search</div>
                    <div className="nav-link" onClick={props.displayAddForm}>Share</div>
                </nav>
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
                                        props.getCommentId(c.comment_id)
                                    }}
                                >Edit
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