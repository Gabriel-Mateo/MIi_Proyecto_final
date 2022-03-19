
const express = require('express');
const app = express();
const path = require('path');
const router = require('./routes/router')

const bodyParcer = require('body-parser')


//setting
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html')


//middlewares

app.use(bodyParcer.json());
app.use(bodyParcer.urlencoded({ extended: false }))

app.use((req, res, next) => {
    console.log(`${req.url} -${req.method}`);

    next();
})

//rutes
app.use(router);

//static files
app.use(express.static(path.join(__dirname, 'public')))


//start the server

app.listen(app.get('port'), () => console.log('Escuchado en el puerto :' + app.get('port')));



