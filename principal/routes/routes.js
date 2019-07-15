const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const service = require('../services/index');

//controladores
const GuiaCtrl = require('../controllers/Guia')
const DocenteCtrl = require('../controllers/Docente')

router.post('/b/a_guias',  GuiaCtrl.guardar_guias)
router.get('/b/mostrar_guias',GuiaCtrl.mostrar_guias)
router.get('/b/mostrar_guias2',GuiaCtrl.mostrar_guias_nombre)

router.post('/b/a_docente',DocenteCtrl.reguistrar_docentes)
router.get('/b/mostrar_docentes',DocenteCtrl.mostrar_docentes)

router.get('/login',DocenteCtrl.logear_docente)


//router.get('/privado', )
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


module.exports = router;
