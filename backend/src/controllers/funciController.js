const Funci = require('../models/funci')

module.exports = {

    async index(req, res) {
        const funci = await Funci.find(req.body)

        return res.json(funci)
    },

    async show(req, res) {
        const funci = await Funci.findById(req.params.id)

        return res.json(funci)
    },

    async create(req, res) {
        const { matricula } = req.body
        const funciExist = await Funci.findOne({ matricula })
        if (funciExist) {
            return res.json(funciExist)
        }
        const {
            nomeGuerra: nome,
            dependencia: {prefixo: dependencia}
        } = req.body

        const funci = await Funci.create(
            {
                matricula,
                nome,
                dependencia
            }
        )
        return res.json(funci)
    },

    async edit(req, res) {
        const funci = await Funci.findByIdAndUpdate(req.params.id, req.body, { new: true })

        return res.json(funci)
    },
    async delete(req, res) {
        await Funci.findByIdAndDelete(req.params.id)

        return res.send()
    }
}