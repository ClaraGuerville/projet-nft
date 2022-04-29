const { request } = require('express');
const Product = require ('./../models/product');
const Category = require('./../models/category');

exports.create_get = (request, response) => {
    Category.find({},(error, categories) => {
        if(error || !categories){
            console.log('ljhfg');
        }
        response.render('products/create', {categories});
    });
   
}

exports.create_post = (request, response) => {
    if(!request.session.user){
        response.redirect('/login');
    }
    
    const product = new Product({
        ...request.body,
        owner: request.session.user._id
    });
console.log(request.body);
    console.log('product', product);
    product.save((error, result) => {
        if (error) console.log(error);
        console.log(result);
        response.redirect('/products')
       
    });
};

exports.index = ((request, response) => {
    response.render('products/index')
});