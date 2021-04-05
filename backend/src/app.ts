import express from 'express'
import logger from 'morgan'
import cors from 'cors'

import moduloEquipo from "./rutas/equipo/index"

const app=express()

const nombreApi:string="/api"

app.set("puerto",8080)


app.use(logger("dev"))
.use(cors())
// modulos
app.use(`${nombreApi}/equipo`,moduloEquipo)




export default app