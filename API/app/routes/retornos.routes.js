/**
 * @author Daniel Arteaga
 * @version 1.0.0
 * 
 * retornos router
 * Rutas de metodos de retornos
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

const { agregarRetorno, MostrarRetornos, MostrarRetorno, ActualizarRetorno, EliminarRetorno } = require('../controllers/retornos.controller');

/**
 * @var router
 * Instancia de la importación de router
*/

const routerRetorno = Router();

/**
 * Definición de las rutas que manejara mi app
*/

routerRetorno.post('/v1/', validarJWT, agregarRetorno );
routerRetorno.get('/v1/:id', validarJWT, MostrarRetorno );
routerRetorno.get('/v1/', validarJWT, MostrarRetornos );
routerRetorno.put('/v1/:id', validarJWT, ActualizarRetorno );
routerRetorno.delete('/v1/:id', validarJWT, EliminarRetorno );

/**
 * Exportando las rutas para ser utilizadas.
*/
module.exports = routerRetorno;