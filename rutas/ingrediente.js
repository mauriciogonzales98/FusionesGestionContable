const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');
const eschema = mongoose.Schema;

const eschemaingrediente = new eschema({
    nombre: String,
    peso: String,
    precio: String,
    id: String
})

const ModeloIngrediente = mongoose.model('ingredientes', eschemaingrediente);
module.exports = router

//Agregar un ingrediente
router.post('/addingrediente', (req, res)=>{
    const nuevoingrediente = new ModeloIngrediente({
        nombre: req.body.nombre,
        peso: req.body.peso,
        precio: req.body.precio,
        id: req.body.id
    })
    nuevoingrediente.save(function(err){
        if(!err){
            res.send('Plato agregado correctamente');
        }
        else{
            res.send(err);
        }
    })
})

//Obtener todos los platos
router.get('/obteneringredientes', (req, res)=>{
    ModeloIngrediente.find({}, function(docs, err){
        if(!err){
            res.send(docs);
        }
        else{
            res.send(err);
        }
    })
})