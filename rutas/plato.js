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

const ingredienteSchema = new eschema({
    
        ing: String, 
        peso: Number,

})

const eschemaplato = new eschema({
    nombre: String,
    ingredientes: [ingredienteSchema],
    precio: Number,
    idplato: String,
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
        ingredientes: req.body.ingredientes,
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