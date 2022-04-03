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
                    <div className="nav-link" onClick={() => { props.setActiveForm(true) }}>Share</div>
                </nav>
            </nav>

            {/* Back Button */}
            <button type="button"
                        className="btn btn-outline-secondary"
                        onClick={() => { props.displayProject(false) }}
                >Back
            </button>

            {props.project_data.map((p) => (
                <div key={p._id}>
                    {/* Edit Button */}
                    <button type="button"
                        className="btn btn-outline-secondary"
                        onClick={props.editProject}
                    >Edit
                    </button>
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
                            <li key={s}>{index+1}. {s}</li>
                        ))}
                    </ol>
                    <h5>How to Do it</h5>
                    {p.instructions.text.map((i, index) => (
                        <React.Fragment key={i}>
                            <p>Step {index+1}</p>
                            <p>{i}</p>
                        </React.Fragment>
                    ))}

                    <p>{p.instructions.link}</p>
                </div>
            ))}
            
        </React.Fragment>
    )
}