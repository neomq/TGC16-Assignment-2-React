import React from 'react'

export default function Search (props) {

    return (
        <React.Fragment>
            {/* Search */}
            <div className="col-12">
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
                            <option>Select Category</option>
                            <option value="mirrors">Mirrors</option>
                            <option value="wall decor">Wall Decorations</option>
                            <option value="paintings and prints">Paintings and Prints</option>
                        </select>
                    </div>

                    {/* Filter by Craft */}
                    <div className="col-md-3">
                        <select className="form-select"
                            name="craft_type"
                            value={props.craft_type}
                            onChange={props.updateFormField}>
                            <option>Select Craft Type</option>
                            <option value="fibre and textile">Fibre & Textile</option>
                            <option value="rope">Rope</option>
                            <option value="woodworking">Woodworking</option>
                            <option value="paper craft">Paper</option>
                        </select>
                    </div>

                    {/* Filter by Time */}
                    <div className="col-md-3">
                        <select className="form-select"
                            name="time_required"
                            value={props.time_required}
                            onChange={props.updateFormField}>
                            <option>Select Time Required</option>
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
                            <option>Select Difficulty</option>
                            <option value="beginner">Beginner</option>
                            <option value="easy">Easy</option>
                            <option value="normal">Normal</option>
                            <option value="hard">Hard</option>
                            <option value="challenging">Challenging</option>
                        </select>
                    </div>
                </div>

                {/* Search Button */}
                <div className="d-flex flex-column col-md-2">
                    <button type="button"
                        className="btn btn-primary"
                        onClick={props.getSearch}
                    >Search</button>
                </div>
            </div>

            <h1>Search Results</h1>

            <div className="card-group row row-cols-1 row-cols-md-3 row-cols-lg-4 g-3">
                {props.search_data.map((eachItem) => (
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