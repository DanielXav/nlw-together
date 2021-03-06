const express = require('express')
const QuestionController = require('./controllers/QuestionController')
const RoomController = require('./controllers/RoomController')

const route = express.Router() 

route.get('/', (req, res) => res.render("index", {page: 'enter-room'})) /* rotas, quando abre por ex o /, abre o index */
route.get('/create-pass', (req, res) => res.render("index", {page: 'create-pass'}))

route.post('/create-room', RoomController.create)
route.get('/room/:room', RoomController.open) 
route.post('/enterroom', RoomController.enter)

route.post('/question/create/:room', QuestionController.create)
// Formato que o formulário de dentro da modal tem que passar informação
route.post('/question/:room/:question/:action', QuestionController.index)

module.exports = route