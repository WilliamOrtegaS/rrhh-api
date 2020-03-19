'use strict';

const mongoose = require('mongoose');

const EmpleadoSchema = new mongoose.Schema({
    legajo: Number,
    name: String,
    last_name: String,
    dni: Number
});

EmpleadoSchema.swaggerName = 'Empleado';

module.exports = mongoose.model('Empleado', EmpleadoSchema);