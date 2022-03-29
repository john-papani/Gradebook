const express = require("express")
const mysql = require("mysql")

let app = express()

function getGrades(req, res) {

    let pool = mysql.createPool({
        connectionLimit: 10,
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'gradebook'
    });

    pool.getConnection((err, connection) => {
        if (err) throw err
        console.log('connected as id ' + connection.threadId)
        connection.query('SELECT * from gradebook ORDER BY semester ASC', (err, rows) => {
            connection.release()
         //   console.log(rows)
            if (!err) {
                res.send(rows)
            }
            else {
                console.log(err)
            }

        })
    })
}

app.get('/all', getGrades);
module.exports = app;