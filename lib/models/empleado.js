'use strict';

const mongoose = require('mongoose');

const EmpleadoSchema = new mongoose.Schema({
    legajo: { type: Number, required: [true,'El legajo es obligatorio']},
    name: String,
    last_name: String,
    dni: Number,
    status:String
});

EmpleadoSchema.swaggerName = 'Empleado';

module.exports = mongoose.model('Empleado', EmpleadoSchema);