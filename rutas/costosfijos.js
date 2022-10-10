const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');
const eschema = mongoose.Schema;

const eschemacostofijo = new eschema({
    nombre: String,
    precio: Number,
    categoria: String,
    id: String
})

const ModeloCostofijo = mongoose.model('costofijo', eschemacostofijo);
module.exports = router

//Agregar un ingrediente
router.post('/addcostofijo', (req, res)=>{
    const nuevocostofijo = new ModeloCostofijo({
        nombre: req.body.nombre,
        precio: req.body.precio,
        categoria: req.body.categoria,
        id: req.body.id
    })
    nuevocostofijo.save(function(err){
        if(!err){
            res.send('Costo agregado correctamente');
        }
        else{
            res.send(err);
        }
    })
})

//Obtener todos los platos
router.get('/getcostofijo', (req, res)=>{
    ModeloCostofijo.find({}, function(docs, err){
        if(!err){
            res.send(docs);
        }
        else{
            res.send(err);
        }
    })
})