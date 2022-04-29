const express = require('express');

const router = express.Router();

// CONTROLLERS
const albumCtrl = require('../controllers/albumCtrl');

// console.log(albumCtrl);

router.get('/create', albumCtrl.create_get);

router.post('/create', albumCtrl.create_post);

// Cette route appelle la méthode index
router.get('/', albumCtrl.index);






router.post('/show/:id', (request, response) => {
    console.log(request.body);
    // On passe un objet, en PHP on passwe un tableau à la methode render
    response.render('album/show', {success: 'post traité !'});
});

router.post('/edit/:id', (request, response) => {
    console.log(request.body);
    // On passe un objet, en PHP on passwe un tableau à la methode render
    response.render('album/edit', {success: 'post traité !'});
});

router.post('/delete/;id', (request, response) => {
    console.log(request.body);
    response.refirect('/');
});


module.exports = router;