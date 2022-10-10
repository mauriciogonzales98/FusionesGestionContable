const express = require('express');
const app = express();

//Import DB
const archivoDB = require('./conexion');

//Import routes and model
const rutasplatos = require('./rutas/plato');
const rutasingredientes = require('./rutas/ingrediente');
const rutascostofijo = require('./rutas/costosfijos');

//Import body parser
const bodyParser = require('body-parser');
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:'true'}))

app.use('/api/platos', rutasplatos);
app.use('/api/ingredientes', rutasingredientes);
app.use('/api/costofijo', rutascostofijo);

app.get('/', (req, res) => {
    res.end('Welcome to nodebackend');
});

//Config server

app.listen(5000, function(){
    console.log('Server running correctly');
})