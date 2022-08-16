const { Schema, model } = require('mongoose');
const mongoose = require('mongoose')
const AutoIncrement = require('mongoose-sequence')(mongoose);

const todoSchema = new Schema({
id:{
    type:Number,
    trim:true
},
name:{
    type: String,
    trim:true
},
timeNeeded:{
    type: Number,
    trim:true
}
},
// { _id: false }
);
//  Unlike SQL databases, the auto-increment feature is not supported in MongoDB. 
// MongoDB does provide the ObjectId, which can be used as a primary key– a value that makes each document unique within a collection. This functionality is useful to a certain degree, 
// but not sufficient for real-time operations 
// Auto increment is provided via Mongoose Sequence
todoSchema.plugin(AutoIncrement, {inc_field: 'id'});


const Todo = model('Todo', todoSchema);

module.exports = Todo;