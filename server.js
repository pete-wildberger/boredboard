//requires
var express= require('express');
var app = express();
var bodyParser = require('body-parser');
var index = require('./modules/routes/index');
var mes = require('./modules/routes/mes');


//uses
app.use(express.static ('public'));
app.use(bodyParser.urlencoded({extended: true}));

app.use('/', index);
app.use('/mes', mes);
//globals
var port = process.env.PORT || 2017;

//listener
app.listen(port, function(){
  console.log('server up on 2017');
});
