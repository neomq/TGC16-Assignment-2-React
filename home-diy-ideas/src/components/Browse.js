import React from 'react'

export default function Browse (props) {
    return (
        <React.Fragment>
            <nav className="navbar navbar-light bg-light p-2">
                <div className="container-fluid p-2">
                    <button className="btn btn-light"
                        onClick={() => { props.setActive("browse") }}>Logo</button>
                    <button className="btn btn-primary"
                        onClick={() => { props.setActive("form") }}>Share</button>
                </div>
            </nav>

            {/* Search */}
            <div className="col-12">
                <div className="d-flex flex-column px-3">
                    <input className="form-control"
                    name="search_word"
                    type="text"
                    value={props.search_word}
                    onChange={props.updateFormField}
                    placeholder="What would you like to make today?"/>
                    
                    {/* Search Button */}
                    <button type="button"
                            className="btn btn-primary"
                            onClick={props.submitForm}>Search</button>
                </div>
            </div>

            <div className="px-3 mt-3">
                <h4>Browse Latest Ideas & Inspirations</h4>
            </div>

            <div className="card-group row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4 px-3 py-2">
                {props.data.map((eachItem) => (
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