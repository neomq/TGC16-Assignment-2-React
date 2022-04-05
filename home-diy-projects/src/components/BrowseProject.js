import React from 'react'

export default function BrowseProject (props) {

    return (
        <React.Fragment>
            {/* Nav Bar */}
            <nav className="bg-light nav justify-content-between">
                <nav className="nav">
                    <div className="nav-link" onClick={() => { props.setActive("browse") }}>Logo</div>
                </nav>

                <nav className="nav">
                    {/* Submit Button */}
                    <button type="button" className="text btn-sec btn btn-outline-secondary rounded-0 py-3 px-4"
                        onClick={props.displayAddForm}>
                        SUBMIT</button>

                    {/* Search Button */}
                    <button type="button"
                        className="text btn-pri btn btn-dark rounded-0 py-3 px-4"
                        data-bs-toggle="modal"
                        data-bs-target="#searchModal">
                        <i className="fa-solid fa-magnifying-glass px-1"></i>
                        <span>SEARCH</span>
                    </button>

                    {/* Search Bar Modal */}
                    <div className="modal fade" id="searchModal" tabIndex="-1" aria-hidden="true">
                        <div className="modal-dialog modal-xl">
                            <div className="modal-content">
                                <div className="row justify-content-end pt-4 pb-1 px-5">
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    {/* Search Bar */}
                                    <div className="col-12 mt-1 px-3 pt-2 pb-5">
                                        {/* Search Input */}
                                        <div className="input-group input-group-lg border-bottom">
                                            <input className="search-input form-control border-0"
                                                name="search_word"
                                                type="text"
                                                value={props.search_word}
                                                onChange={props.updateFormField}
                                                placeholder="What would you like to make today?"
                                                autoComplete="off"/>
                                        </div>

                                        {/* Filter */}
                                        <div className="row mt-3">
                                            {/* Filter by Category */}
                                            <div className="col-md-3">
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
                                            <div className="col-md-3">
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
                                            <div className="col-md-3">
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
                                            <div className="col-md-3">
                                                <select className="search-filter form-select border-bottom rounded-0"
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
                                        <div className="d-flex flex-column col-md-2 mt-5">
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
                </nav>
            </nav>

            <h1 className="header main">DIY Decorating Ideas For Your Home</h1>
            <p className="text main">Get inspired and elevate the look of your humble abode with art and decor as unique as you</p>
                
            <div className="div-container">
                <div className="mt-5">
                    <h4 className="header section">Browse Latest Ideas & Inspirations</h4>
                </div>

                <div className="card-group row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4">
                    {props.all_data.map((p) => (
                        <div className="col" key={p._id}>
                            <div className="card h-100"
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

            </div>
        </React.Fragment>
    )
}