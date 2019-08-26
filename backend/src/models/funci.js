const { Schema, model } = require('mongoose')

const FunciSchema = new Schema({
    matricula: {
        type: String,
        required: true
    },

    nome: {
        type: String,
        //required: true
    },

    telefone: {
        type: String,
        //required: true
    },

    email: {
        type: String,
        //required: true
    },

    dependencia: {
        type: String,
        //required: true
    },

    perguntas: [{
        type: Schema.Types.ObjectId,
        ref: 'Pergunta'
    }],
}, { 
    timestamps: true   
})

module.exports = model('Funci', FunciSchema)
