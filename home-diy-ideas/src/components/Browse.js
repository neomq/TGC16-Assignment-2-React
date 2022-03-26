import React from 'react'

export default function Browse (props) {
    return (
        <React.Fragment>
            <nav className="navbar navbar-light bg-light p-2">
                <div className="container-fluid p-2">
                    <button className="btn btn-light"
                        onClick={() => { props.setActive("browse") }}>Logo</button>
                    <button className="btn btn-primary"
                        onClick={() => { props.setActive("form") }}>Share</button>
                </div>
            </nav>

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