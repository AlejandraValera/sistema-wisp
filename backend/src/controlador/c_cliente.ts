import {Request,Response} from 'express'
import moment from 'moment'
import { QueryResult } from 'pg';
import ClienteModelo from "../modelo/m_cliente"
import ModeloEquipoModelo from '../modelo/m_modelo_equipo';

const clienteControlador= {




    registrar:async (req:Request,res:Response) => {
        let {cliente} = req.body;
        let modeloEquipoModelo:ModeloEquipoModelo=new ModeloEquipoModelo() 
        modeloEquipoModelo.setIdModeloEquipo(cliente.id_modelo_equipo)
        let modelo_result:QueryResult=await modeloEquipoModelo.consultar()
        if(modelo_result.rowCount>0){
            let clienteModelo: ClienteModelo= new ClienteModelo()
            clienteModelo.setDatos(cliente);
            let clienteResult: QueryResult = await clienteModelo.registrar()
            if(clienteResult.rowCount>0){
                res.writeHead(200,"'content-type':application/json")
                res.write(JSON.stringify({
                    mensaje:"cliente registrados exitosamente",
                    estado:true
                }))
                res.end()
            }
            else{
                res.writeHead(200,"'content-type':application/json")
                res.write(JSON.stringify({
                    mensaje:"no se puedo registrar el cliente",
                    estado:false
                }))
                res.end()
            }
        }
        else{
            res.writeHead(200,"'content-type':application/json")
            res.write(JSON.stringify({
                mensaje:"error al registrar al cliente, por que este modelo de equipo no esta en la base de",
                estado:false
            }))
            res.end()
        }
    },

    consultar:async (req:Request,res:Response)=> {
        let {id_cedula}=req.params
        let clienteModelo:ClienteModelo= new ClienteModelo()
        clienteModelo.setCedula(id_cedula)
        let clienteResult:QueryResult=await clienteModelo.consultar()
        if(clienteResult.rowCount>0){
            res.writeHead(200,"'content-type':application/json")
            res.write(JSON.stringify({
                mensaje:"cliente consultado exitosamente",
                estado:true,
                datos:clienteResult.rows
            }))
            res.end()
        }
        else{
            res.writeHead(200,"'content-type':application/json")
            res.write(JSON.stringify({
                mensaje:"error al consultar no se a encontrado al cliente",
                estado:false,
                datos:[]
            }))
            res.end()
        }

    },
    actualizar:async (req:Request,res:Response) => {
        let {cliente} = req.body
        let modeloEquipoModelo:ModeloEquipoModelo=new ModeloEquipoModelo() 
        modeloEquipoModelo.setIdModeloEquipo(cliente.id_modelo_equipo)
        let modelo_result:QueryResult=await modeloEquipoModelo.consultar()
        if(modelo_result.rowCount>0){
            let clienteModelo:ClienteModelo=new ClienteModelo()
            clienteModelo.setDatos(cliente)
            let cliente_result:QueryResult=await clienteModelo.actualizar()
            if(cliente_result.rowCount>0){
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
                    mensaje:"error al actualizar",
                    estado:false
                }))
                res.end()
            }
        }
        else{
            res.writeHead(200,"'content-type':application/json")
            res.write(JSON.stringify({
                mensaje:"error al actualizar al cliente, por que este modelo de equipo no esta en la base de",
                estado:false
            }))
            res.end()
        }

    }



}

export default clienteControlador

