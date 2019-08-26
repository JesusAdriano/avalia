const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const routes = require('./routes')

//iniciar o express
const app = express()

//conect do mongo
mongoose.connect("mongodb://localhost:27017/test", {useNewUrlParser: true})

//iniciando o cors
app.use(cors())

//só recebe tipo json como parametro
app.use(express.json())

//Routes
app.use(routes)

app.listen(5000)