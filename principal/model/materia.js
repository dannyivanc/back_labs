const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const materiaSchema = new Schema({
    nombre: String,
    sigla: String,
    semestre: String
});


module.exports = mongoose.model('Materia', materiaSchema);