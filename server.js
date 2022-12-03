require('dotenv').config()
const { application } = require('express')
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const path = require('path')

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())

app.post("/api/blob",(req,res) => {
    res.sendFile(`${__dirname}/csvs/amazon-us-sales.csv`)
})

app.get(`/api/getPerson`,(req,res) => {
    res.send({person: "Caleb"})
})

if (process.env.environment === `production`) {
    app.use(express.static(path.join(__dirname,`/client/dist`)))

    app.get('/*',(req,res) => {
        res.sendFile(path.join(__dirname,`client`,`dist`,`index.html`))
    })
}

app.listen(process.env.PORT)