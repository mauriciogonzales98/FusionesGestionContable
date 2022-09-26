const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/fusiones');

const objetobd = mongoose.connection;

objetobd.on('connected', ()=>{console.log('DB connected correctly')});
objetobd.on('error', ()=>{console.log('connection error')});

module.exports = mongoose;