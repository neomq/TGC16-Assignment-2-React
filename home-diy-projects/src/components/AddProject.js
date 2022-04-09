import React from 'react'

export default function AddProject (props) {
    return (
        <React.Fragment>
            <div className="page-container">
                <div className="form-container">
                    {/* Close button */}
                    <div className="d-grid d-flex justify-content-end">
                        <button type="button" className="btn-close" aria-label="Close" onClick={props.cancelAdd}></button>
                    </div>

                    {/* Title */}
                    <div className="title text-center py-3">
                        <h2 className="m-0">HomeMade</h2>
                        <p>DIY Decorating Ideas <br /> For Your Home</p>
                    </div>

                    <h3>Share your Home Decorating Project</h3>
                    
                    <form>
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
                                autoComplete="off"
                            />
                            {props.error_message.name_error ?
                            <p>{props.error_message.name_error}</p>
                            : null}
                        </div>

                        {/* 2. Details */}
                        <div className="border-bottom mt-4">
                            <h5>2. Details</h5>
                        </div>

                        {/* Details - Title */}
                        <div className="mt-4">
                            <h6>Title of DIY project</h6>
                            <input className="form-control mt-2"
                                name="new_project_title"
                                type="text"
                                value={props.new_project_title}
                                onChange={props.updateFormField}
                                placeholder="e.g. wood mirror"
                                autoComplete="off"
                            />
                            {props.error_message.title_error ?
                            <p>{props.error_message.title_error}</p>
                            : null}
                        </div>

                        {/* Details - Image */}
                        <div className="mt-4">
                            <h6>Image of artwork</h6>
                            <input className="form-control mt-2"
                                name="new_photo"
                                type="text"
                                value={props.new_photo}
                                onChange={props.updateFormField}
                                placeholder="Paste URL of image"
                                autoComplete="off"
                            />
                            {props.error_message.image_error ?
                            <p>{props.error_message.image_error}</p>
                            : null}
                        </div>
                       
                        {/* Details - Description */}
                        <div className="mt-4">
                            <h6>Short Description (150 character max)</h6>
                            <textarea className="form-control mt-2" id="exampleFormControlTextarea1"
                                name="new_description"
                                value={props.new_description}
                                onChange={props.updateFormField}
                                placeholder="e.g. Simple DIY mirror framed in natural wood"
                            />
                            {props.error_message.description_error ?
                            <p>{props.error_message.description_error}</p>
                            : null}
                        </div>

                        {/* Category & Craft Filters */}
                        <div className="mt-4 row row-cols-1 row-cols-md-2 g-3">
                            <div className="col-md-6 m-0">
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
                                {props.error_message.category_error ?
                                <p>{props.error_message.category_error}</p>
                                : null}
                            </div>

                            <div className="col-md-6 mt-4 mt-md-0">
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
                                {props.error_message.craft_type_error ?
                                <p>{props.error_message.craft_type_error}</p>
                                : null}
                            </div>
                        </div>

                        {/* Tools & Materials */}
                        <div className="mt-4">
                            <h6>Tools & Materials</h6>
                            
                            <div className="supplies-input d-flex">
                                <input type="text" className="form-control"
                                    name="new_supplies_added"
                                    value={props.new_supplies_added}
                                    onChange={props.updateFormField}
                                    placeholder="e.g. scissors"
                                    autoComplete="off"
                                />
                                <button type="button"
                                    className="btn pt-2 px-2"
                                    onClick={() => { props.addNewSupplies() }}
                                ><i className="fa-solid fa-circle-plus fs-4"></i></button>
                            </div>
                            {props.error_message.supplies_error ?
                            <p>{props.error_message.supplies_error}</p>
                            : null}
                         
                                {props.new_supplies.map((s, index) => (
                                    <div className="supplies-input d-flex" key={index}>
                                        <input type="text"
                                            className="form-control mt-2"
                                            value={props.new_supplies[index]}
                                            onChange={(e) => {
                                                props.updateSupplies(index, e.target.value)
                                            }} />
                                        <button type="button"
                                                className="btn pt-3 px-2"
                                                onClick={ () => {props.deleteSupply(index)} }
                                        ><i className="fa-solid fa-circle-minus fs-4"></i></button>
                                    </div>
                                ))}
                        
                        </div>

                        {/* Time Required & Difficulty */}
                        <div className="mt-4 row row-cols-1 row-cols-md-2 g-3">
                            <div className="col-md-6 m-0">
                                <h6>Time Required (in mins)</h6>
                                <input className="form-control mt-2 rounded-0 border-0 border-bottom bg-transparent"
                                    name="new_time_required"
                                    value={props.new_time_required}
                                    onChange={props.updateFormField}
                                    type="text"
                                    placeholder="e.g. 60"
                                    autoComplete="off"
                                />
                                {props.error_message.time_error ?
                                <p>{props.error_message.time_error}</p>
                                : null}
                            </div>

                            <div className="col-md-6 mt-4 mt-md-0">
                                <h6>Difficulty Level</h6>
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
                                        value="challenging"
                                        checked={props.new_difficulty === "challenging"}
                                        onChange={props.updateFormField}
                                        id="btnradio3"
                                        autoComplete="off"/>
                                    <label className="btn btn-outline-secondary" htmlFor="btnradio3">Challenging</label>
                                </div>
                                {props.error_message.difficulty_error ?
                                <p>{props.error_message.difficulty_error}</p>
                                : null}
                            </div>
                        </div>

                        {/* 3. Instructions */}
                        <div className="border-bottom mt-4">
                            <h5>3. Instructions</h5>
                        </div>
                        <div className="mt-4">
                            <h6>Description of steps</h6>

                            <div className="supplies-input d-flex">
                                <textarea className="form-control mt-2"
                                    name="new_instructions_text_added"
                                    value={props.new_instructions_text_added}
                                    onChange={props.updateFormField}
                                    placeholder="Describe how to make your home decor!"
                                />
                                <button type="button"
                                    className="btn pt-3 px-2"
                                    onClick={() => { props.addNewInstruction() }}
                                ><i className="fa-solid fa-circle-plus fs-4"></i></button>
                            </div>
                            {props.error_message.instructions_error ?
                            <p>{props.error_message.instructions_error}</p>
                            : null}
                            
                            {props.new_instructions_text.map((i, index) => (
                                <div className="supplies-input d-flex" key={index}>
                                    <textarea className="form-control mt-3"
                                        value={props.new_instructions_text[index]}
                                        onChange={(e) => {
                                            props.updateInstructions(index, e.target.value)
                                        }}
                                    />
                                    <button type="button"
                                            className="btn pt-4 px-2"
                                            onClick={ () => {props.deleteInstruction(index)} }
                                    ><i className="fa-solid fa-circle-minus fs-4"></i></button>
                                </div>
                            ))}

                            <h6 className="mt-4">Link (Optional)</h6>
                            <input className="form-control mt-2"
                                name="new_instructions_link"
                                type="text"
                                value={props.new_instructions_link}
                                onChange={props.updateFormField}
                                placeholder="Paste URL to external site"
                                autoComplete="off"
                            />
                        </div>

                        {/* Submit */}
                        <button type="button" className="btn btn-primary mt-4"
                            onClick={props.addProject}
                        >Submit
                        </button>
                    </form>
                </div>
            </div>
            
        </React.Fragment>
    )
}