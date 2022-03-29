const express = require("express")
const mysql = require("mysql")

let app = express()

function numcourses(req, res) {

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
        let sql1=`SELECT COUNT(id) as num FROM gradebook `
        connection.query(sql1 ,(err, rows) => {
            connection.release()

            if (!err) {
                res.json(rows[0].num)
            // console.log(rows[0].num)
            } else {
                console.log(err)
            }

        })
    })
}

app.get('/number', numcourses);
module.exports = app;