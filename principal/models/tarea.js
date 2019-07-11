const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const tareaSchema = new Schema({
    calificacion: String,
    estado:{
        type: Boolean,
        default: false
      },
    estudiante: { type: Schema.ObjectId, ref: "Estudiante" },
    materia: { type: Schema.ObjectId, ref: "Materia" },
});

module.exports = mongoose.model('Tarea', tareaSchema);