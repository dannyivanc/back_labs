const path = require('path');
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const config = require('./config')
const app = express();

// coneccion a base de datos
mongoose.connect(config.db, { useNewUrlParser: true },(err,res)=>{
if(err) throw err
console.log('base de datos conectada')
});



// importando rutas
const indexRoutes = require('./routes/routes');

// configuraciones
//const port = process.env.PORT || 5000;



// middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//comit 1 despuesasd
// routes
app.use('/', indexRoutes);

app.listen(config.port,()=>{
  console.log(`corriendo en: ${config.port}`)
});

/*
app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), () => {
 //console.log(`)
  console.log('corriendo en: '+app.get('port'));
});*/



