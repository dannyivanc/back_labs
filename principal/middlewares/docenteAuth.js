const services = require('../services')


function isdocenteAuth(req,res,next){
    if(!req.headers.autorizacion){
        return res.status(403).send({message: `no tiene autorizacion`})
    }
    
    const token = req.headers.autorizacion.split("")[1]
 
    services.decodeToken(token)
    .then(response=>{
        res.docente = response
        next()
    })
    .catch(response=>{
       res.statua(response.status) 
    })
} 

module.exports = {
    isdocenteAuth
}