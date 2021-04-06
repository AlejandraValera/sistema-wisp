import { Request, Response } from "express";
import { QueryResult } from "pg";
import EquipoModelo from '../modelo/m_equipo'

let EquipoControlador={

    

    registrar:async (req:Request,res:Response) => {
        let {equipo} = req.body
        let mEquipo:EquipoModelo=new EquipoModelo()
        mEquipo.setDatos(equipo)
        let result_equipo:QueryResult=await mEquipo.registrar()
        // console.log("datos =>>>> ",result_equipo)
        if(result_equipo.rowCount>0){
            res.writeHead(200,"'content-type':application/json")
            res.write(JSON.stringify({
                mensaje:"equipo registrado",
                estado:true
            }))
            res.end()
        }
        else{
            res.writeHead(200,"'content-type':application/json")
            res.write(JSON.stringify({
                mensaje:"error al registar",
                estado:false
            }))
            res.end()
        }
        
    },

    consultar:async (req:Request,res:Response) => {
        let {id} = req.params
        let mEquipo:EquipoModelo=new EquipoModelo()
        mEquipo.setId(id)
        let result_equipo:QueryResult=await mEquipo.consultar()
        if(result_equipo.rowCount>0){
            res.writeHead(200,"'content-type':application/json")
            res.write(JSON.stringify({
                mensaje:"equipo encontrado",
                estado:true,
                datos:result_equipo.rows[0]
            }))
            res.end()
        }
        else{
            res.writeHead(200,"'content-type':application/json")
            res.write(JSON.stringify({
                mensaje:"no se encontro el equipo",
                estado:false
            }))
            res.end()
        }
    },

    actualizar:async (req:Request,res:Response) => {
        let respuesta_cliente={
            mensaje:"",
            estado:false,
            datos:[]
        }
        let {equipo} = req.body
        let {id} = req.params
        let mEquipo:EquipoModelo=new EquipoModelo()
        mEquipo.setId(id)
        mEquipo.setDatos(equipo)
        let result_equipo:QueryResult=await mEquipo.actualizar()
        if(result_equipo.rowCount>0){
            res.writeHead(200,"'content-type':application/json")
            res.write(JSON.stringify({
                mensaje:"equipo actualizado",
                estado:true,
                datos:result_equipo.rows[0]
            }))
            res.end()
        }
        else{
            res.writeHead(200,"'content-type':application/json")
            res.write(JSON.stringify({
                mensaje:"no se encontro el quipo",
                estado:false
            }))
            res.end()
        }
        // let result_equipo:QueryResult=await mEquipo.
    },

    consultarTodos:async (req:Request,res:Response) => {
        let mEquipo:EquipoModelo=new EquipoModelo()
        let result_equipo:QueryResult=await mEquipo.consultarTodos()
        if(result_equipo.rowCount>0){
            res.writeHead(200,"'content-type':application/json")
            res.write(JSON.stringify({
                mensaje:"consulta completada",
                estado:true,
                datos:result_equipo.rows
            }))
            res.end()
        }
        else{
            res.writeHead(200,"'content-type':application/json")
            res.write(JSON.stringify({
                mensaje:"no tienes equipos almacenados",
                estado:false
            }))
            res.end()
        }
    },
    consultarPorNombre:async (req:Request,res:Response) => {
        let {nombre} = req.params
        let mEquipo:EquipoModelo=new EquipoModelo()
        let result_equipo:QueryResult=await mEquipo.consultarPorNombre(nombre)
        if(result_equipo.rowCount>0){
            res.writeHead(200,"'content-type':application/json")
            res.write(JSON.stringify({
                mensaje:`cosnultar completada`,
                estado:true,
                datos:result_equipo.rows
            }))
            res.end()
        }
        else{
            res.writeHead(200,"'content-type':application/json")
            res.write(JSON.stringify({
                mensaje:`no se a encontrado ningun equipo con el nombre de ${nombre}`,
                estado:false
            }))
            res.end()
        }
    }

}

export default EquipoControlador