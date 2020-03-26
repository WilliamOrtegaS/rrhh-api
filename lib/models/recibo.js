'use strict';

const mongoose = require('mongoose');

const RecibosSchema = new mongoose.Schema({
    legajo: { type: Number, required: [true,'El legajo es obligatorio']},
    image: String,
    date: {type: String, required: [true,'El date es obligatorio']},
    firm: Boolean
});

RecibosSchema.swaggerName = 'Recibos';

module.exports = mongoose.model('Recibos', RecibosSchema);