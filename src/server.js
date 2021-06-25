const express = require('express')
const route = require('./route')
const path = require('path')

const server = express()

server.set('view engine', 'ejs') /* esse nome view não tem nada a ver com o nome da pasta */

server.use(express.static('public'))

server.set('views', path.join(__dirname, 'views')) /* aqui sim é o nome da pasta, o join junta o dirname(src) com o views */

server.use(express.urlencoded({extended: true}))

server.use(route)

server.listen(3000, () => console.log("RODANDO BUCETA"))