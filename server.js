const express = require('express');
const app = express();

//Import DB
const archivoDB = require('./conexion');

//Import routes and model
const rutasplatos = require('./rutas/plato');

//Import body parser
const bodyparser = require('body-parser');
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:'true'}))

app.use('/api/plato', rutasplatos);

app.get('/', (req, res) => {
    res.end('Welcome to nodebackend');
});

//Config server

app.listen(5000, function(){
    console.log('Server running correctly');
})