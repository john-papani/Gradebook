import React from "react";
import "../App.css"
import { Link } from "react-router-dom";

function Nav() {
    return (
        <nav>
            <h2> GradeBook </h2>
            <ul className="nav-links">
                <Link className="link" to="/home">
                    <li> Home </li>
                </Link>
                <Link className="link" to="/upload">
                    <li> Upload </li>
                </Link>
                <Link className="link" to="/about">
                    <li> About </li>
                </Link>
            </ul>
        </nav>
    );
}
export default Nav;