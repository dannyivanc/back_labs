const jwt = require('jwt-simple')
const moment = require ('moment')
const index = require ('../index')

function docenteAuten(req,res,next){
    if(!req.headers.autorizacion){
        return res.status(403).send({message: `no tiene autorizacion`})
    }
    
    const token = req.headers.autorizacion.split("")[1]
    const payload = jwt.decode(token,index.SECRET_TOKEN)

    if(payload.exp <=moment.unix()){
        return res.status(401).send({messaje:'token expirado'})
    }
    req.docente = payload.rudoc
    next()
} 

module.exports = docenteAuten