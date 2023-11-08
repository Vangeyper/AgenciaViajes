import express from 'express';

const router = express.Router();

//hola mundo
// router.get('/', ( req, res ) => {
//     //res.send('Hola Mundo'); // nos permite mostrar algo en pantalla
//     // devuelve un json como respuesta:
//     res.json({
//         id: 1,
//         respuesta: "Mis datos de la respuesta"
//     });
//     // res.render("Vista"); // permite mostrar una vista pero requiere configurar el motor de vistas y tener definida dicha vista en el código
// })

//inicio
router.get('/', ( req, res ) => {
    res.render('inicio', {
        pagina: 'Pág. Inicio',
        temario: 'paso de variables'
    }); // muestra la vista inicio.pug
})

//nosotros
router.get('/nosotros', ( req, res ) => {
    res.render('nosotros', {
        pagina: 'Pág. Nosotros',
        temario: 'lo que somos'
    }); // muestra la vista nosotros.pug
})

//viajes
router.get('/viajes', ( req, res ) => {
    res.render('viajes', {
        pagina: 'Pág. Viajes',
        temario: 'donde vamos a ir'
    }); // muestra la vista viajes.pug
})

//testimoniales
router.get('/testimoniales', ( req, res ) => {
    res.render('testimoniales', {
        pagina: 'Pág. Testimoniales',
        temario: 'lo que hemos visitado'
    }); // muestra la vista testimoniales.pug
})

// exportamos por defecto el router
export default router;

