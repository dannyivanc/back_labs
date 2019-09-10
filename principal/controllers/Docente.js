const Docente = require('../models/Docente')
const express = require('express')
const app = express();
const flash = require('connect-flash')
app.use(flash())

async function a_docente(req,res){
    let docente = new Docente()
    docente.rudoc = req.body.rudoc,
    docente.ci = req.body.ci,
    docente.rol = req.body.rol

    docente.save()
    console.log(docente)
    res.send(docente)

}

async function mostrar_docentes(req,res){
    Docente.find({},(err,docente) =>{
        if(err) res.send({message: `error`})
        res.send({docente})
        console.log(docente)
    })
  
}

async function logear_docente(req,res){
    var logRudoc = req.body.rudoc
    var logCi = req.body.ci
   // const logCi = req.body.ci
    var wii= logRudoc
    console.log(wii)

     Docente.find({
        rudoc:logRudoc
    },(err,docente) =>{
        if(docente.length==0){
            res.status(404).send([0])
        }
        if(docente.length>0){
          //  res.status(200).send({message: `no existe el usuario ${logRudoc}`})
          res.status(200).send([1])
        }
        if(err){
            res.status(500).send({respuesta: `se produjo un error`})
        }
    })

}

async function edocenteRu(req,res){
    var docenteRu = req.body.rudoc
    res.send(docenteRu)

}
module.exports = {
    a_docente,
    mostrar_docentes,
    logear_docente,
    edocenteRu
}

