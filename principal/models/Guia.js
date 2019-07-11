const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const guiaSchema = new Schema({

    numero: {type: String, required: true },
    estudiante :{type: String , required: true },
    calificacion: {type: String , default:'0' },
    materia: String,
    estado: { type: Boolean , default : false } ,
   
    
   // estudiante: { type: Schema.ObjectId, ref: "Estudiante" },
   //materia: { type: Schema.ObjectId, ref: "Materia" }
});


module.exports = mongoose.model('Guia', guiaSchema); 