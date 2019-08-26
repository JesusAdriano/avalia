const Resposta = require('../models/resposta')

module.exports = {
    async index(req, res) {
        const resposta = await Resposta.find(req.body)
        return res.json(resposta)
    },
    async show(req, res) {
        const resposta = await Resposta.findById(req.params.id)
        return res.json(resposta)
    },
    async create(req, res) {
        const resposta = await Resposta.create(req.body)
        return res.json(resposta)
    },
    async edit(req, res) {
        const resposta = await Resposta.findByIdAndUpdate(req.params.id, req.body, { new: true })
        return res.json(resposta)
    },
    async delete(req, res) {
        await Resposta.findByIdAndDelete(req.params.id)
        return res.send()
    }
}