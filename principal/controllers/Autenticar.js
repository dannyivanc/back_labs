const mongoose = require('mongoose')
const body = require('body-parser')
const Docente = require('../models/Docente')
const service = require('../services')

async function registrar_docente(req,res){
    const docente = new Docente({
        ru = req.body.rudoc,
        co = req.body.ci,
        rol = req.body.rol
    })
    docente.save((err)=>{
        if (err) res.status(500).send({message:`error al guardar: ${err}`})
       return res.status(200).send({token: service.createToken(docente)})
    })
}

function signIp(req,res){

}



  module.exports = {
    Registrar_docente,
      signUp
  };