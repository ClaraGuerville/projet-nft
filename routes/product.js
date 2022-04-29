const express = require('express');
const router = express.Router();

// Controller;
const productCtrl = require('./../controllers/productCtrl');

router.get('/create', productCtrl.create_get);

router.post('/create', productCtrl.create_get);

router.get('/', productCtrl.index);


module.exports = router;
