import React from 'react'

export default function Search (props) {
    return (
        <React.Fragment>
            <button type="button"
                    className="btn btn-primary"
                    onClick={ ()=> {
                        props.setActive("browse")
                    } }>Home</button>
            <h1>Search Results</h1>
        </React.Fragment>
    )
}