const jwt = require('jsonwebtoken')
const keys = require("./config/keys");

/*Middleware */
function authenticate(req, res, next) {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if (token == null) return res.sendStatus(401)

    jwt.verify(token, keys.secretOrKey, (err, payload) => {
        console.log(err)
        if (err) return res.sendStatus(403)
        req.payload = payload
        next()
    })
}

module.exports = authenticate
