import {request, Request,Response} from 'express'
import moment from 'moment'
import { QueryResult } from 'pg';
import ClienteModelo from "../modelo/m_cliente"

const clienteControlador= {




    registrar:async (req:Request,res:Response) => {
        let {cliente} = req.body;
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

    }



}

export default clienteControlador

