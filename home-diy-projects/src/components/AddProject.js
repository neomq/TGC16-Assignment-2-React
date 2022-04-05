import React from 'react'

export default function AddProject (props) {
    return (
        <React.Fragment>
            {/* Close button */}
            <div className="d-grid d-flex justify-content-end">
                <button type="button"
                        className="btn btn-outline-secondary"
                        onClick={props.cancelAdd}
                >Cancel
                </button>
            </div>

            <h3>Share your Home Decorating Idea</h3>
            
            {/* 1. Personal Info */}
            <div className="border-bottom mt-4">
                <h5>1. Personal Info</h5>
            </div>
            <div>
                <input className="form-control mt-4"
                        name="new_user_name"
                        type="text"
                        value={props.new_user_name}
                        onChange={props.updateFormField}
                        placeholder="Your Name"
                        autocomplete="off"
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
                        name="new_project_title"
                        type="text"
                        value={props.new_project_title}
                        onChange={props.updateFormField}
                        placeholder="e.g. wood mirror"
                        autocomplete="off"
                    />
                </div>

                <div>
                    <h6>Image of artwork</h6>
                    <input className="form-control mt-2"
                        name="new_photo"
                        type="text"
                        value={props.new_photo}
                        onChange={props.updateFormField}
                        placeholder="Paste URL of image"
                        autocomplete="off"
                    />
                </div>
            </div>

            {/* Details - Description */}
            <div className="mt-4">
                <h6>Short Description (125 character max)</h6>
                <textarea className="form-control mt-2" id="exampleFormControlTextarea1"
                    name="new_description"
                    value={props.new_description}
                    onChange={props.updateFormField}
                    placeholder="e.g. Simple DIY mirror framed in natural wood"
                />
            </div>

            {/* Category & Craft Filters */}
            <div className="d-flex mt-4">
                <div>
                    <h6>Category (select up to 3)</h6>
                    <select className="form-select"
                        name="new_category_1"
                        value={props.new_category_1}
                        onChange={props.updateFormField}>
                        <option value="">-- None --</option>
                        {props.category_list.map((c) =>
                            <option key={c.category}
                                value={c.category}
                            >{c.form_display}
                            </option>
                        )}
                    </select>
                    <select className="form-select"
                        name="new_category_2"
                        value={props.new_category_2}
                        onChange={props.updateFormField}>
                        <option value="">-- None --</option>
                        {props.category_list.map((c) =>
                            <option key={c.category}
                                value={c.category}
                            >{c.form_display}
                            </option>
                        )}
                    </select>
                    <select className="form-select"
                        name="new_category_3"
                        value={props.new_category_3}
                        onChange={props.updateFormField}>
                        <option value="">-- None --</option>
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
                        name="new_craft_type_1"
                        value={props.new_craft_type_1}
                        onChange={props.updateFormField}>
                        <option value="">-- None --</option>
                        {props.craft_type_list.map((a) =>
                            <option key={a.craft_type}
                                value={a.craft_type}
                            >{a.form_display}
                            </option>
                        )}
                    </select>
                    <select className="form-select"
                        name="new_craft_type_2"
                        value={props.new_craft_type_2}
                        onChange={props.updateFormField}>
                        <option value="">-- None --</option>
                        {props.craft_type_list.map((a) =>
                            <option key={a.craft_type}
                                value={a.craft_type}
                            >{a.form_display}
                            </option>
                        )}
                    </select>
                    <select className="form-select"
                        name="new_craft_type_3"
                        value={props.new_craft_type_3}
                        onChange={props.updateFormField}>
                        <option value="">-- None --</option>
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
                <h6>Tools & Materials</h6>
                <input type="text" className="form-control mt-2"
                    name="new_supplies_added"
                    value={props.new_supplies_added}
                    onChange={props.updateFormField}
                    placeholder="e.g. scissors,drill,paper"
                    autocomplete="off"
                />
                <button type="button"
                        className="btn btn-outline-secondary px-2"
                        onClick={ ()=>{props.addNewSupplies()} }
                >+ Add</button>

                {props.new_supplies.map( (s, index) => (
                    <div key={index}>
                        <input type="text"
                            className="form-control mt-3"
                            value={props.new_supplies[index]}
                            onChange={(e)=>{
                                props.updateSupplies(index, e.target.value)
                        }}/>
                    </div>
                ))}
            </div>

            {/* Time Required & Difficulty */}
            <div className="d-flex mt-4">
                <div>
                    <h6>Time Required (in mins)</h6>
                    <input className="form-control mt-2"
                        name="new_time_required"
                        value={props.new_time_required}
                        onChange={props.updateFormField}
                        type="text"
                        placeholder="e.g. 60"
                        autocomplete="off"
                    />
                </div>
                <div>
                    <h6>Difficulty</h6>
                    <div className="btn-group" role="group">
                    <input type="radio" className="btn-check"
                            name="new_difficulty"
                            value="easy"
                            checked={props.new_difficulty === "easy"}
                            onChange={props.updateFormField}
                            id="btnradio1"
                            autoComplete="off"/>
                    <label className="btn btn-outline-secondary" htmlFor="btnradio1">Easy</label>

                    <input type="radio" className="btn-check"
                            name="new_difficulty"
                            value="normal"
                            checked={props.new_difficulty === "normal"}
                            onChange={props.updateFormField}
                            id="btnradio2"
                            autoComplete="off"/>
                    <label className="btn btn-outline-secondary" htmlFor="btnradio2">Normal</label>

                    <input type="radio" className="btn-check"
                            name="new_difficulty"
                            value="hard"
                            checked={props.new_difficulty === "hard"}
                            onChange={props.updateFormField}
                            id="btnradio3"
                            autoComplete="off"/>
                    <label className="btn btn-outline-secondary" htmlFor="btnradio3">Hard</label>
                    </div>
                </div>
            </div>

            {/* 3. Instructions */}
            <div className="border-bottom mt-4">
                <h5>3. Instructions</h5>
            </div>
            <div className="mt-4">
                <h6>Description of steps</h6>
                <textarea className="form-control mt-2"
                            name="new_instructions_text_added"
                            value={props.new_instructions_text_added}
                            onChange={props.updateFormField}
                            placeholder="Description"
                />
                <button type="button"
                        className="btn btn-outline-secondary px-2"
                        onClick={ ()=>{props.addNewInstruction()} }
                >+ Add</button>

                {props.new_instructions_text.map( (i, index) => (
                    <div key={index}>
                        <textarea className="form-control mt-3"
                                value={props.new_instructions_text[index]}
                                onChange={(e)=>{
                                    props.updateInstructions(index, e.target.value)
                                }}
                        />
                    </div>
                ) ) }

                <h6 className="mt-4">Link to site (optional)</h6>
                <input className="form-control mt-2"
                        name="new_instructions_link"
                        type="text"
                        value={props.new_instructions_link}
                        onChange={props.updateFormField}
                        placeholder="Paste URL here"
                        autocomplete="off"
                />
            </div>

            {/* Submit */}
            <button type="button" className="btn btn-primary mt-4"
                    onClick={props.addProject}
                    >Submit</button>
        </React.Fragment>
    )
}