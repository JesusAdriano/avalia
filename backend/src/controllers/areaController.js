const Area = require('../models/area')

module.exports = {
    async index(req, res) {
        const area = await Area.find(req.body)

        return res.json(area)
    },

    async show(req, res) {
        const area = await Area.findById(req.params.id)

        return res.json(area)
    },

    async create(req, res) {
        const area = await Area.create(req.body)

        return res.json(area)
    },

    async edit(req, res) {
        const area = await Area.findByIdAndUpdate(req.params.id, req.body, { new: true })

        return res.json(area)
    },
    async delete(req, res) {
        await Area.findByIdAndDelete(req.params.id)

        return res.send()
    }
}