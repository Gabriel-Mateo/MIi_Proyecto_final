
const express = require('express');
const routes = express.Router();


routes.get('/', (req, resp) => {

    resp.render('index', {

        title: 'Este es mi titulo'
    });

});

routes.get('/ingreso', (req, resp) => {

    resp.render('ingreso');
});
    
routes.get('/gastos', (req, resp) => {

    resp.render('gastos');
});


routes.get('/listado_ingreso', (req, resp) => {

    resp.render('listado_ingreso');
});

routes.get('/listado_gastos', (req, resp) => {

    resp.render('listado_gastos');
});

routes.get('/consultageneral', (req, resp) => {

    resp.render('consultageneral');
});









module.exports = routes;