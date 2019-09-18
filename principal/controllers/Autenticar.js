const mongoose = require('mongoose')
const body = require('body-parser')
const Docente = require('../models/Docente')
const service = require('../services')


//signup
async function registrar_docente(req,res){
    let docente = new Docente({
      rudoc : req.body.rudoc,
      ci : req.body.ci,
      rol : req.body.rol
    })
    docente.save((err)=>{
        if (err) res.status(500).send({message:`error al guardar: ${err}`})
       return res.status(200).send({token: service.createToken(docente)})
    })
}
 
//singout
function logear_docente(req,res){
  Docente.find({
    rudoc: req.body.email
  }),(err,docente) =>{
    if (err) return res.status(500).send({message:err})
    if(!docente) return res.status(404).send({message: 'no existe usuario'})

    res.docente = docente
    res.status(200).send({
      message: 'te has logeado',
      token: service.createToken(docente)

    })
  }


}



  module.exports = {
    registrar_docente,
    logear_docente
  };