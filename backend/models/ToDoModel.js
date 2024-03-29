const mongoose = require('mongoose')
const router = require('../routes/ToDoRoute')

const todoschema = new mongoose.Schema({
    text: {
        type : String,
        require: true
    }
})

module.exports = mongoose.model('ToDo',todoschema)
module.exports = router;
