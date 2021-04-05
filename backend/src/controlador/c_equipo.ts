import { Request, Response } from "express";
import { QueryResult } from "pg";
import EquipoModelo from '../modelo/m_equipo'

let EquipoControlador={

    

    registrar:async (req:Request,res:Response) => {
        let respuesta_cliente={
            mensaje:"",
            estado:false,
            datos:[]
        }
        let {equipo} = req.body
        let mEquipo:EquipoModelo=new EquipoModelo()
        mEquipo.setDatos(equipo)
        let result_equipo:QueryResult=await mEquipo.registrar()
        // console.log("datos =>>>> ",result_equipo)
        if(result_equipo.rowCount>0){
            respuesta_cliente.mensaje="equipo registrado de forma exitosa"
            respuesta_cliente.estado=true
            res.writeHead(200,"'content-type':application/json")
            res.write(JSON.stringify(respuesta_cliente))
            res.end()
        }
        else{
            respuesta_cliente.mensaje="error al registar el equipo"
            respuesta_cliente.estado=false
            res.writeHead(200,"'content-type':application/json")
            res.write(JSON.stringify(respuesta_cliente))
            res.end()
        }
        
    },

    consultar:async (req:Request,res:Response) => {
        let respuesta_cliente={
            mensaje:"",
            estado:false,
            datos:[]
        }
        let {id} = req.params
        let mEquipo:EquipoModelo=new EquipoModelo()
        mEquipo.setId(id)
        let result_equipo:QueryResult=await mEquipo.consultar()
        
        if(result_equipo.rowCount>0){
            respuesta_cliente.mensaje="equipo encontrado"
            respuesta_cliente.estado=true
            respuesta_cliente.datos=result_equipo.rows[0]
            res.writeHead(200,"'content-type':application/json")
            res.write(JSON.stringify(respuesta_cliente))
            res.end()
        }
        else{
            respuesta_cliente.mensaje="no se encontro el quipo"
            respuesta_cliente.estado=false
            res.writeHead(200,"'content-type':application/json")
            res.write(JSON.stringify(respuesta_cliente))
            res.end()
        }
        

    }

}

export default EquipoControlador