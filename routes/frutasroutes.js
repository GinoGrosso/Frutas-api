const express = require('express');
const router = express.Router();
const frutasControllers = require('../controllers/frutascontrollers');

router.get('/', frutasControllers.obtenerFrutas);
router.get('/:id', frutasControllers.obtenerFrutaPorId);
router.post('/', frutasControllers.crearFruta);
router.put('/:id', frutasControllers.actualizarFruta);
router.delete('/:id', frutasControllers.eliminarFruta);

module.exports = router;