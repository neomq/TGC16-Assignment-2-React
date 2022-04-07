import React from 'react'

export default function SearchResults (props) {
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
                                    <button type="button" className="btn-close"
                                        data-bs-dismiss="modal"
                                        aria-label="Close"
                                        onClick={props.closeSearch}
                                    ></button>
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
            
            <div className="div-container">
                <div className="section-container">
                    <div className="search-summary text-center py-2">
                        <p>Search Results for:</p>
                        {/* Search Input */}
                        <div className="results-page input-group input-group-lg border-bottom">
                            <input className="search-input form-control border-0 text-wrap text-center"
                                name="search_word"
                                type="text"
                                value={props.search_word}
                                onChange={props.updateFormField}
                                placeholder="Type here to search"
                                autoComplete="off" />
                        </div>
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
                    <div className="d-flex flex-column col-md-12 col-lg-3 py-3">
                            <button type="button"
                                className="text btn-pri btn btn-dark rounded-0 p-2"
                                onClick={props.getSearch}>
                                <i className="fa-solid fa-magnifying-glass px-1"></i>
                                <span>SEARCH</span>
                            </button>
                    </div>
                    
                    {/* Cards */}
                    <div className="mt-4 pb-3 row row-cols-2 row-cols-md-3 row-cols-lg-4 g-2">
                        {props.search_data.map((p) => (
                            <div className="col" key={p._id}>
                                <div className="project card rounded-0 border-0 h-100"
                                    onClick={() => {
                                        props.viewProject(p._id)
                                        props.getComments(p._id)
                                    }}>
                                    <div className="img overflow-hidden">
                                        <img src={p.photo} className="card-img-top rounded-0" alt="..." />
                                    </div>
                                    <div className="card-body">
                                        <p className="card-text text-muted">{p.category.join(' | ')}</p>
                                        <h5 className="card-title">{p.project_title}</h5>
                                        <p className="text text-muted mb-1">by {p.user_name}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}