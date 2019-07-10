const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const guiaSchema = new Schema({
    materia: String,
    calificacion: {type: String , default:'0' },
    estado: { type: Boolean , default : false } 
   // estudiante: { type: Schema.ObjectId, ref: "Estudiante" },
   //materia: { type: Schema.ObjectId, ref: "Materia" }
});


module.exports = mongoose.model('Guia', guiaSchema); 