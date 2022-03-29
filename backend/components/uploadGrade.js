const express = require("express")
const mysql = require("mysql")

let app = express()

function uploadGrades(req, res) {

    let pool = mysql.createPool({
        connectionLimit: 10,
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'gradebook'
    });

    let course = req.body.course
    let grade = req.body.grade
    let semester = req.body.semester

    pool.getConnection((err, connection) => {
        if (err) throw err
        console.log('connected as id ' + connection.threadId)
        let sql1 = 'INSERT INTO gradebook (course,grade,semester) VALUES (?,?,?)'
        connection.query(sql1, [course, grade, semester], (err, rows) => {
            connection.release()

            if (!err) {
                console.log(`upload ok (backend)_${course}`)
            } else {
                console.log(err)
            }

        })
    })
}

app.post('/upload', uploadGrades);
module.exports = app;