import {Request,Response} from 'express'
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
                estado:true
            }))
            res.end()
        }
        
    }


}

export default modeloEquipoControlador