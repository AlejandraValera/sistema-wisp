import express from 'express'
import logger from 'morgan'
import cors from 'cors'
// modulos
import moduloEquipo from "./rutas/equipo/index"
import moduloModeloEquipo from './rutas/modelo-equipo/index'

const app=express()

const nombreApi:string="api-wisp"

app.set("puerto",8080)


app.use(logger("dev"))
.use(cors())
// rutas modulos
app.use(`/${nombreApi}/equipo`,moduloEquipo)
app.use(`/${nombreApi}/modelo-equipo`,moduloModeloEquipo)




export default app