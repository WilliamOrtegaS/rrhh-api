'use strict';

const mongoose = require('mongoose');

const RecibosSchema = new mongoose.Schema({
    legajo: Number,
    image: String,
    date: String,//{ type: Date,default: Date.now()},
    firm: Boolean
});

RecibosSchema.swaggerName = 'Recibos';

module.exports = mongoose.model('Recibos', RecibosSchema);