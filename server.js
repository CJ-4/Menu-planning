import * as mongoose from 'mongoose';
import bodyParser from "body-parser";const express = require('express');
const app = express ();

app.listen(4200, function() {
    console.log('listening on 4200');
})

app.get('/', function (req, res){
    res.send('Hello World');
})