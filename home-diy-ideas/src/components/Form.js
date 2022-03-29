import React from 'react'

export default function Form (props) {
    return (
        <React.Fragment>
            <h3>Share your Home Decorating Idea</h3>
            
            {/* 1. Personal Info */}
            <div className="border-bottom mt-4">
                <h5>1. Personal Info</h5>
            </div>
            <div>
                <input className="form-control mt-4"
                        name="user_name"
                        type="text"
                        value={props.user_name}
                        onChange={props.updateFormField}
                        placeholder="Your Name"
                />
            </div>

            {/* 2. Details */}
            <div className="border-bottom mt-4">
                <h5>2. Details</h5>
            </div>

            {/* Details - Title & Image */}
            <div className="d-flex mt-4">
                <div>
                    <h6>Title of DIY project</h6>
                    <input className="form-control mt-2"
                        name="project_title"
                        type="text"
                        value={props.project_title}
                        onChange={props.updateFormField}
                        placeholder="e.g. wood mirror"
                    />
                </div>

                <div>
                    <h6>Image of artwork</h6>
                    <input className="form-control mt-2"
                        name="photo"
                        type="text"
                        value={props.photo}
                        onChange={props.updateFormField}
                        placeholder="Paste URL of image"
                    />
                </div>
            </div>

            {/* Details - Description */}
            <div className="mt-4">
                <h6>Short Description (125 character max)</h6>
                <textarea class="form-control mt-2" id="exampleFormControlTextarea1"
                    name="description"
                    value={props.description}
                    onChange={props.updateFormField}
                    placeholder="e.g. Simple DIY mirror framed in natural wood"
                />
            </div>

            {/* Category & Craft Filters */}
            <div className="d-flex mt-4">
                <div>
                    <h6>Category (select up to 3)</h6>
                    <select className="form-select"
                        name="category_1"
                        value={props.category_1}
                        onChange={props.updateFormField}>
                        <option>Select Category 1</option>
                        {props.category_list.map((c) =>
                            <option key={c.category}
                                value={c.category}
                            >{c.form_display}
                            </option>
                        )}
                    </select>
                    <select className="form-select"
                        name="category_2"
                        value={props.category_2}
                        onChange={props.updateFormField}>
                        <option>Select Category 2</option>
                        {props.category_list.map((c) =>
                            <option key={c.category}
                                value={c.category}
                            >{c.form_display}
                            </option>
                        )}
                    </select>
                    <select className="form-select"
                        name="category_3"
                        value={props.category_3}
                        onChange={props.updateFormField}>
                        <option>Select Category 3</option>
                        {props.category_list.map((c) =>
                            <option key={c.category}
                                value={c.category}
                            >{c.form_display}
                            </option>
                        )}
                    </select>
                </div>

                <div>
                    <h6>Type of craft (select up to 3)</h6>
                    <select className="form-select"
                        name="craft_type_1"
                        value={props.craft_type_1}
                        onChange={props.updateFormField}>
                        <option>Select Type 1</option>
                        {props.craft_type_list.map((a) =>
                            <option key={a.craft_type}
                                value={a.craft_type}
                            >{a.form_display}
                            </option>
                        )}
                    </select>
                    <select className="form-select"
                        name="craft_type_2"
                        value={props.craft_type_2}
                        onChange={props.updateFormField}>
                        <option>Select Type 2</option>
                        {props.craft_type_list.map((a) =>
                            <option key={a.craft_type}
                                value={a.craft_type}
                            >{a.form_display}
                            </option>
                        )}
                    </select>
                    <select className="form-select"
                        name="craft_type_3"
                        value={props.craft_type_3}
                        onChange={props.updateFormField}>
                        <option>Select Type 3</option>
                        {props.craft_type_list.map((a) =>
                            <option key={a.craft_type}
                                value={a.craft_type}
                            >{a.form_display}
                            </option>
                        )}
                    </select>
                </div>
            </div>

            {/* Tools & Materials */}
            <div className="mt-4">
                <h6>Tools & Materials (seperated by comma)</h6>
                <textarea class="form-control mt-2" id="exampleFormControlTextarea1"
                    name=""
                    placeholder="e.g. scissors,drill,paper"
                />
            </div>

            {/* Time Required & Difficulty */}
            <div className="d-flex mt-4">
                <div>
                    <h6>Time Required (in mins)</h6>
                    <input className="form-control mt-2"
                        name=""
                        type="text"
                        placeholder=""
                    />
                </div>
                <div>
                    <h6>Difficulty</h6>
                    <div class="btn-group" role="group">
                        <button type="button" class="btn btn-outline-secondary">Easy</button>
                        <button type="button" class="btn btn-outline-secondary">Normal</button>
                        <button type="button" class="btn btn-outline-secondary">Hard</button>
                    </div>
                </div>
            </div>

            {/* 3. Instructions */}
            <div className="border-bottom mt-4">
                <h5>3. Instructions</h5>
            </div>
            <div className="mt-4">
                <h6>Description of steps (seperate each step by comma)</h6>
                <textarea class="form-control mt-2" id="exampleFormControlTextarea1"
                    name=""
                    placeholder="e.g."
                />

                <h6 className="mt-4">Link to site (optional)</h6>
                <input className="form-control mt-2"
                        type="text"
                        placeholder="Paste URL here"
                />
            </div>

            {/* Submit */}
            <button type="button" className="btn btn-primary mt-4">Submit</button>
        </React.Fragment>
    )
}