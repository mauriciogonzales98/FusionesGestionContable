const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');
const eschema = mongoose.Schema;

const eschemaconst = new eschema({
    nombre: String,
    precio: Number,
    cantidad: Number
})

const ModeloConst = mongoose.model('constantes', eschemaconst);
module.exports = router;

router.post('/savecostofijo', (req, res)=>{

    ModeloConst.findOneAndUpdate({nombre: "Costo Fijo"}, {
        nombre: req.body.nombre,
        precio: req.body.precio
    })
    .catch(err => {
        console.log(err.message)
    }) 
})

router.get('/getcostofijo', (req, res)=>{
    ModeloConst.find({nombre: "Costo Fijo"}, function(docs, err){
        if(!err){
            res.send(docs.precio);
        }
        else{
            res.send(err);
        }
    })
})

router.post('/saveviandas', (req, res)=>{

    ModeloConst.findOneAndUpdate({nombre: "Viandas"}, {
        nombre: req.body.nombre,
        cantidad: req.body.cantidad
    })
    .catch(err => {
        console.log(err.message)
    })
})

router.get('/getviandas', (req, res)=>{
    ModeloConst.find({nombre: "Viandas"}, function(docs, err){
        if(!err){
            res.send(docs.cantidad);
        }
        else{
            res.send(err);
        }
    })
})

router.post('/savecostounitario', (req, res)=>{

    ModeloConst.findOneAndUpdate({nombre: "Costo Unitario"}, {
        nombre: req.body.nombre,
        precio: req.body.precio
    })
    .catch(err => {
        console.log(err)
    }) 
})

router.get('/getcostounitario', (req, res)=>{
    ModeloConst.find({nombre: "Costo Unitario"}, function(docs, err){
        if(!err){
            res.send(docs.precio);
        }
        else{
            res.send(err);
        }
    })
})

router.get('/getallconst', (req, res)=>{
    ModeloConst.find({}, function(docs, err){
        if(!err){
            res.send(docs)
        }
        else{
            res.send(err);
        }
    })
})