import React from "react"
import axios from "axios"

import "../App.css"


const Grade = ({id, course, semester, grade}) => {

    const deleteGrade = () => {
        axios.delete(`http://localhost:8001/delete/${id}`)
            .catch((err) => console.log(err))
        alert(`successful delete: ${course}`)
        window.location.reload(false);
    }


    return (
        <div className="grade-all">
            <td>{course}</td>
            <td>{grade}</td>
            <td>{semester}</td>
            <td>
                <button className="delete-button" onClick={deleteGrade} type="submit">
                    delete
                </button>
            </td>
        </div>

    )
}

export default Grade

