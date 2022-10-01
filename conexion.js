const mongoose = require('mongoose');

const DB = 'mongodb://localhost:27017/fusiones';

mongoose.connect(DB, {useNewUrlParser: true, useUnifiedTopology: true});

const objetobd = mongoose.connection;

objetobd.on('connected', ()=>{console.log('DB connected correctly')});
objetobd.on('error', ()=>{console.log('connection error')});

module.exports = mongoose;