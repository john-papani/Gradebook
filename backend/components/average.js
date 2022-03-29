const express = require("express")
const mysql = require("mysql")

let app = express()

function getAverage(req, res) {

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
        let qsum =' SELECT SUM(grade) as sum FROM gradebook'
        connection.query(qall, (err1, rows1) => {
            connection.query(qsum, (err2, rows2) => {
                connection.release()
                if (!err) {
                    let len = rows1.length
                    let avg = rows2[0].sum/len
                    avg = avg.toFixed(2);// gia na emfanizei meso oro me 2 dekadika
                    res.json({
                        'avg': avg
                    } )
                } else {
                    console.log(err)
                }

            })
        })
    })
}

app.get('/average', getAverage);
module.exports = app;
