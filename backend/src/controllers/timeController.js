const Time = require('../models/time')

module.exports = {
    async index(req, res) {
        const time = await Time.find(req.body)

        return res.json(time)
    }, 
    
    async show(req, res) {
        const time = await Time.findById(req.params.id)

        return res.json(time)
    }, 

    async create(req, res) {
        const time = await Time.create(req.body)

        return res.json(time)
    },
    
    async edit(req, res) {
        const time = await Time.findByIdAndUpdate(req.params.id, req.body, { new: true })

        return res.json(time)
    },
    async delete(req, res){
        await Time.findByIdAndDelete(req.params.id)

        return res.send()
        }
}