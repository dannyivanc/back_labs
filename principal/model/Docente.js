const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const DocenteSchema = new Schema({
    nombre: String,
    apellidop: String,
    apellidom: String,
    id: String,
    ci: String  
});

module.exports = mongoose.model('Docente', DocenteSchema);