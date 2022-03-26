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
                <h3>Browse</h3>
            </div>
            {props.data.map((eachItem) => (
            <div className="card-group px-3 py-2"
                  key={eachItem._id}>
                  <div className="card">
                    <img src={eachItem.photo} className="card-img-top" alt="..."/>
                    <div className="card-body">
                      <h3 className="card-title">{eachItem.project_title}</h3>
                      <p className="card-text">{eachItem.date_of_post}</p>
                      <p>{eachItem.description}</p>  
                    </div>
                    <div class="card-footer">
                      <small class="text-muted">by {eachItem.user_name}</small>
                    </div>
                  </div>
            </div>
          ))}
        </React.Fragment>
    )
}