const { Schema, model } = require('mongoose')

const AvaliacaoSchema = new Schema({
           
       time: {
            type: Schema.Types.ObjectId,
            ref: 'Time'
       },
       funci:{
           type: Schema.Types.ObjectId,
           reg: 'Funci'
            
    },
    data: String
},{ 
        timestamps: true   
    })
    

module.exports = model('Avaliacao', AvaliacaoSchema)