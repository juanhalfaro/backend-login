const express = require('express')
const mongoose = require('mongoose')
const bodyparser = require('body-parser')
require('dotenv').config()

const app = express()

//👻👻

app.use(bodyparser.urlencoded({
    extended: false
}))

app.use(bodyparser.json())

//Conexion a BD


//Importar las rutas


//Ruta para el Middleware
app.get('/', (req, res) =>{
    res.json({
        estado: true,
        mensaje: 'Funciona Bn'
    })
})

//Arrancar el servidor
const PORT = process.env.PORT || 3005
app.listen(PORT, () =>{
    console.log(`Servidor en Ejecucion: ${PORT}`)
})