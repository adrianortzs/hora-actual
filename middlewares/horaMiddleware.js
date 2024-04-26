const horaMiddleware = (req, res, next) => {
    const horas = new Date().getHours()
    
    if (horas >= 15 && horas < 24) {
        next()
    } else {
        res.locals.mensaje = "Aún no es la hora, espera hasta las 12:00 para entrar"
        return res.redirect('/?mensaje=' + encodeURIComponent(res.locals.mensaje));
    }
}

module.exports = horaMiddleware