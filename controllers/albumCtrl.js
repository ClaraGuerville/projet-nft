const Album = require('./../models/album');

exports.create_get = (request, response) => {
    response.render('album/create');
};

exports.create_post = (request, response) => {
    // Les 3 petits points permettent de fusionner de sobjets
    const album = new Album({
        ...request.body
    });

    album.save((error, result) => {
        if (error) console.log(error);
            // albums avec s normalement
    // si tout se passer bien on redirige vers la route album
    response.redirect('/album');
    });
};

exports.index = (request, response) => {
    // albums avec s normal
    response.render('album/index');
};