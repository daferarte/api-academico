/**
 * @author Daniel Arteaga
 * @version 1.0.0
 * 
 * Equivalencias controller
 * Controlador de metodos de equivalencias
 * metodos de:
 * Agregar equivalencia
 * Consultar equivalencia
 * ListarEquivalencia
 * Eliminar equivalencia
 * Editar equivalencia
*/

/**
 * @var response Variable para manejar el response de express
 * @var request Variable para manejar el request de epress
 * Estas dos variables se utilizan para utilizar el autocompletado de express
 * @var PrismaClient Variable para manejador de el ORM prisma
*/
const { response, request } = require('express');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

 /**
 * @method agregarEquivalencia
 * metodo para agregar equivalencia de tipo post
 * estemetodo recibe un arreglo con los datos necesarios para el funcionamiento del sistema
 * @param {*} req datos de request es decir metodos enviados hacia el app
 * @param {*} res datos de response es decir datos de respuesta hacia el front
 */
const agregarEquivalencia = async(req, res = response) => {

    //id_asignaturas_plan_estudios, semestres - desestructuración de datos del body
    const { id_asignaturas_plan_estudios, semestres } = req.body;

    const result = await prisma.equivalencias.create({
        data:{
            id_asignaturas_plan_estudios, semestres
        }
    }).catch((e) => {
       return e.message;
    }).finally(async () => {
        await prisma.$disconnect()
    })


    //ejemplo de respuesta del body
    res.json({
        msg: 'Agregar Equivalencia',
        result
    });
}

 /**
 * @method MostrarEquivalencias
 * metodo para mostrar equivalencia de tipo get
 * estemetodo recibe un arreglo con los datos necesarios para el funcionamiento del sistema
 * @param {*} req datos de request es decir metodos enviados hacia el app
 * @param {*} res datos de response es decir datos de respuesta hacia el front
 */
const MostrarEquivalencias = async(req, res = response) => {

    const equivalencias = await prisma.equivalencias.findMany()
    .catch((e) => {
        return e.message;
     }).finally(async () => {
         await prisma.$disconnect()
     })

    // respuesta del body
    res.json({
        msg: 'Mostrar Equivalencias',
        equivalencias
    });
}

/**
 * @method MostrarEquivalencia
 * metodo para mostrar una equivalencia especifica de tipo get
 * estemetodo recibe un arreglo con los datos necesarios para el funcionamiento del sistema
 * @param {*} req datos de request es decir metodos enviados hacia el app
 * @param {*} res datos de response es decir datos de respuesta hacia el front
 */
 const MostrarEquivalencia = async(req, res = response) => {

    //id de desestructuración de datos del params
    const { id } = req.params;
    const equivalencia = await prisma.equivalencias.findFirst({
        where:{id: Number(id)}
    }).catch((e) => {
        return e.message;
    }).finally(async () => {
        await prisma.$disconnect()
    })

    //respuesta del body
    res.json({
        msg: 'Mostrar Equivalencia',
        equivalencia
    });
}

/**
 * @method ActualizarEquivalencia
 * metodo para actualizar equivalencia de tipo put
 * estemetodo recibe un arreglo con los datos necesarios para el funcionamiento del sistema
 * @param {*} req datos de request es decir metodos enviados hacia el app
 * @param {*} res datos de response es decir datos de respuesta hacia el front
 */
const ActualizarEquivalencia = async(req, res = response) => {

    //id de desestructuración de datos del params
    const { id } = req.params;
    //id_asignaturas_plan_estudios, semestres de desestructuración de datos del body
    const { id_asignaturas_plan_estudios, semestres } = req.body
    const equivalencia = await prisma.equivalencias.update({
        where:{id: Number(id)},
        data: { id_asignaturas_plan_estudios, semestres }
    }).catch((e) => {
        return e.message;
    }).finally(async () => {
        await prisma.$disconnect()
    })

    //respuesta del body
    res.json({
        msg: 'Actualizar Equivalencia',
        equivalencia
    });
}

/**
 * @method EliminarEquivalencia
 * metodo para Eliminar equivalencia de tipo delete
 * estemetodo recibe un arreglo con los datos necesarios para el funcionamiento del sistema
 * @param {*} req datos de request es decir metodos enviados hacia el app
 * @param {*} res datos de response es decir datos de respuesta hacia el front
 */
const EliminarEquivalencia = async(req, res = response) => {

    //id de desestructuración de datos del params
    const { id } = req.params;
    const equivalencia = await prisma.equivalencias.delete({
        where:{id: Number(id)}
    }).catch((e) => {
        return e.message;
    }).finally(async () => {
        await prisma.$disconnect()
    })

    //respuesta del body
    res.json({
        msg: 'Eliminar Equivalencia',
        equivalencia
    });
}



/**
 * @var module.exports 
 * exportamos todos los metodos para ser utilizados en otras clases
 */
 module.exports = {
    agregarEquivalencia,
    MostrarEquivalencia,
    MostrarEquivalencias,
    ActualizarEquivalencia,
    EliminarEquivalencia
}