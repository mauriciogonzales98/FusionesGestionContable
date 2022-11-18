const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');
const eschemaconst = new mongoose.Schema({
    nombre: String,
    precio: Number,
    cantidad: Number
})
const ModeloConst = mongoose.model('constantes', eschemaconst);

module.exports = { router, ModeloConst };

// router.post('/savecostofijo', (req, res) => {

//     ModeloConst.findOneAndUpdate({ nombre: "Costo Fijo" }, {
//         nombre: req.body.nombre,
//         precio: req.body.precio
//     })
//         .catch(err => {
//             console.log(err.message)
//         })
// })

router.get('/getcostofijo', (req, res) => {
    ModeloConst.find({ nombre: "Costo Fijo" }, function (docs, err) {
        if (!err) {
            res.send(docs.precio);
        }
        else {
            res.send(err);
        }
    })
})

router.post('/saveviandas', async (req, res) => {
    try {
        const newViandas = await ModeloConst.findOneAndUpdate({ nombre: "Viandas" }, {
            cantidad: req.body.cantidad
        }, { new: true }).exec()

        const costoFijo = await ModeloConst.findOne({ nombre: "Costo Fijo" }).exec()

        const newCostoUnitario = await ModeloConst.findOneAndUpdate({ nombre: "Costo Unitario" }, {
            precio: Math.ceil(costoFijo.precio / newViandas.cantidad)
        }, { new: true }).exec()

        res.status(200).send([costoFijo, newViandas, newCostoUnitario])
    } catch (errUpdateViandas) {
        res.status(500).send(errUpdateViandas)
    }


})

router.get('/getviandas', (req, res) => {
    ModeloConst.find({ nombre: "Viandas" }, function (docs, err) {
        if (!err) {
            res.send(docs.cantidad);
        }
        else {
            res.send(err);
        }
    })
})

// router.post('/savecostounitario', (req, res) => {

//     ModeloConst.findOneAndUpdate({ nombre: "Costo Unitario" }, {
//         nombre: req.body.nombre,
//         precio: req.body.precio
//     })
//         .catch(err => {
//             console.log(err)
//         })
// })

router.get('/getcostounitario', (req, res) => {
    ModeloConst.find({ nombre: "Costo Unitario" }, function (docs, err) {
        if (!err) {
            res.send(docs.precio);
        }
        else {
            res.send(err);
        }
    })
})

router.get('/getallconst', (req, res) => {
    ModeloConst.find({}, function (docs, err) {
        if (!err) {
            res.send(docs)
        }
        else {
            res.send(err);
        }
    })
})