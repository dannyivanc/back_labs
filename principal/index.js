const path = require('path');
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();

// coneccion a base de datos
mongoose.connect('mongodb://localhost/labs', { useNewUrlParser: true },(err,res)=>{
if(err) throw err
console.log('base de datos conectada')
});



// importando rutas
const indexRoutes = require('./routes/routes');

// configuraciones
const port = process.env.PORT || 5000;


// middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// routes
app.use('/', indexRoutes);


//configurando los token
//SECRET_TOKEN:'clavedetoken'


app.listen(port,()=>{
  console.log(`corriendo en: ${port}`)
});

/*
app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), () => {
 //console.log(`)
  console.log('corriendo en: '+app.get('port'));
});*/


