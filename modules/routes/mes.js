var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

// 27017 is default mongo port
mongoose.connect('localhost:27017/messdb');

var newMes = new mongoose.Schema({
  author: String,
  message: String
});
var mesModel = mongoose.model('board', newMes);

router.use(bodyParser.urlencoded({
  extended: true
}));
router.use(bodyParser.json());


router.get('/', function(req, res) {
  // get and send back all the things
  console.log('get mess db');
  mesModel.find().then(function(data) {
    res.send(data);
  });
});

router.post('/', function(req, res) {
  console.log('db post mes: ', req.body);
  // retrieved the req.body
  // putting it into an object to be saved in the db
  var recordToAdd = {
    author: req.body.author,
    message: req.body.message
  };

  // create new record
  var newRecord = mesModel(recordToAdd);

  newRecord.save();
  res.send(200);

});

module.exports = router;
