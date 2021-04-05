import {Router} from 'express'
import body from 'body-parser'

import EquipoControlador from '../../controlador/c_equipo'
const router=Router()

router.use(body.json())

router.post("/registrar",EquipoControlador.registrar)
router.get("/consultar/:id",EquipoControlador.consultar)
router.get("/consultar-todos",EquipoControlador.consultarTodos)
router.put("/actualizar/:id",EquipoControlador.actualizar)

export default router