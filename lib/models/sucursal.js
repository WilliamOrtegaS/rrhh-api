'use sttric'
const mongoose = require('mongoose');

const SucursalSchema = new mongoose.Schema({
    name: String,
    procedure: String
});
SucursalSchema.swaggerName = 'Sucursal';
module.exports = mongoose.model('Sucursal', SucursalSchema);