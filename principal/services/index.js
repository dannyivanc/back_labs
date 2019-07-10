const jwt = require('jwt-simple')
const moment = require('moment')
const config = require('../index')

function createToken(docente){
    const payload = {
        rudoc : docente.rudoc,
        ci : docente.ci,
        cre : moment().unix(),
        exp: moment().add(100,'days').unix(),
        
    }
   return jwt.encode(payload,config.SECRET_TOKEN)
}
rudoc :
  ci : 
module.exports = createToken