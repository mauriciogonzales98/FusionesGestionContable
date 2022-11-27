const express = require('express');
const app = express();

//Import DB
const archivoDB = require('./conexion');

//Import routes and model
const rutasplatos = require('./rutas/plato');
const rutasingredientes = require('./rutas/ingrediente');
const rutascostofijo = require('./rutas/costosfijos');
const rutasconstantes = require('./rutas/constantes');

//Import body parser
const bodyParser = require('body-parser');
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:'true'}))

app.use('/api/platos', rutasplatos);
app.use('/api/ingredientes', rutasingredientes);
app.use('/api/costofijo', rutascostofijo);
app.use('/api/constantes', rutasconstantes.router);

app.get('/', (req, res) => {
    res.send('Welcome to nodebackend');
});

//Config server

app.listen(5000, function(){
    console.log('Server running correctly');
})