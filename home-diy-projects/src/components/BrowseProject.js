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
                    <button type="button"
                            className="btn btn-primary"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal">
                    Search
                    </button>
                    <div className="nav-link" onClick={props.displayAddForm}>Share</div>

                    {/* Search Bar Modal */}
                    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog modal-xl">
                            <div className="modal-content">
                                <div className="row justify-content-end py-3 px-4">
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    {/* Search Bar */}
                                    <div className="col-12 mt-2 px-3 pb-4">
                                        {/* Search Input */}
                                        <div>
                                            <input className="form-control"
                                                name="search_word"
                                                type="text"
                                                value={props.search_word}
                                                onChange={props.updateFormField}
                                                placeholder="What would you like to make today?" />
                                        </div>

                                        {/* Filter */}
                                        <div className="row">
                                            {/* Filter by Category */}
                                            <div className="col-md-3">
                                                <select className="form-select"
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
                                            <div className="col-md-3">
                                                <select className="form-select"
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
                                            <div className="col-md-3">
                                                <select className="form-select"
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
                                            <div className="col-md-3">
                                                <select className="form-select"
                                                    name="difficulty"
                                                    value={props.difficulty}
                                                    onChange={props.updateFormField}>
                                                    <option value="">Difficulty</option>
                                                    <option value="easy">Easy</option>
                                                    <option value="normal">Normal</option>
                                                    <option value="hard">Hard</option>
                                                </select>
                                            </div>
                                        </div>

                                        {/* Search Button */}
                                        <div className="d-flex flex-column col-md-2">
                                            <button type="button"
                                                className="btn btn-primary"
                                                data-bs-dismiss="modal"
                                                onClick={props.getSearch}
                                            >Search</button>
                                        </div>
                                    </div>
                                    {/* End of Search Bar */}
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* End of Modal */}
                </nav>
            </nav>

            <div className="mt-5">
                <h3>Browse</h3>
            </div>

            <div className="card-group row row-cols-1 row-cols-md-3 row-cols-lg-4 g-3">
                {props.all_data.map((p) => (
                    <div className="col" key={p._id}>
                            <div className="card"
                                onClick={() => {
                                    props.viewProject(p._id)
                                    props.getComments(p._id)
                                }}>
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