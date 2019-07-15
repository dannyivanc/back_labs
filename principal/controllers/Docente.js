const Docente = require('../models/Docente')



async function reguistrar_docentes(req,res){
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
    const logRudoc = req.body.metodo
   // const logCi = req.body.ci
    console.log()


    Docente.findById({rudoc},(err,login) =>{
        if(err) {
             res.send({message:'error'})
             console.log('no se encontro'+rudoc)
        }
        login.send(docente)
        console.log(rudoc)
    })

}
module.exports = {
    reguistrar_docentes,
    mostrar_docentes,
    logear_docente
}

