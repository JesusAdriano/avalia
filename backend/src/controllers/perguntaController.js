const Pergunta = require('../models/pergunta')

module.exports = {
    async index(req, res) {
        const pergunta = await Pergunta.find(req.body)

        return res.json(pergunta)
    }, 
    
    async show(req, res) {
        const pergunta = await Pergunta.findById(req.params.id)

        return res.json(pergunta)
    }, 

    async create(req, res) {
        const pergunta = await Pergunta.create(req.body)

        return res.json(pergunta)
    },
    
    async edit(req, res) {
        const pergunta = await Pergunta.findByIdAndUpdate(req.params.id, req.body, { new: true })

        return res.json(pergunta)
    },
    async delete(req, res){
        await Pergunta.findByIdAndDelete(req.params.id)

        return res.send()
        }
}
