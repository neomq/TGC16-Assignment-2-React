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
                    <label className="form-label">Name</label>
                    <input type="text"
                            className="form-control"
                            name="new_comment_name"
                            value={props.new_comment_name}
                            onChange={props.updateFormField}
                            placeholder="Your name" />
                </div>
                <div>
                    <label className="form-label">Comment</label>
                    <textarea className="form-control"
                            name="new_comment_text"
                            value={props.new_comment_text}
                            onChange={props.updateFormField}
                            placeholder="Your comments"
                    />
                </div>
                <button type="button" className="btn btn-dark"
                        onClick={props.addComment}>Post Comment</button>
                
                {props.comments_data.map((c) => (
                    <div key={c.comment_id}>
                        <p>{c.comment_name}</p>
                        <p>{c.comment_date}</p>
                        <p>{c.comment_text}</p>
                    </div>
                ))}

            </div>
            
        </React.Fragment>
    )
}