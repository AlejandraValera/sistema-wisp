import { Request, Response } from "express";

let EquipoControlador={

    registrar: (req:Request,res:Response) => {
        res.writeHead(200,"'content-type':application/json")
        res.write(JSON.stringify({msj:"hola mundo con express y typescript"}))
        res.end()
    }

}

export default EquipoControlador