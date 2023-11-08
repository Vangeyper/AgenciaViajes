//const express = require('express');
import express from 'express';
import router from './routes/index.js';

// declaramos la aplicación como una ejecución de express
const app = express();

// Habilitar PUG
app.set( 'view engine', 'pug' );

// habilitar objetos vacíos 


// Obtener el año actual: nuestro middleware
app.use( ( req, res, next ) => {

    const year = new Date();
    // asignamos en locals las nuevas variables
    res.locals.actualYear = year.getFullYear();      
    res.locals.nombreSitio = 'Agencia de Viajes';

    // indicamos que tenemos que saltar al siguiente middleware
    next();
});

// Definir la carpeta pública
app.use( express.static( 'public' ) );

// agregamos el router que ya hemos definido con todas las rutas
app.use( '/', router );


//definir puerto
const port = process.env.PORT || 4000; // incialmente hasta que se haga el primer deployment la variable de entorno process.env.PORT no existirá

// escuchamos por el puerto indicado
app.listen( port, () => {
    console.log(` El servidor está funcionando en el puerto ${port} `);
} )