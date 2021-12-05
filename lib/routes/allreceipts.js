'use strict';

const recipeModel = require('../models/groupreceipt');

function getAllReceipt(req, res){
    const legajo = req.swagger.params.legajo.value;
    console.log("LEGAJO :::   ",legajo);
    recipeModel.findOne({"legajo": legajo})
    .populate('receipt')
    .then((response) => {
        if(response)
            res.json({
                message: response,
                cant: response['receipt'].length
            });
        else
            res.json({message: `El legajo ingresado es incorrecto`})
    })
}

module.exports = {
    getAllReceipt
}