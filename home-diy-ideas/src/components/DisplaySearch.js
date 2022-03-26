import React from 'react'

export default function Search (props) {
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
            
            <h1>Search Results</h1>
        </React.Fragment>
    )
}