'use strict';

const mongoose = require('mongoose');

const RecibosSchema = new mongoose.Schema({
    legajo: Number,
    image: String,
    date: String,
    firm: Boolean
});

RecibosSchema.swaggerName = 'Recibos';

module.exports = mongoose.model('Recibos', RecibosSchema);