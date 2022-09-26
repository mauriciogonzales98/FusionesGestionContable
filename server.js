const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.end('Welcome to nodebackend');
});

//Config server

app.listen(5000, function(){
    console.log('Server running correctly');
})