import {Router} from 'express'
import EquipoControlador from '../../controlador/c_equipo'
const router=Router()

router.post("/registrar",EquipoControlador.registrar)

export default router