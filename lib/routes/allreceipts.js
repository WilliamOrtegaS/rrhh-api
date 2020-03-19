'use strict';

const recipeModel = require('../models/groupreceipt');

function getAllReceipt(req, res){
    const legajo = req.swagger.params.legajo.value;
    console.log("LEGAJO :::   ",legajo);
    recipeModel.findOne({"legajo": legajo})
    .populate('receipt')
    .then((response) => {
        res.json({message: response});
    })
}

module.exports = {
    getAllReceipt
}