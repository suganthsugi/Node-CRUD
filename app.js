const express = require("express")
const mongoose = require("mongoose")

const app = express()

const dburl = "mongodb://localhost/TodoDBex"
mongoose.connect(dburl)
const conn = mongoose.connection
conn.on('open', () => {
    console.log("Connected with database");
})

app.use(express.json())
const todoRoutes = require("../Node-CRUD-Todo/Routes/todoRoute")
app.use('/', todoRoutes)

const port = 4444
app.listen(port, () => {
    console.log("Listening at port", port);
})