'use strict';
const empleadoModel = require('../models/empleado');
const Groupreceipts = require('../models/groupreceipt');
const receiptModel = require('../models/recibo');

function getStatus(req, res){
    const receiptID = req.swagger.params.receiptID.value;
    Groupreceipts.findOne({'_id':receiptID})
    .then((group)=>{
        return getReceipts(group.receipt,group.legajo)
    })
    .then(()=>{
        return res.json({message: 'Status successfully'});
    })
    .catch((error)=>{
        console.log(error);
        res
        .status(400)
        .json({
          message: error.message,
          error: error
        });
    })

}

function getReceipts(receipt,legajo){
    var name_mes='';
    var count =0;
    for(var i=0;i<receipt.length;i++){
        var id= receipt[i];
        receiptModel.findOne({'_id':id})
        .then((foundreceipt)=>{
            if(foundreceipt.firm==false){
                name_mes+=foundreceipt.date + ' ';
                count+=1;  
            }
            
        })
        
        empleadoModel.findOne({"legajo":legajo})
        .then((response)=>{
            if(count>0){
                response.status ="Tiene que firmar los recibos de "+name_mes;
                response.save();
            }
            else{
                response.status ="Estas al día";
                response.save(); 
            }
        })
    }
    
}

module.exports = {
    getStatus
}