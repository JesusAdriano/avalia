const { Schema, model } = require('mongoose')

const AreaSchema = new Schema({
    area: {
        type: String,        
        //required: true
    }
     
    }, { 
        timestamps: true  
})

module.exports = model('Area', AreaSchema)