import {Router} from 'express'
import bodyparse from 'body-parser'
import ModeloEquipoControlador from '../../controlador/c_modelo_equipo'

const router:Router=Router()

router.use(bodyparse.json())

router.post("/registrar",ModeloEquipoControlador.registrar)


export default router