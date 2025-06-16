const Frutas = require('../models/frutasmodels');

exports.obtenerFrutas = async(req, res) => {
    const frutas = await Frutas.find();
    res.json(frutas);
};

exports.obtenerFrutaPorId = async(req, res) => {
    const frutas = await Frutas.findById(req.params.id);
    res.json(frutas);
};

exports.crearFruta = async(req, res) => {
    const nuevaFruta = new Frutas(req.body);
    await nuevaFruta.save();
    res.json({ mensaje: 'Fruta creada exitosamente', frutas: nuevaFruta });
};

exports.actualizarFruta = async(req, res) => {
    await Fruta.findByIdAndUpdate(req.params.id, req.body);
    res.json({ mensaje: 'Fruta actualizada correctamente' });
};

exports.eliminarFruta = async(req, res) => {
    await Fruta.findByIdAndDelete(req.params.id);
    res.json({ mensaje: 'Fruta eliminada correctamente' });
};