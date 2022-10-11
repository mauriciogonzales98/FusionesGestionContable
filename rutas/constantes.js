const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');
const eschema = mongoose.Schema;

const eschemaconst = new eschema({
    nombre: String,
    precio: Number,
})

const ModeloConst = mongoose.model('constantes', eschemaconst);
module.exports = router

router.post('/saveconst', (req, res)=>{

    ModeloConst.findOneAndUpdate({nombre: "Costo Fijo"}, {
        nombre: req.body.nombre,
        precio: req.body.precio
    })
    .catch(err => {
        console.log(err.message)
    })
    // .then(err => {console.log(err.response.data)})
    
})

//Obtener todos los platos
router.post('/getconst', (req, res)=>{
    ModeloConst.find({nombre: "Costo Fijo"}, function(docs, err){
        if(!err){
            res.send(docs);
        }
        else{
            res.send(err);
        }
    })
})