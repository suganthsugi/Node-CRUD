const mongoose = require('mongoose')

const todoSchemea = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    desc: {
        type: String,
        require: true
    },
    completed: {
        type: Boolean,
        default:false
    }
})


module.exports = mongoose.model("Todo", todoSchemea)