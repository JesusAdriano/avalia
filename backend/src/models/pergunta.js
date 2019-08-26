const { Schema, model } = require('mongoose')

const PerguntaSchema = new Schema({
    
    area: {  
        type: Schema.Types.String,
        ref: 'Area',
       // required: true
    },

    pergunta: {
        type: String,
       // required: true
    }

}, { 
    timestamps: true  
})

module.exports = model('Pergunta', PerguntaSchema)