require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const frutasRoutes = require('./routes/frutasroutes');
const app = express();
app.use(express.json());

// Conexión a la base de datos MongoDB
mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        console.log('Conexión a MongoDB exitosa');
    })
    .catch((error) => {
        console.error('Error al conectar a MongoDB:', error);
    });

// Rutas
app.use('/api/v1/frutas', frutasRoutes);
app.listen(3008, () => {
    console.log('Servidor en ejecución en el puerto 3008');
});