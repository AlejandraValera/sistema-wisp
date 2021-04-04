import express from 'express'
import logger from 'morgan'
import cors from 'cors'

const app=express()

app.set("puerto",8080)


app.use(logger("dev"))
.use(cors())


export default app