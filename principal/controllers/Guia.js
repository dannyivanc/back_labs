const Guia = require('../models/Guia'); 
const docenteCtrl = require('../controllers/Docente')
var qwerty = docenteCtrl.logRudoc2

async function guardar_guias (req,res){
    let guia = new Guia()
    guia.numero = req.body.numero,
    guia.estudiante = req.body.estudiante,
    guia.calificacion = req.body.calificacion,
    guia.materia = req.body.materia,
    guia.estado = req.body.estado 

    guia.save()

    /*
    guia.save((err,guiaStored) =>{
      if (err) res.status(500).send({message:`error al guardar: ${err}`})
      res.status(200).send({guia : guiaStored})
    })
    */
    console.log(guia)
}

async function mostrar_guias (req,res){
    Guia.find({},(err,guias) =>{
        console.log(guias)
        if (err) res.status(500).send({message:`error al guardar: ${err}`})
        if(!guias) return res.status(404).send({message: `no existen productos ` })
        res.send(200, {guias})

        console.log(qwerty)
      })

      
}

 async function mostrar_guias_nombre(req,res){
    Guia.find({
        estudiante : 'juan'
    
      },(err,guias) =>{
        console.log(guias)
        if (err) res.status(500).send({message:`error al guardar: ${err}`})
        if(!guias) return res.status(404).send({message: `no existen productos ` })
        res.send(200, {guias})
      })
}


module.exports={
    guardar_guias,
    mostrar_guias,
    mostrar_guias_nombre
} 