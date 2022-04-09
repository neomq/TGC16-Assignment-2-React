import React from 'react'

export default function BrowseProject (props) {

    return (
        <React.Fragment>
            <div className="page-container">
                {props.goToTop()}

                {/* Nav Bar */}
                <nav className="navbar fixed-top justify-content-between py-3 border-bottom">
                    <div className="div">
                        <button type="button"
                                className="text btn-sec btn rounded-0 py-1 px-3"
                                onClick={() => { props.setActive("home") }}
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
                                    <div className="modal-body pt-0">
                                        {/* Search Bar */}
                                        <div className="col-12 px-3 pt-0 pb-5">
                                            {/* Search Input */}
                                            <div className="input-group input-group-lg border-bottom">
                                                <input className="search-input form-control pt-0 border-0 text-wrap"
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
                                                        <option value="intermediate">Intermediate</option>
                                                        <option value="challenging">Challenging</option>
                                                    </select>
                                                </div>
                                            </div>

                                            {/* Search Button */}
                                            <div className="d-flex flex-column col-md-12 col-lg-3 justify-content-end mt-5">
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
                    {/* Title */}
                    <div className="title text-center py-3">
                        <h2 className="m-0">HomeMade</h2>
                        <p>DIY Decorating Ideas <br/> For Your Home</p>
                    </div>                           

                    {/* Banner */}
                    <div className="banner position-relative">
                        <div className="position-absolute top-50 start-50 translate-middle text-center py-5 w-75">
                            <p className="pt-0 p-4 m-0">Elevate the look of your humble abode with <span>Art & Decor</span> as unique as you.</p>
                            <button type="button" className="text btn-pri btn btn-dark rounded-0 px-4 px-md-5 py-2"
                            data-bs-toggle="modal"
                            data-bs-target="#searchModal">SEARCH DECOR IDEAS</button>
                        </div>
                    </div>
                    
                    <div className="section-container">
                        {/* Section Header */}
                        <div className="py-3 mt-3 section-header text-center">
                            <h4 className="py-3 mb-0">- Latest Ideas & Inspirations -</h4>
                        </div>

                        {/* Cards */}
                        <div className="pb-3 row row-cols-2 row-cols-md-3 row-cols-lg-4 g-2">
                            {props.all_data.map((p) => (
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
                                            <p className="text card-text text-muted">{p.category.join(' | ')}</p>
                                            <h5 className="header card-title">{p.project_title}</h5>
                                            <p className="text text-muted mb-1">by {p.user_name}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}