const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const guiaSchema = new Schema({
    materia: {type: String , required:true },
    grupo : {type: String , required:true },
    estado: { type: Boolean ,required:true ,default : false } 
   // estudiante: { type: Schema.ObjectId, ref: "Estudiante" },
   //materia: { type: Schema.ObjectId, ref: "Materia" }
});


module.exports = mongoose.model('Guia', guiaSchema); 