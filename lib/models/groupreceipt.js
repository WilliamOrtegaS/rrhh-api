'use strict'

const mongoose = require('mongoose');
const Groupreceipt = new mongoose.Schema({
    legajo: Number,
    receipt:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Recibos'
    }]
});
Groupreceipt.swaggerName = 'Groupreceipt';
module.exports = mongoose.model('Groupreceipt',Groupreceipt);
