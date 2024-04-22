var express = require('express');
var router = express.Router();
var usercontroller = require('../controller/usercontroller');
/* GET home page. */
router.post('/cat',usercontroller.insert_cat);
router.post('/pro',usercontroller.insert_pro);
router.get('/find_cat',usercontroller.get_cat);
router.get('/find_pro',usercontroller.get_pro);

module.exports = router;
