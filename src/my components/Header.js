import React from 'react'
import PropTypes from 'prop-types'
import {
    Link
} from "react-router-dom";

export default function header(props) {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">{props.title}</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About</Link>
                        </li>

                    </ul>
                    {props.searchBar ? <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form> : " "}
                </div>
            </div>
        </nav>
    )
}

header.defaultProps = {
    title: "Your Title Heree",  //will be shown if user has not put in any title in the parent element.
    // searchBar: true  // so deafult value to be taken for searchBar is true, if user doesnt give anyhting in parent element
}




//mentiones that the title is a string
header.propTypes = {
    title: PropTypes.string,  //so will give error in console if u pass a number as the title.
    searchBar: PropTypes.bool.isRequired  //.isrequired will make it compulsory for user to put some value fo this variable. either truw or false in this case.
    //if the user doesnt pass anything, then error(check in consooe).

}
