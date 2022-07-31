const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/todolist')

const userSchema = mongoose.Schema({
  taskname:String,
  username:String
})


module.exports = mongoose.model("user" , userSchema)

