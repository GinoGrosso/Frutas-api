const mongoose = require('mongoose');

const frutaSchema = new mongoose.Schema({
    nombre: String,
    color: String,
    dulce: Boolean
});

module.exports = mongoose.model('Frutas', frutaSchema);