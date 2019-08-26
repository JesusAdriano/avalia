const express = require('express')
const RespostaController = require('./controllers/perguntaController')
const PerguntaController = require('./controllers/respostaController')
const AreaController = require('./controllers/areaController')
const FunciController = require('./controllers/funciController')
const TimeController = require('./controllers/timeController')
const AvaliacaoController = require('./controllers/avaliacaoController')

const routes = express.Router()

//Resposta
routes.get('/resposta', RespostaController.index)
routes.get('/resposta/:id', RespostaController.show)
routes.post('/resposta', RespostaController.create)
routes.put('/resposta/:id', RespostaController.edit)
routes.delete('/resposta/:id', RespostaController.delete)

//Perguntas
routes.get('/pergunta', PerguntaController.index)
routes.get('/pergunta/:id', PerguntaController.show)
routes.post('/pergunta', PerguntaController.create)
routes.put('/pergunta/:id', PerguntaController.edit)
routes.delete('/pergunta/:id', PerguntaController.delete)

//Area
routes.get('/area', AreaController.index)
routes.get('/area/:id', AreaController.show)
routes.post('/area', AreaController.create)
routes.put('/area/:id', AreaController.edit)
routes.delete('/area/:id', AreaController.delete)

//Funci
routes.get('/funci', FunciController.index)
routes.get('/funci/:id', FunciController.show)
routes.post('/funci', FunciController.create)
routes.put('/funci/:id', FunciController.edit)
routes.delete('/funci/:id', FunciController.delete)

//Time
routes.get('/time', TimeController.index)
routes.get('/time/:id', TimeController.show)
routes.post('/time', TimeController.create)
routes.put('/time/:id', TimeController.edit)
routes.delete('/time/:id', TimeController.delete)

//Avaliacao
routes.get('/avaliacao', AvaliacaoController.index)
routes.get('/avaliacao/:id', AvaliacaoController.show)
routes.post('/avaliacao', AvaliacaoController.create)
routes.put('/avaliacao/:id', AvaliacaoController.edit)
routes.delete('/avaliacao/:id', AvaliacaoController.delete)

module.exports = routes