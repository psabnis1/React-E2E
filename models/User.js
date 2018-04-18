const mongoose = require('mongoose');
//const Schema = mongoose.Schema;
//Below statement - This means fetch property Schema from the object mongoose 
//and assign it to new variable called Schema
const {Schema} = mongoose; 

const userSchema = new Schema({
    googleId : String
});

mongoose.model('users', userSchema);