const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")

const app = express()
const port = 8001

app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.json())

app.use(cors())
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname));
});

app.listen(port, () => console.log(`Listen on port ${port}`))
let gradesAll = require('./components/getgrades')
let gradesonly = require('./components/getgradesonly')
let average = require('./components/average')
let uploadgrade = require('./components/uploadGrade')
let deletegrade = require('./components/deleteGrade')
let numcourses = require('./components/numCourses')

app.use("/", gradesAll)
app.use("/", gradesonly)
app.use('/', average)
app.use("/", uploadgrade)
app.use('/', deletegrade)
app.use("/",numcourses)