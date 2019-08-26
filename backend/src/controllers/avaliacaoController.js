const Avaliacao = require('../models/avaliacao')

module.exports = {
    async index(req, res) {
        const avali = await Avaliacao.find(req.body)

        return res.json(avali)
    }, 
    
    async show(req, res) {
        const avali = await Avaliacao.findById(req.params.id)

        return res.json(avali)
    }, 

    async create(req, res) {

        const { data } = req.body
        const avaliaExist = await Avaliacao.findOne({ data })
        if (avaliaExist) {
            return res.json(avaliaExist)
        }

        const avali = await Avaliacao.create(req.body)

        return res.json(avali)
    },
    
    async edit(req, res) {
        const avali = await Avaliacao.findByIdAndUpdate(req.params.id, req.body, { new: true })

        return res.json(avali)
    },
    async delete(req, res){
        await Avaliacao.findByIdAndDelete(req.params.id)

        return res.send()
        }
}