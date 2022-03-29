const express = require("express")
const mysql = require("mysql")

let app = express()

function getOnlyGrades(req, res) {

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
        let qall = 'SELECT grade from gradebook'
        connection.query(qall, (err1, rows1) => {
                connection.release()
               // console.log(rows1)
                if (!err) {
                   res.send(rows1)
                } else {
                    console.log(err)
                }

            })
        })
}

app.get('/allgrades', getOnlyGrades);
module.exports = app;
