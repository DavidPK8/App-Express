const express = require('express') 

// Crear una instancia
const app = express()

// Iniciar el servidor en el puerto 3000
app.listen(3000)
console.log("Web Server Ejecutandose en el puerto 3000")

app.get('/inicio',(req,res)=>{
    res.send("Pagina de Inicio - Grupo 1")
})

app.get('/integrantes',(req,res)=>{
    res.json([
        {
            "numero": "1",
            "nombre":"Eduardo",
            "apellido":"Almachi",
        },
        {
            "numero": "2",
            "nombre":"Bryan",
            "apellido":"Delgado",
        },
        {
            "numero": "3",
            "nombre":"Brittany",
            "apellido":"Espinel",
        },
        {
            "numero": "4",
            "nombre":"Mateo",
            "apellido":"Miño",
        },
        {
            "numero": "5",
            "nombre":"Melany",
            "apellido":"Sangucho",
        },
        {
            "numero": "6",
            "nombre":"David",
            "apellido":"Vallejo",
        },
        {
            "numero": "7",
            "nombre":"Erick",
            "apellido":"Villaroel",
        },
        {
            "numero": "8",
            "nombre":"Danny",
            "apellido":"Yanacallo",
        }
    ])
})

app.get('/productos',(req,res)=>{
    res.send(`
            <h1>Catálogo de productos</h1>
                <p>Bienvenidos</p>
                <ul>
                <li>Mouse</li>
                <li>Monitor</li>
                <li>Teclado</li>
                <li>MousepPad</li>
                </ul>
    `)
})