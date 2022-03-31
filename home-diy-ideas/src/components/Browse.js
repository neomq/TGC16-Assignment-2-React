import React from 'react'

export default function Browse (props) {

    return (
        <React.Fragment>
            <nav className="nav justify-content-between">
                <nav className="nav">
                    <div className="nav-link" onClick={() => { props.setActive("browse") }}>Logo</div>
                </nav>
                <nav className="nav">
                    <div className="nav-link" onClick={() => { props.setActive("search") }}>Search</div>
                    <div className="nav-link" onClick={() => { props.setActiveForm(true) }}>Share</div>
                </nav>
            </nav>

            <div className="mt-5">
                <h3>Browse</h3>
            </div>

            <div className="card-group row row-cols-1 row-cols-md-3 row-cols-lg-4 g-3">
                {props.all_data.map((eachItem) => (
                    <div className="col" key={eachItem._id}>
                        <div className="card">
                            <img src={eachItem.photo} height="320px" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{eachItem.project_title}</h5>
                                <p className="card-text text-muted">{eachItem.date_of_post}</p>
                                <p className="mb-0">{eachItem.description}</p>
                            </div>
                            <div className="card-footer">
                                <small className="text-muted">by {eachItem.user_name}</small>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </React.Fragment>
    )
}