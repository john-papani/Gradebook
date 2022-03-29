import React, {useState} from "react"
import axios from "axios"

const Upload = () => {
    const [rcourse, setRcourse] = useState("")
    const [rgrade, setRgrade] = useState("");
    const [rsemester, setRsemester] = useState("")


    const sumbitGrade = () => {
        if (rcourse !== "" && rgrade !== "") {
            if (rgrade < 0 || rgrade > 10) {
                alert("lathos bathmos(prepei 0-10)")
            } else if (rsemester<=0 ||rsemester>=15) {
                alert("lathos semester(prepei max 14)")
            }
            else{
                axios
                    .post("http://localhost:8001/upload", {
                        course: rcourse,
                        grade: rgrade,
                        semester: rsemester,
                    })
                    .catch((err) => console.log(err.data))
                alert(`succesful insert ${rcourse}`);
                console.log("Mhpke")
                window.location.reload(false);
            }
        } else if (rcourse === "" && rgrade !== "") {
            alert("leipei to mathima")
        } else if (rcourse !== "" && rgrade === "") {
            alert("leipei bathmos")
        }
    };

    return (
        <div className="upload">
            <h1>Upload link</h1>
            <div className="upload-form">
                <label>Course Name:</label>
                <input
                    type="text"
                    name="rcourse"
                    required="required"
                    value={rcourse}
                    onChange={(e) => {
                        setRcourse(e.target.value);
                    }}
                />

                <label>Grade:</label>
                <input
                    type="text"
                    name="rgrade"
                    value={rgrade}
                    required="required"
                    onChange={(e) => {
                        setRgrade(e.target.value);
                    }}
                />
                <label>Semester:</label>
                <input
                    type="text"
                    name="rsemester"
                    value={rsemester}
                    required="required"
                    onChange={(e) => {
                        setRsemester(e.target.value);
                    }}
                />
                <button className="upload-button" onClick={sumbitGrade} type="submit">
                    Upload
                </button>
            </div>
        </div>
    )
}
export default Upload