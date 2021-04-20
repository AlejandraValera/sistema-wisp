import {Router} from "express"
import bodyParse from 'body-parser'
import clienteContronlador from '../../controlador/c_cliente'

const router=Router()

router.use(bodyParse.json())

router.post("/registrar",clienteContronlador.registrar)



export default router