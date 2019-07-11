const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const estudianteSchema = new Schema({
    nombre: String,
    apellidop: String,
    apellidom: String,
    ru: String,
    ci: String    
});

module.exports = mongoose.model('Estudiante', estudianteSchema);