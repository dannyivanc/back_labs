const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const DocenteSchema = new Schema({
  rudoc : {type:String  , unique:true},
  ci : {type:Number  , unique:true},
  rol : {type:String , default:'docente'}
});



module.exports = mongoose.model('Docente', DocenteSchema);