const express = require("express")
const bodyParser = require('body-parser')
/* const rotasUsu = require('./controllers/users') */
const cors = require("cors")

const app = express()
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
/* app.use('/usuarios', rotasUsu) */

app.use(express.static(__dirname + "/public"))


const PORT = process.env.PORT || 3000

app.listen(PORT, () => console.log(`Escutando na porta:${PORT}`))

module.exports = app