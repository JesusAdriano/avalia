const { Schema, model } = require('mongoose')

const TimeSchema = new Schema({

    time: {
        type: String,        
        required: true
    }},{
    
        timestamps: true  
})

module.exports = model('Time', TimeSchema)