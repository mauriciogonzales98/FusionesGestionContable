const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');
const eschema = mongoose.Schema;

/*const eschemaplato = new eschema({
    nombre: String,
    ingrediente: String,
    precio: String,
    idplato: String
})*/

const eschemaplato = new eschema({
    nombre: {type: String},
    ingrediente: {type: String},
    precio: {type: String},
    idplato: {type: String}
})

const ModeloPlato = mongoose.model('platos', eschemaplato);
module.exports = router

/* Ruta test
router.get('/test', (req, res) => {
    res.end('Saludo carga desde ruta test');
})*/

//Agregar un plato
router.post('/agregarplato', (req, res)=>{
    const nuevoplato = new ModeloPlato({
        nombre: req.body.nombre,
        ingrediente: req.body.ingrediente,
        precio: req.body.precio,
        idplato: req.body.idplato
    })
    nuevoplato.save(function(err){
        if(!err){
            res.send('Plato agregado correctamente');
        }
        else{
            res.send(err);
        }
    })
})

//Obtener todos los platos
router.get('/obtenerplatos', (req, res)=>{
    ModeloPlato.find({}, function(docs, err){
        if(!err){
            res.send(docs);
        }
        else{
            res.send(err);
        }
    })
})