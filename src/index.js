const express = require("express")
const app = express();
const mongoose = require("mongoose")
const port = 8080;

const username = "davidPK8"
const password = "davidPK8"

const conn_str = `mongodb+srv://${username}:${(password)}@clusterweb.klfzh9s.mongodb.net/?retryWrites=true&w=majority`;

mongoose.connect(conn_str)
  .then(() => {
    console.log("MongoDB está conectado exitosamente");
    app.listen(port, () => {
      console.log("Iniciando el servidor en el puerto", port);
    });
  })
  .catch((err) => {
    console.error("Error en la conexión a MongoDB:", err);
  });