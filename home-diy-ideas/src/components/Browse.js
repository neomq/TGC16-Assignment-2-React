import React from 'react'

export default function Browse (props) {
    return (
        <React.Fragment>
            <div className="d-flex col-8">
                <input className="form-control" type="text" placeholder="Default input" aria-label="default input example"></input>
                <button type="button"
                        className="btn btn-primary"
                        onClick={ ()=> {
                            props.setActive("search")
                        } }>Search</button>
            </div>
            <h1>Browse Latest Ideas and Inspirations</h1>
        </React.Fragment>
    )
}