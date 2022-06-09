/**
 * @author Daniel Arteaga
 * @version 1.0.0
 * 
 * equivalencias router
 * Rutas de metodos de equivalencias
 * Agregar equivalencia
 * Consultar equivalencia
 * ListarEquivalencia
 * Eliminar equivalencia
 * Editar equivalencia
 */

/**
 * @var Router Variable para manejar el response de express
 * Esta variable se crea por que en este archivo no disponemos de la variable this.app de express
 * @var validarJWT Variable para manejar la validacion del token
*/
const { Router } = require('express');
const { validarJWT } = require('../middlewares/validar-jwt');

/**
  * los siguientes metodos son desestructuraciones de los metodos que se utilizan en el controlador 
*/

const { agregarEquivalencia, MostrarEquivalencias, MostrarEquivalencia, ActualizarEquivalencia, EliminarEquivalencia } = require('../controllers/equivalencias.controller');

/**
 * @var router
 * Instancia de la importación de router
*/

const routerEquiv = Router();

/**
 * Definición de las rutas que manejara mi app
*/

routerEquiv.post('/v1/', validarJWT, agregarEquivalencia );
routerEquiv.get('/v1/:id', validarJWT, MostrarEquivalencia );
routerEquiv.get('/v1/', validarJWT, MostrarEquivalencias );
routerEquiv.put('/v1/:id', validarJWT, ActualizarEquivalencia );
routerEquiv.delete('/v1/:id', validarJWT, EliminarEquivalencia );

/**
 * Exportando las rutas para ser utilizadas.
*/
module.exports = routerEquiv;