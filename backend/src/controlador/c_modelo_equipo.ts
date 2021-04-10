import {Request,Response} from 'express'
import { QueryResult } from 'pg'
import ModeloEquipoModelo from '../modelo/m_modelo_equipo'

let modeloEquipoControlador={

    registrar:async (req:Request,res:Response) => {
        let {modelo} = req.body
        let mModeloEquipo:ModeloEquipoModelo= new ModeloEquipoModelo()
        mModeloEquipo.setDatos(modelo)
        let result_modelo=await mModeloEquipo.registrar()
        if(result_modelo.rowCount>0){
            res.writeHead(200,"'content-type':application/json")
            res.write(JSON.stringify({
                mensaje:"modelo registrado",
                estado:true
            }))
            res.end()
        }
        else{
            res.writeHead(200,"'content-type':application/json")
            res.write(JSON.stringify({
                mensaje:"error al registrar modelo",
                estado:false
            }))
            res.end()
        }
        
    },

    consultar: async (req:Request,res:Response) => {
        let {id} = req.params
        let mModeloEquipo:ModeloEquipoModelo=new ModeloEquipoModelo()
        mModeloEquipo.setIdModeloEquipo(id)
        let result_modelo:QueryResult=await mModeloEquipo.consultar()
        if(result_modelo.rowCount>0){
            res.writeHead(200,"'content-type':application/json")
            res.write(JSON.stringify({
                mensaje:"consulta completada",
                estado:true,
                datos:result_modelo.rows[0]
            }))
            res.end()
        }
        else{
            res.writeHead(200,"'content-type':application/json")
            res.write(JSON.stringify({
                mensaje:"el modelo no a sido encontrado",
                estado:false
            }))
            res.end()
        }

    },
    consultarTodos: async (req:Request,res:Response) => {
        let mModeloEquipo:ModeloEquipoModelo=new ModeloEquipoModelo()
        let result_modelo:QueryResult=await mModeloEquipo.consultarTodos()
        if(result_modelo.rowCount>0){
            res.writeHead(200,"'content-type':application/json")
            res.write(JSON.stringify({
                mensaje:"consultar completada",
                estado:true,
                datos:result_modelo.rows
            }))
            res.end()

        }
        else{
            res.writeHead(200,"'content-type':application/json")
            res.write(JSON.stringify({
                mensaje:"error al consultar no hay nada en la base de datos",
                estado:false
            }))
            res.end()
        }
    },
    actualizar:async (req:Request,res:Response) => {
        let {modelo} = req.body
        let {id} = req.params
        let mModeloEquipo:ModeloEquipoModelo=new ModeloEquipoModelo()
        mModeloEquipo.setDatos(modelo)
        let result_modelo:QueryResult=await mModeloEquipo.actualizar()
        if(result_modelo.rowCount>0){
            res.writeHead(200,"'content-type':application/json")
            res.write(JSON.stringify({
                mensaje:"actualización completada",
                estado:true
            }))
            res.end()
        }
        else{
            res.writeHead(200,"'content-type':application/json")
            res.write(JSON.stringify({
                mensaje:"error al actualizar, no se encontrado el modelo a actualizar",
                estado:false
            }))
            res.end()
        }
    },
    consultarPorEquipo:async (req:Request,res:Response) => {
        let {idEquipo} = req.params
        let mModeloEquipo:ModeloEquipoModelo=new ModeloEquipoModelo()
        mModeloEquipo.setIdEquipo(idEquipo)
        let result_modelo:QueryResult=await mModeloEquipo.consultarPorEquipo()
        if(result_modelo.rowCount>0){
            res.writeHead(200,"'content-type':application/json")
            res.write(JSON.stringify({
                mensaje:`consulta completada`,
                estado:true,
                datos:result_modelo.rows
            }))
            res.end()
        }
        else{
            res.writeHead(200,"'content-type':application/json")
            res.write(JSON.stringify({
                mensaje:`no se a encontrado ningun modelo realacionado a este equipo =>>>(codigo del equipo => ${idEquipo})`,
                estado:false
            }))
            res.end()
        }
    },
    consultarPorIdEquipoYNombreModelo:async (req:Request,res:Response) => {
        let {idEquipo,nombreModelo} = req.params
        let mModeloEquipo:ModeloEquipoModelo=new ModeloEquipoModelo()
        mModeloEquipo.setIdEquipo(idEquipo)
        let result_modelo:QueryResult=await mModeloEquipo.consultarPorIdEquipoYNombreModelo(nombreModelo)
        if(result_modelo.rowCount>0){
            res.writeHead(200,"'content-type':application/json")
            res.write(JSON.stringify({
                mensaje:`consultar completada`,
                estado:true,
                datos:result_modelo.rows
            }))
            res.end()
        }
        else{
            res.writeHead(200,"'content-type':application/json")
            res.write(JSON.stringify({
                mensaje:`no se a encontrado ningun modelo`,
                estado:false
            }))
            res.end()
        }
    }
    ,consultarPorNombreModelo:async (req:Request,res:Response) => {
        let {nombreModelo} = req.params
        let mModeloEquipo:ModeloEquipoModelo=new ModeloEquipoModelo()
        let result_modelo:QueryResult=await mModeloEquipo.consultarPorNombreModelo(nombreModelo)
        if(result_modelo.rowCount>0){
            res.writeHead(200,"'content-type':application/json")
            res.write(JSON.stringify({
                mensaje:`no se a encontrado ningun modelo`,
                estado:true,
                datos:result_modelo.rows
            }))
            res.end()
        }
        else{
            res.writeHead(200,"'content-type':application/json")
            res.write(JSON.stringify({
                mensaje:`no se a encontrado ningun modelo`,
                estado:false
            }))
            res.end()
        }
    }


}

export default modeloEquipoControlador