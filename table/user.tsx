const mongoose = require('mongoose')

const LoginSchema = new mongoose.Schema({
    name : {type : String, required : true},
    Email : {type : String, required : true, unique : true},
    password : {type : String, required : true}
}, {timestamps : true});

mongoose.models = {};
export default mongoose.model("login",LoginSchema);