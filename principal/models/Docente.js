const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const DocenteSchema = new Schema({
  rudoc : {type:String , required:true , unique:true},
  ci : {type:Number , required:true , unique:true},
  rol : {type:String , default:'docente'}
});



module.exports = mongoose.model('Docente', DocenteSchema);