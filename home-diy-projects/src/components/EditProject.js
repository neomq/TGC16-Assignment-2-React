import React from 'react'

export default function EditProject (props) {
    return (
        <React.Fragment>
            <div className="page-container">
                {/* Close button */}
                <div className="d-grid d-flex justify-content-end pt-4 px-5">
                    <button type="button" className="btn-close" aria-label="Close" onClick={props.cancelEdit}></button>
                </div>

                <div className="form form-container pt-0">
                    {/* Title */}
                    <div className="title text-center py-3">
                        <h2 className="m-0">HomeMade</h2>
                        <p>DIY Decorating Ideas <br /> For Your Home</p>
                    </div>

                    <h3 className="form-header text-center mb-5">You are editing: {props.new_project_title}</h3>
                    <hr/>
                    <form>
                        {/* Details - Title */}
                        <div className="mt-5">
                            <h6 className="form-title">1. Title of Decor</h6>
                            <input className="form-control add-form my-2 rounded-0 bg-transparent"
                                name="new_project_title"
                                type="text"
                                value={props.new_project_title}
                                onChange={props.updateFormField}
                                placeholder="e.g. DIY Wood Framed Mirror"
                                autoComplete="off"
                            />
                            {props.error_message.title_error ?
                            <p className="error-text my-1">{props.error_message.title_error}</p>
                            : null}
                        </div>

                        {/* Details - Image */}
                        <div className="mt-4">
                            <h6 className="form-title">2. Image of Decor</h6>
                            <input className="form-control add-form my-2 rounded-0 bg-transparent"
                                name="new_photo"
                                type="text"
                                value={props.new_photo}
                                onChange={props.updateFormField}
                                placeholder="Paste URL of image"
                                autoComplete="off"
                            />
                            {props.error_message.image_error ?
                            <p className="error-text my-1">{props.error_message.image_error}</p>
                            : null}
                        </div>
                    
                        {/* Details - Description */}
                        <div className="mt-4">
                            <h6 className="form-title">3. Short Description <span>(150 character max)</span></h6>
                            <textarea className="form-control add-form my-2 rounded-0 bg-transparent" id="exampleFormControlTextarea1"
                                name="new_description"
                                value={props.new_description}
                                onChange={props.updateFormField}
                                placeholder="e.g. This wood framed mirror is the perfect accessory for any space!"
                            />
                            {props.error_message.description_error ?
                            <p className="error-text my-1">{props.error_message.description_error}</p>
                            : null}
                        </div>
                        
                        {/* Category & Craft Filters */}
                        <div className="mt-4 row row-cols-1 row-cols-md-2 g-3">
                            <div className="col-md-6 my-2">
                                <h6 className="form-title">4. Category <span>(select up to 3)</span></h6>
                                <select className="form-select add-form rounded-0 border bg-transparent"
                                    name="new_category_1"
                                    value={props.new_category_1}
                                    onChange={props.updateFormField}>
                                    <option value="">-- Select --</option>
                                    {props.category_list.map((c) =>
                                        <option key={c.category}
                                            value={c.category}
                                        >{c.form_display}
                                        </option>
                                    )}
                                </select>
                                <select className="form-select add-form rounded-0 border mt-2 bg-transparent"
                                    name="new_category_2"
                                    value={props.new_category_2}
                                    onChange={props.updateFormField}>
                                    <option value="">-- Select --</option>
                                    {props.category_list.map((c) =>
                                        <option key={c.category}
                                            value={c.category}
                                        >{c.form_display}
                                        </option>
                                    )}
                                </select>
                                <select className="form-select add-form rounded-0 border mt-2 bg-transparent"
                                    name="new_category_3"
                                    value={props.new_category_3}
                                    onChange={props.updateFormField}>
                                    <option value="">-- Select --</option>
                                    {props.category_list.map((c) =>
                                        <option key={c.category}
                                            value={c.category}
                                        >{c.form_display}
                                        </option>
                                    )}
                                </select>
                                {props.error_message.category_error ?
                                    <p className="error-text my-1">{props.error_message.category_error}</p>
                                    : null}
                            </div>

                            <div className="col-md-6 mt-4 mt-md-2 mb-2">
                                <h6 className="form-title">5. Type of craft <span>(select up to 3)</span></h6>
                                <select className="form-select add-form rounded-0 border bg-transparent"
                                    name="new_craft_type_1"
                                    value={props.new_craft_type_1}
                                    onChange={props.updateFormField}>
                                    <option value="">-- Select --</option>
                                    {props.craft_type_list.map((a) =>
                                        <option key={a.craft_type}
                                            value={a.craft_type}
                                        >{a.form_display}
                                        </option>
                                    )}
                                </select>
                                <select className="form-select add-form rounded-0 border mt-2 bg-transparent"
                                    name="new_craft_type_2"
                                    value={props.new_craft_type_2}
                                    onChange={props.updateFormField}>
                                    <option value="">-- Select --</option>
                                    {props.craft_type_list.map((a) =>
                                        <option key={a.craft_type}
                                            value={a.craft_type}
                                        >{a.form_display}
                                        </option>
                                    )}
                                </select>
                                <select className="form-select add-form rounded-0 border mt-2 bg-transparent"
                                    name="new_craft_type_3"
                                    value={props.new_craft_type_3}
                                    onChange={props.updateFormField}>
                                    <option value="">-- Select --</option>
                                    {props.craft_type_list.map((a) =>
                                        <option key={a.craft_type}
                                            value={a.craft_type}
                                        >{a.form_display}
                                        </option>
                                    )}
                                </select>
                                {props.error_message.craft_type_error ?
                                    <p className="error-text my-1">{props.error_message.craft_type_error}</p>
                                    : null}
                            </div>
                        </div>

                        {/* Time Required & Difficulty */}
                        <div className="mt-3 row row-cols-1 row-cols-md-2 g-3">
                            <div className="col-md-6">
                                <h6 className="form-title">6. Time Required <span>(in mins)</span></h6>
                                <input className="form-control add-form my-2 rounded-0 bg-transparent"
                                    name="new_time_required"
                                    value={props.new_time_required}
                                    onChange={props.updateFormField}
                                    type="text"
                                    placeholder="e.g. 60"
                                    autoComplete="off"
                                />
                                {props.error_message.time_error ?
                                    <p className="error-text my-1">{props.error_message.time_error}</p>
                                    : null}
                            </div>

                            <div className="btn-group d-flex flex-column col-md-6 mt-4 mt-md-3" role="group">
                                <h6 className="form-title m-0">7. Difficulty Level</h6>
                                <div className="d-flex my-2">
                                    <input type="radio" className="btn-check"
                                        name="new_difficulty"
                                        value="easy"
                                        checked={props.new_difficulty === "easy"}
                                        onChange={props.updateFormField}
                                        id="btnradio1"
                                        autoComplete="off" />
                                    <label className="add-form btn btn-outline-dark rounded-0 border border-1 me-2" htmlFor="btnradio1">Easy</label>

                                    <input type="radio" className="btn-check"
                                        name="new_difficulty"
                                        value="intermediate"
                                        checked={props.new_difficulty === "intermediate"}
                                        onChange={props.updateFormField}
                                        id="btnradio2"
                                        autoComplete="off" />
                                    <label className="add-form btn btn-outline-dark rounded-0 border border-1 me-2" htmlFor="btnradio2">Intermediate</label>

                                    <input type="radio" className="btn-check"
                                        name="new_difficulty"
                                        value="challenging"
                                        checked={props.new_difficulty === "challenging"}
                                        onChange={props.updateFormField}
                                        id="btnradio3"
                                        autoComplete="off" />
                                    <label className="add-form btn btn-outline-dark rounded-0 border border-1" htmlFor="btnradio3">Challenging</label>
                                </div>
                                {props.error_message.difficulty_error ?
                                    <p className="error-text my-1">{props.error_message.difficulty_error}</p>
                                    : null}
                            </div>
                        </div>

                        {/* Tools & Materials */}
                        <div className="mt-4">
                            <h6 className="form-title">8. Tools & Materials <span>(Click on + to insert)</span></h6>
                            
                            <div className="supplies-input d-flex my-2">
                                <input type="text" className="form-control add-form rounded-0 bg-transparent"
                                    name="new_supplies_added"
                                    value={props.new_supplies_added}
                                    onChange={props.updateFormField}
                                    placeholder="e.g. PVA wood glue"
                                    autoComplete="off"
                                />
                                <button type="button"
                                    className="btn pt-2 px-2"
                                    onClick={() => { props.addNewSupplies() }}
                                ><i className="fa-solid fa-circle-plus fs-4"></i></button>
                            </div>
                            {props.error_message.supplies_error ?
                            <p className="error-text my-1">{props.error_message.supplies_error}</p>
                            : null}
                         
                                {props.new_supplies.map((s, index) => (
                                    <div className="supplies-input d-flex my-2" key={index}>
                                        <input type="text"
                                            className="form-control add-form mt-2 rounded-0 bg-transparent"
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

                        {/* Instructions */}
                        <div className="mt-4">
                            <h6 className="form-title">9. Describe How To Make Your Decor <span>(Click on + to insert each step)</span></h6>

                            <div className="supplies-input d-flex">
                                <textarea className="form-control add-form mb-2 rounded-0 bg-transparent"
                                    name="new_instructions_text_added"
                                    value={props.new_instructions_text_added}
                                    onChange={props.updateFormField}
                                    placeholder="Write your step here"
                                />
                                <button type="button"
                                    className="btn pt-2 px-2"
                                    onClick={() => { props.addNewInstruction() }}
                                ><i className="fa-solid fa-circle-plus fs-4"></i></button>
                            </div>
                            {props.error_message.instructions_error ?
                            <p className="error-text my-1">{props.error_message.instructions_error}</p>
                            : null}
                            
                            {props.new_instructions_text.map((i, index) => (
                                <div className="supplies-input d-flex" key={index}>
                                    <textarea className="form-control add-form my-2 rounded-0 bg-transparent"
                                        value={props.new_instructions_text[index]}
                                        onChange={(e) => {
                                            props.updateInstructions(index, e.target.value)
                                        }}
                                    />
                                    <button type="button"
                                            className="btn pt-2 px-2"
                                            onClick={ () => {props.deleteInstruction(index)} }
                                    ><i className="fa-solid fa-circle-minus fs-4"></i></button>
                                </div>
                            ))}
                        </div>

                        {/* Link */}
                        <div className="mt-4">
                            <h6 className="form-title">10. Link <span>(Optional)</span></h6>
                            <input className="form-control add-form my-2 mb-5 rounded-0 bg-transparent"
                                name="new_instructions_link"
                                type="text"
                                value={props.new_instructions_link}
                                onChange={props.updateFormField}
                                placeholder="Paste URL to external site"
                                autoComplete="off"
                            />
                        </div>
                        
                        <hr/>
                        {/* Personal Info */}
                        <div className="my-5">
                            <h6 className="form-title">Your Name</h6>
                            <input className="form-control add-form my-2 rounded-0 bg-transparent"
                                name="new_user_name"
                                type="text"
                                value={props.new_user_name}
                                onChange={props.updateFormField}
                                placeholder="Let us know who you are!"
                                autoComplete="off"
                            />
                            {props.error_message.name_error ?
                            <p className="error-text my-1">{props.error_message.name_error}</p>
                            : null}
                        </div>

                        {props.error_message.form_error ?
                        <p className="mt-4 mt-md-5 p-3 error-text submit">{props.error_message.form_error}</p>
                        : null}
                        
                        {/* Submit / Cancel*/}
                        <div className="d-grid gap-2 d-md-flex justify-content-md-end mt-4 mt-md-5 mb-5">
                            <button type="button" className="col-md-4 col-lg-3 me-md-2 btn btn-dark btn-pri text rounded-0"
                                onClick={props.updateProject}
                            >UPDATE
                            </button>
                            
                            <button type="button"
                                className="col-md-4 col-lg-3 btn btn-outline-dark btn-sec text rounded-0"
                                onClick={props.cancelEdit}
                            >CANCEL
                            </button>
                        </div>
                        
                    </form>
                </div>
            </div>
            
        </React.Fragment>
    )
}