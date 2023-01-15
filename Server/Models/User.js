const mongoose = require('mongoose');
const {Schema} = mongoose
const workoutSchema = new Schema({
    name:{
        type: String ,
        required : true
    },
    email:{
        type: String ,
        required : true,
        unique:true
    },
    password:{
        type:String,
        require: true
    }
});
module.exports = mongoose.model('User', workoutSchema);