const Docente = require('../models/Docente')



async function a_docente(req,res){
    const docente = new Docente()
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

    const logRudoc = req.body.rudoc
    const logCi = req.body.ci
   // const logCi = req.body.ci
    console.log(logRudoc)
    console.log(logCi)

    Docente.findById({logRudoc},(err,login) =>{
        if(!logRudoc){
            res.send({ message: `no existe el usuario ${logRudoc}`})

        }
        if(err) {
             res.send({message:'error'})
        }
        login.send(logRudoc)
        console.log(logRudoc)
    })

}
module.exports = {
    a_docente,
    mostrar_docentes,
    logear_docente
}

