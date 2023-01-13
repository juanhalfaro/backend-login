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
const url = `mongodb+srv://juanh:juanh@cluster0clashroyal:clashroyal@cluster0.xocs9s6.mongodb.net/?retryWrites=true&w=majority`
mongoose.connect(url,{
    useNewUrlparser: true,
    useUnifiedTopology: true
}).then(() => console.log('Conectado a la BD'))
        .catch((error) => console.log('error conexion:' +error))

//Importar las rutas
const authRoutes = require('./routes/auth')

//Ruta para el Middleware
app.use('/api/user', authRoutes)

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