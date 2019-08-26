const { Schema, model } = require('mongoose')

const RespostaSchema = new Schema({

    pergunta: {
        type: Schema.Types.ObjectId,
        ref: 'Pergunta'
     //   required: true
    },
    avaliacao: {
        type: Schema.Types.ObjectId,
        ref: 'Avaliacao'
      //  required: true
    },
    resposta: {
        type: String
 //       required: true
    }
}, {
        timestamps: true
    })

module.exports = model('Resposta', RespostaSchema)