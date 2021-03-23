const app = require('./app')
require('dotenv').config()



async function init() {
    await app.listen(process.env.PORT || 4000)
    console.log('Servidor ejecutandose en el puerto ' + process.env.PORT || 4000)
}

init()


module.exports = app