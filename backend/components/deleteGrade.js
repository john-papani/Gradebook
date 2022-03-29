const express = require("express")
const mysql = require("mysql")

let app = express()

function deletegrade(req, res) {

    let pool = mysql.createPool({
        connectionLimit: 10,
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'gradebook'
    });
    let course1 = req.params.course
    pool.getConnection((err, connection) => {
        if (err) throw err
        console.log('connected as id ' + connection.threadId)
        let sql = `DELETE FROM gradebook WHERE course = ?`
        connection.query(sql, [course1], (err, rows) => {
            connection.release()
            if (!err) {
                res.send("delete Ok")
            } else {
                console.log(err)
            }

        })
    })
}

app.delete('/delete/:course', deletegrade);
module.exports = app;