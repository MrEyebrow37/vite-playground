const { application } = require('express')
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())

app.post("/api/blob",(req,res) => {
    res.sendFile(`${__dirname}/csvs/amazon-us-sales.csv`)
})

app.listen(3000)