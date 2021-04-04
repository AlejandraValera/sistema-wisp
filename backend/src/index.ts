import app from "./app"

app.listen(app.get("puerto"),() => {
    console.log(`ejecutando servidor en el puerto =>>> ${app.get("puerto")}`)
})