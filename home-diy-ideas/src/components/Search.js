import React from 'react'

export default function Search (props) {
    return (
        <React.Fragment>
            {/* Close button */}
            <div className="row justify-content-end p-4">
                <button type="button"
                        className="btn-close"
                        onClick={() => { props.setActiveSearch(false) }}>
                </button>
            </div>

            {/* Search Bar */}
            <div className="col-12 mt-3">
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
                        onClick={props.getSearch}
                    >Search</button>
                </div>
            </div>
        </React.Fragment>
    )
}