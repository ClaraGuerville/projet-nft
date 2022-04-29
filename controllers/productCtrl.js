const { request } = require('express');
const Product = require ('./../models/product');

exports.create_get = (request, response) => {
    response.render('products/create');
}

exports.create_post = (request, response) => {
    const product = new Product({
        ...request.body
    });

    product.save((error, result) => {
        if (error) console.log(error);
        response.redirect('/products')
    });
};

exports.index = ((request, response) => {
    response.render('/product/index')
});