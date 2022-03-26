import React from 'react'

export default function Browse (props) {
    return (
        <React.Fragment>
            <nav className="navbar navbar-light bg-light p-2">
                <div className="container-fluid p-2">
                    <button className="btn btn-light"
                        onClick={() => { props.setActive("home") }}>Logo</button>
                    <button className="btn btn-primary"
                        onClick={() => { props.setActive("form") }}>Share</button>
                </div>
            </nav>

            {/* Search */}
            <div className="col-12">
                {/* Search Input */}
                <div className="px-3">
                    <input className="form-control"
                    name="search_word"
                    type="text"
                    value={props.search_word}
                    onChange={props.updateFormField}
                    placeholder="What would you like to make today?"/>
                </div>
                
                {/* Filter */}
                <div className="row p-3">
                    {/* Filter by Category */}
                    <div className="col-md-3">
                        <select className="form-select"
                            name="category"
                            value={props.category}
                            onChange={props.updateFormField}>
                            <option selected>Select Category</option>
                            <option value="clocks">Clocks</option>
                            <option value="mirrors">Mirrors</option>
                            <option value="frames">Frames</option>
                            <option value="vase">Vase</option>
                            <option value="wall-decor">Wall Decorations</option>
                            <option value="hang-decor">Hanging Decorations</option>
                        </select>
                    </div>
                    
                    {/* Filter by Craft */}
                    <div className="col-md-3">
                        <select className="form-select"
                            name="craft_type"
                            value={props.craft_type}
                            onChange={props.updateFormField}>
                            <option selected>Select Craft Type</option>
                            <option value="ceramic">Ceramics & glass</option>
                            <option value="fibre">Fibre & Textile</option>
                            <option value="flower">Flower</option>
                            <option value="leatherwork">Leatherwork</option>
                            <option value="houseware">Houseware</option>
                            <option value="needlework">Needlework</option>
                        </select>
                    </div>
                    

                    {/* Filter by Time */}
                    <div className="col-md-3">
                        <select className="form-select"
                            name="time"
                            value={props.time}
                            onChange={props.updateFormField}>
                            <option selected>Select Time Required</option>
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
                            <option selected>Select Difficulty</option>
                            <option value="beginner">Beginner</option>
                            <option value="easy">Easy</option>
                            <option value="normal">Normal</option>
                            <option value="hard">Hard</option>
                            <option value="challenging">Challenging</option>
                        </select>
                    </div>
                </div>

                {/* Search Button */}
                <div className="d-flex flex-column px-3 col-md-2">
                    <button type="button"
                                className="btn btn-primary"
                                onClick={props.submitForm}
                    >Search</button>
                </div>
            </div>

            <div className="px-3 mt-5">
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