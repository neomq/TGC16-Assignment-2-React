import React from 'react'

export default function BrowseProject (props) {

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

            <div className="mt-5">
                <h3>Browse</h3>
            </div>

            <div className="card-group row row-cols-1 row-cols-md-3 row-cols-lg-4 g-3">
                {props.all_data.map((p) => (
                    <div className="col" key={p._id}>
                            <div className="card"
                                onClick={() => { props.viewProject(p._id) }}>
                                <img src={p.photo} height="320px" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{p.project_title}</h5>
                                    <h6 className="card-subtitle mb-2 text-muted">{p.date_of_post}</h6>
                                    <p className="card-text text-muted mb-0">{p.description}</p>
                                </div>
                                <div className="card-footer">
                                    <small className="text-muted">by {p.user_name}</small>
                                </div>
                            </div>
                    </div>
                ))}
            </div>

        </React.Fragment>
    )
}