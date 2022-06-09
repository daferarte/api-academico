/**
 * @author Daniel Arteaga
 * @version 1.0.0
 * 
 * Retornos controller
 * Controlador de metodos de Retornos
 * metodos de:
 * Agregar Retorno
 * Consultar Retorno
 * ListarRetorno
 * Eliminar Retorno
 * Editar Retorno
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
 * @method agregarRetorno
 * metodo para agregar Retorno de tipo post
 * estemetodo recibe un arreglo con los datos necesarios para el funcionamiento del sistema
 * @param {*} req datos de request es decir metodos enviados hacia el app
 * @param {*} res datos de response es decir datos de respuesta hacia el front
 */
const agregarRetorno = async(req, res = response) => {

    //id_asignaturas_plan_estudios, semestres - desestructuración de datos del body
    const { id_asignaturas_matriculas, equivalencias_id,  } = req.body;

    const result = await prisma.retornos.create({
        data:{
            id_asignaturas_matriculas, 
            equivalencias: {
                connect: {
                    id: equivalencias_id
                }
            }
        },
        include: { equivalencias: true }
    }).catch((e) => {
       return e.message;
    }).finally(async () => {
        await prisma.$disconnect()
    })

    result.id=ConversionBigInt(result.id)
    //ejemplo de respuesta del body
    res.json({
        msg: 'Agregar Retorno',
        result
    });
}

 /**
 * @method MostrarRetornos
 * metodo para mostrar Retorno de tipo get
 * estemetodo recibe un arreglo con los datos necesarios para el funcionamiento del sistema
 * @param {*} req datos de request es decir metodos enviados hacia el app
 * @param {*} res datos de response es decir datos de respuesta hacia el front
 */
const MostrarRetornos = async(req, res = response) => {

    let retornos = await prisma.retornos.findMany({
        include: { equivalencias: true }
    })
    .catch((e) => {
        return e.message;
    }).finally(async () => {
        await prisma.$disconnect()
    })


    
    retornos=ConversionesBigInt(retornos);
    // respuesta del body
    res.json({
        msg: 'Mostrar Retornos',
        retornos
    });
}

/**
 * @method MostrarRetorno
 * metodo para mostrar una equivalencia especifica de tipo get
 * estemetodo recibe un arreglo con los datos necesarios para el funcionamiento del sistema
 * @param {*} req datos de request es decir metodos enviados hacia el app
 * @param {*} res datos de response es decir datos de respuesta hacia el front
 */
 const MostrarRetorno = async(req, res = response) => {

    //id de desestructuración de datos del params
    const { id } = req.params;
    const retorno = await prisma.retornos.findFirst({
        where:{id: Number(id)}
    }).catch((e) => {
        return e.message;
    }).finally(async () => {
        await prisma.$disconnect()
    })

    retorno.id=ConversionBigInt(retorno.id);
    //respuesta del body
    res.json({
        msg: 'Mostrar Retorno',
        retorno
    });
}

/**
 * @method ActualizarRetorno
 * metodo para actualizar Retorno de tipo put
 * estemetodo recibe un arreglo con los datos necesarios para el funcionamiento del sistema
 * @param {*} req datos de request es decir metodos enviados hacia el app
 * @param {*} res datos de response es decir datos de respuesta hacia el front
 */
const ActualizarRetorno = async(req, res = response) => {

    //id de desestructuración de datos del params
    const { id } = req.params;
    //id_asignaturas_plan_estudios, semestres de desestructuración de datos del body
    const { id_asignaturas_matriculas, equivalencias_id,  } = req.body;
    const retorno = await prisma.retornos.update({
        where:{id: Number(id)},
        data:{
            id_asignaturas_matriculas, 
            equivalencias: {
                connect: {
                    id: equivalencias_id
                }
            }
        },
        include: { equivalencias: true }
    }).catch((e) => {
        return e.message;
    }).finally(async () => {
        await prisma.$disconnect()
    })

    retorno.id=ConversionBigInt(retorno.id);
    //respuesta del body
    res.json({
        msg: 'Actualizar Retorno',
        retorno
    });
}

/**
 * @method EliminarRetorno
 * metodo para Eliminar Retorno de tipo delete
 * estemetodo recibe un arreglo con los datos necesarios para el funcionamiento del sistema
 * @param {*} req datos de request es decir metodos enviados hacia el app
 * @param {*} res datos de response es decir datos de respuesta hacia el front
 */
const EliminarRetorno = async(req, res = response) => {

    //id de desestructuración de datos del params
    const { id } = req.params;
    const retorno = await prisma.retornos.delete({
        where:{id: Number(id)}
    }).catch((e) => {
        return e.message;
    }).finally(async () => {
        await prisma.$disconnect()
    })

    retorno.id=ConversionBigInt(retorno.id);
    //respuesta del body
    res.json({
        msg: 'Eliminar Retorno',
        retorno
    });
}

const ConversionBigInt = (id) =>{
    
    return (id).toString();
}

const ConversionesBigInt = (results) =>{

    for (var result of results) 
    {
        console.log(result);
        result.id=(result.id).toString();
    }
    return results
}

/**
 * @var module.exports 
 * exportamos todos los metodos para ser utilizados en otras clases
 */
 module.exports = {
    agregarRetorno,
    MostrarRetornos,
    MostrarRetorno,
    ActualizarRetorno,
    EliminarRetorno
}