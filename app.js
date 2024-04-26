const express = require("express")
const endrouteRouter = require("./routes/endroute")
const indexRouter = require("./routes/index")
const horaMiddleware = require("./middlewares/horaMiddleware")

const app = express()

app.use("/", indexRouter)
app.use("/endroute", horaMiddleware, endrouteRouter)

const port = 3000
app.listen(port, () => {
    console.log(`Example app listening on http://localhost:${port}`)
})