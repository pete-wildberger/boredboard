var express = require( 'express' );
var router = express.Router();
var path = require( 'path' );
var bcrypt = require('bcrypt');
var bodyParser = require('body-parser');


router.use(bodyParser.urlencoded({extend: true}));
router.use(bodyParser.json());

router.post('/', function(req, res) {
  console.log('register posst hit', req.body);
  res.send('something else');
});


module.exports = router;
