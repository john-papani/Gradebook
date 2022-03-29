import React, {useEffect, useState} from "react"
import axios from "axios"
import '../App.css'

const Home = () => {
    const [grades, setGrades] = useState([])
    const [average, setAverage] = useState('')


    useEffect(() => {
        async function get() {
            let data = await axios.get(`http://localhost:8001/all`)
            console.log(data.data)
            setGrades(data.data)
        }

        get()
    }, [])

    useEffect(() => {
        async function get1() {
            let data1 = await axios.get(`http://localhost:8001/average`)
            //  console.log(data1.data.avg)
            setAverage(data1.data.avg)
        }

        get1()

    }, [])

    const deleteGrade = (course) => {

        axios.delete(`http://localhost:8001/delete/${course}`)
            .catch((err) => console.log(err))
        console.log(`${course}`)
        alert(`successful delete: ${course}`)
        window.location.reload(false);
    }

    return (
        <div className="Home">
            <h1>All Grades</h1>

            <h2 className="average">Average: {average}</h2>
            <div className="grades">
                <table>
                    <thead>
                    <th>Course</th>
                    <th>Grade</th>
                    <th>Semester</th>
                    </thead>
                    <tbody>
                    {grades.map((grade) => (
                        <tr>
                            <td>{grade.course}</td>
                            <td> <b>{grade.grade}</b></td>
                            <td>{grade.semester}</td>
                            <td>
                                <button className="delete-button" onClick={(e) => deleteGrade(grade.course, e)}
                                        type="submit">
                                    delete
                                </button>
                            </td>
                        </tr>
                    ))}
                    </tbody>

                </table>
            </div>
        </div>
    )
}


export default Home


