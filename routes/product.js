const express = require('express');
const router = express.Router();
const multer = require('./../middleware/multer');
// Controller;
const productCtrl = require('./../controllers/productCtrl');

router.get('/create', productCtrl.create_get);

router.post('/create', multer, productCtrl.create_post);

router.get('/', productCtrl.index);



module.exports = router;
