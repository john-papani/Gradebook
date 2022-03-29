import React from "react";
import "../App.css"

function About() {
    return (
        <div className="about">
            <div className="about-all">
                <h1> About Gradebook App </h1>
                <h2>Thes na deis ton meso oro soy? Tote eisai sto sosto meros</h2>
                <p>
                    This is a simple app where you can calculate the <i>Αverage</i> for your university courses
                </p>
                <ol>
                    <b> You can:</b>
                    <ul>Delete a Course/Grade </ul>
                    <ul>Upload a new Grade</ul>
                </ol>
            </div>
            <div className="about-me">
                <h2>Check my github repos! :) <br />
                    <a href="https://github.com/john-papani" >Here</a>
                </h2>
            </div>
        </div>
    );
}

export default About;