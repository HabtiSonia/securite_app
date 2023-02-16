const express= require("express")
const dotenv = require("dotenv")

// instance d'express
const app = express()

// config dotenv
dotenv.config({path: '.env-local'})

// Add port
const port = process.env.NODE_PORT || '3000'

//connect to DB
// connect()

//start server
app.listen(port, err=>{
    err?console.error(err):console.log(`server is running on port ${port}`)
})

//Middlewares
app.use(express.json())


app.use("/api/route", require("./routes/route"))
// app.use("/api/cmp", require("./routes/cmp"))

