const jwt = require('jwt-simple')
const moment = require('moment')
const config = require('../config')

function createToken(docente){
    const payload = {
        /*rudoc : docente.rudoc,
        ci : docente.ci,*/
        sub : docente._id,
        iat : moment().unix(),
        exp: moment().add(100,'days').unix()
    }
   return jwt.encode(payload , config.SECRET_TOKEN)
}
function decodeToken(token){
  const decoded = new Promise((resolve,reject)=>{
    try {
      const payload =jwt.decode(token,config.SECRET_TOKEN)

      if(payload.exp <= moment().unix()){
        reject({
          status: 401,
          messaje:'el token expiro'
        })
    }
    resolve(payload.sub)


    }catch(err){
      reject({
        status: 500,
        messaje :'token invalido'

      })
    }
  })
  return decoded
}


rudoc :
  ci : 
module.exports = {
  createToken,
  decodeToken
}