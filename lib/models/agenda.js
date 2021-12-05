'use strict';

const mongoose = require('mongoose');

const AgendaSchema = new mongoose.Schema({
    namesucursal: String,
    sucursal: String,
    desdehora: String,
    hastahora: String,
    selectDias: String,
    intervalo: Number,
    cupo: String,
    cantAsignados: Number
});

AgendaSchema.swaggerName = 'Agenda';

module.exports = mongoose.model('Agenda', AgendaSchema);
