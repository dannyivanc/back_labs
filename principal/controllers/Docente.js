const Docente = require('../models/Docente')

var logRudoc2 
async function a_docente(req,res){
    let docente = new Docente()
    docente.rudoc = req.body.rudoc,
    docente.ci = req.body.ci,
    docente.rol = req.body.rol

    docente.save()
    console.log(docente)
    res.send(docente)

}logRudoc2

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
 

    Docente.findById({logRudoc},(err,login) =>{
        if(!logRudoc){
            res.send({ message: `no existe el usuario ${logRudoc}`})

        }
        if(err) {
             res.send({message:'error'})
        }
        console.log(logRudoc)
        console.log(logCi)
        logRudoc2 = logRudoc
        console.log(logRudoc2)

    })

}
module.exports = {
    a_docente,
    mostrar_docentes,
    logear_docente,
    logRudoc2
}

