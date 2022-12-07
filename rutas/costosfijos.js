
const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');
const eschemacostofijo = new mongoose.Schema({
    nombre: String,
    precio: Number,
    categoria: String,
    id: String
})
const ModeloCostofijo = mongoose.model('costosfijos', eschemacostofijo);

const { ModeloConst } = require('./constantes')

module.exports = router

//Agregar un ingrediente
router.post('/addcostofijo', async (req, res) => {

    const nuevocostofijo = new ModeloCostofijo({
        nombre: req.body.nombre,
        precio: req.body.precio,
        categoria: req.body.categoria,
        id: req.body.id
    })

    try {
        await nuevocostofijo.save();

        const CostosFijos = (await ModeloCostofijo.find({}).exec()).reduce(
            (result, costoFijo) => result + costoFijo.precio,
            0)
        console.log("el total de costofijo es: ", CostosFijos);

        const newCostoFijo = await ModeloConst.findOneAndUpdate({ nombre: "Costo Fijo" }, {
            precio: CostosFijos
        }, { new: true }).exec()

        const viandas = await ModeloConst.findOne({ nombre: "Viandas" }).exec()

        const newCostoUnitario = await ModeloConst.findOneAndUpdate({ nombre: "Costo Unitario" }, {
            precio: Math.ceil(newCostoFijo.precio / viandas.cantidad)
        }, { new: true }).exec()
        console.log(newCostoFijo, viandas, newCostoUnitario)
        res.status(200).send([newCostoFijo, viandas, newCostoUnitario])
    }
    catch (errorSaveCostoFijo) {
        res.status(500).send(errorSaveCostoFijo)
    }
})

//Obtener todos los platos
router.get('/getallcostosfijos', async(req, res)=>{
    try{
        const costosFijos = await ModeloCostofijo.find({}).exec();
        res.send(costosFijos)
    }
    catch(errGetallcostos){
        res.send(errGetallcostos)
    }
})


router.post('/deletecostofijo', async (req, res) => {
    try{
        await ModeloCostofijo.findOneAndDelete({id: req.body.id});
        res.status(200).send();
        console.log("Deleted correctly", req.body.id);
    }
    catch(errDeleteCostofijo){
        res.send(errDeleteCostofijo);
        console.log("No se encuentra el id",errDeleteCostofijo);
    } 
})