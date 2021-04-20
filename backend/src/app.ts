import express from 'express'
import logger from 'morgan'
import cors from 'cors'
// modulos
import moduloEquipo from "./rutas/equipo/index"
import moduloModeloEquipo from './rutas/modelo-equipo/index'
import moduloCliente from './rutas/cliente/index'

const app=express()

const nombreApi:string="api-wisp"

app.set("puerto",8080)


app.use(logger("dev"))
.use(cors())
// rutas modulos
app.use(`/${nombreApi}/configuracion/equipo`,moduloEquipo)
app.use(`/${nombreApi}/configuracion/modelo-equipo`,moduloModeloEquipo)
app.use(`/${nombreApi}/configuracion/cliente`,moduloCliente)




export default app