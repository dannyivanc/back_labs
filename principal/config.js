module.exports = {
    port: process.env.PORT || 5000,
    db: process.env.MONGODB_URI || 'mongodb://localhost/labs',
    
    SECRET_TOKEN: 'miclavedetokens'
  }
  