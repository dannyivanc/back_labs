const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const service =require('../services/index');
const Docente = require('../model/Docente');
const Estudiante = require('../model/Estudiante');
const Guia = require('../model/guia');
const materia = require('../model/materia');
const Tarea = require('../model/tarea');



//creando token
router.post('/', (req,res ) =>{
  const docente = new Docente()
  docente.rudoc = req.body.rudoc,
  docente.ci = req.body.ci

  docente.save((err) =>{
    if(err) res.send(500).send({message: `error al guardad ${err}`})
    return res.status(200).send({token: service.createToken(docente)})
  })
})






router.get('/hola/:name',(req,res)=>{
  res.send({message : `hola: ${req.params.name}`});
  //res.send({message : 'hola: ' + req.params.name})
});

router.post('/b/a_guias',(req,res) =>{
 
  console.log(req.body);
  const guia = new Guia()
  guia.materia = req.body.materia
  guia.calificacion = req.body.calificacion
  guia.estado = req.body.estado 

  guia.save((err,guiaStored) =>{
    if (err) res.status(500).send({message:`error al guardar: ${err}`})
    res.status(200).send({guia : guiaStored})
  })

  console.log(guia)
})


router.get('/b/mostrar_guias',(req,res) =>{
  Guia.find({},(err,guias) =>{
    console.log(guias)
    if (err) res.status(500).send({message:`error al guardar: ${err}`})
    if(!guias) return res.status(404).send({message: `no existen productos ` })
    res.send(200, {guias})
  })
})


router.get('/b/mostrar_guias2',(req,res) =>{
  Guia.find({
    materia : 4

  },(err,guias) =>{
    console.log(guias)
    if (err) res.status(500).send({message:`error al guardar: ${err}`})
    if(!guias) return res.status(404).send({message: `no existen productos ` })
    res.send(200, {guias})
  })
})








module.exports = router;


