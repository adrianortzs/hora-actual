const express = require("express")
const router = express.Router()

router.get("/", (req, res) => {
    const horaActual = new Date().toLocaleTimeString("en-GB")
    const mensaje = req.query.mensaje || ''

    res.send(`<h1>Bienvenido</h1>
    <p>La hora actual es: ${horaActual}</p>
    <form action="/endroute" method="GET">
      <button type="submit">Entrar</button>
    </form>
    <p>${mensaje}</p>
    `)
})

module.exports = router