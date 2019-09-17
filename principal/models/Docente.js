const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const DocenteSchema = new Schema({
  rudoc : {type:String  , unique:true},
  ci : {type:String  , unique:true},
 // pago : {type: Boolean, default: false},
  rol : {type:String , default:'docente'},
 /* Materia_1: {type:String, required:true,default:'no programado'},
  Materia_2: {type:String, required:true,default:'no programado'},
  Materia_3: {type:String, required:true,default:'no programado'},
  Materia_4: {type:String, required:true,default:'no programado'},
  Materia_5: {type:String, required:true,default:'no programado'},
  Materia_6: {type:String, required:true,default:'no programado'},
  G_Materia_1: {type:Number, required:true,default:'0'},
  G_Materia_2: {type:Number, required:true,default:'0'},
  G_Materia_3: {type:Number, required:true,default:'0'},
  G_Materia_4: {type:Number, required:true,default:'0'},
  G_Materia_5: {type:Number, required:true,default:'0'},
  G_Materia_6: {type:Number, required:true,default:'0'},
  */
});



module.exports = mongoose.model('Docente', DocenteSchema);