const express = require('express');
const router = express.Router();
const Docente = require('../model/Docente');
const Estudiante = require('../model/Estudiante');
const Guia = require('../model/guia');
const materia = require('../model/materia');
const Tarea = require('../model/tarea');


router.get('/qwe',(req,res)=>{
  console.log('asd')
  res.send('asd')
});



router.get('/hola/:name',(req,res)=>{
  res.send({message : `hola: ${req.params.name}`});
  //res.send({message : 'hola: ' + req.params.name})
});

router.post('/b/a_guias',(req,res) =>{
  console.log('POST /add/guias');
  console.log(req.body);
  const guia = new Guia()
  guia.materia = req.body.materia
  guia.calificacion = req.body.calificacion
  guia.estado = req.body.estado 

  guia.save((err,guiaStored) =>{
    if (err) res.status(500).send({message:`error al guardar: ${err}`})
    res.status(200).send({guia : guiaStored})
  })

})


router.get('/b/mostrar_guias',(req,res) =>{
  Guia.find({},(err,guias) =>{
    console.log(guias)
    if (err) res.status(500).send({message:`error al guardar: ${err}`})
    if(!guias) return res.status(404).send({message: `no existen productos ` })
    res.send(200, {guias})
  })
})





module.exports = router;


