import React from 'react'

export default function Form (props) {
    return (
        <React.Fragment>
            <nav className="navbar navbar-light bg-light p-2">
                <div className="container-fluid p-2">
                    <button className="btn btn-light"
                        onClick={() => { props.setActive("browse") }}>Logo</button>
                    <button className="btn btn-primary"
                        onClick={() => { props.setActive("browse") }}>Cancel</button>
                </div>
            </nav>

            <h1>Share your Home Decorating Idea</h1>
        </React.Fragment>
    )
}