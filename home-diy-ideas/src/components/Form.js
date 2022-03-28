import React from 'react'

export default function Form (props) {
    return (
        <React.Fragment>
            <h3>Share your Home Decorating Idea</h3>
            
            {/* Personal Info */}
            <div className="border-bottom mt-4">
                <h5>1. Personal Info</h5>
            </div>
            <div>
                <input className="form-control mt-4"
                        name=""
                        type="text"
                        placeholder="Your Name"
                />
            </div>

            {/* Details */}
            <div className="border-bottom mt-4">
                <h5>2. Details</h5>
            </div>

            {/* Details - Title & Image */}
            <div className="d-flex mt-4">
                <div>
                    <h6>Title of artwork</h6>
                    <input className="form-control mt-2"
                        name=""
                        type="text"
                        placeholder="e.g. wood mirror"
                    />
                </div>

                <div>
                    <h6>Image of artwork</h6>
                    <input className="form-control mt-2"
                        name=""
                        type="text"
                        placeholder="Paste URL of image"
                    />
                </div>
            </div>

            {/* Details - Description */}
            <div className="mt-4">
                <h6>Short Description (125 character max)</h6>
                <textarea class="form-control mt-2" id="exampleFormControlTextarea1"
                    name=""
                    placeholder="e.g. Simple DIY mirror framed in natural wood"
                />
            </div>

            {/* Category & Craft Filters */}
            <div className="d-flex mt-4">
                <div>
                    <h6>Category (select up to 3)</h6>
                    <select className="form-select"
                        name=""
                        >
                        <option>Select Category 1</option>
                    </select>
                    <select className="form-select"
                        name=""
                        >
                        <option>Select Category 2</option>
                    </select>
                    <select className="form-select"
                        name=""
                        >
                        <option>Select Category 3</option>
                    </select>
                </div>

                <div>
                    <h6>Type of craft (select up to 3)</h6>
                    <select className="form-select"
                        name=""
                        >
                        <option>Select Type 1</option>
                    </select>
                    <select className="form-select"
                        name=""
                        >
                        <option>Select Type 2</option>
                    </select>
                    <select className="form-select"
                        name=""
                        >
                        <option>Select Type 3</option>
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

        </React.Fragment>
    )
}