const Docente = require('../models/Docente')
const express = require('express')
const app = express();
//const localStorage = require('node-localstorage')
const flash = require('connect-flash')
app.use(flash())

var ru_docente
var rudocente123

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
    ru_docente = logRudoc// para mandar el ru a otra vista

     Docente.find({
         $and:[
            {rudoc: logRudoc},
          {ci : logCi}  
         ]
     }
         
    
    ,(err,docente) =>{
        console.log(docente.length)
        
        if(docente.length==0){
            console.log(docente)
          res.status(404).send([0])
        }
        if(docente.length==1){
          //  res.status(200).send({message: `no existe el usuario ${logRudoc}`})
          console.log(docente)
          res.status(200).send([1])
          console.log('esta es asd asd asd '+ru_docente)
        
        }
        if(err){
            res.status(500).send({respuesta: `se produjo un error`})
        }
    })
}

async function rudocente(){
res.send(ru_docente)
}

rudocente123=ru_docente

module.exports = {
    a_docente,
    mostrar_docentes,
    logear_docente,
    rudocente,
    rudocente123
}

