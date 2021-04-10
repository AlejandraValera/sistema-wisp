import {Router} from 'express'
import bodyparse from 'body-parser'
import ModeloEquipoControlador from '../../controlador/c_modelo_equipo'

const router:Router=Router()

router.use(bodyparse.json())

router.post("/registrar",ModeloEquipoControlador.registrar)
router.get("/consultar/:id",ModeloEquipoControlador.consultar)
router.get("/consultar-todos",ModeloEquipoControlador.consultarTodos)
router.put("/actualizar/:id",ModeloEquipoControlador.actualizar)
router.get("/consultar-por-equipo/:idEquipo",ModeloEquipoControlador.consultarTodos)
router.get("/consultar-por-equipo-nombre/:idEquipo/:nombreModelo",ModeloEquipoControlador.consultarPorIdEquipoYNombreModelo)
router.get("/consultar-por-nombre/:nombreModelo",ModeloEquipoControlador.consultarPorNombreModelo)


export default router