const { Todos } = require('../models');
const mongoose = require('mongoose')
const AutoIncrement = require('mongoose-sequence')(mongoose);

const resolvers = {
  //.find , .fineOne, .remove are prototype methods of Mongoose Collections
    Query: {
        todos: async () => {
          return Todos.find().sort({"id":+1});
        },

        singleTodo: async (parent, { id }) => {
          return Todos.findOne({ id});
        },
    },

    Mutation: {
        addTodo: async (parent, { id, name, timeNeeded }) => {
          const todos = await Todos.create({ id, name, timeNeeded });
          return todos
        },
        deleteTodo: async (parent, { id }) => {
          //  Unlike SQL databases, the auto-increment feature is not supported in MongoDB. 
          // MongoDB does provide the ObjectId, which can be used as a primary key– a value that makes each document unique within a collection. This functionality is useful to a certain degree, 
          // but not sufficient for real-time operations 
          // Auto increment is provided via Mongoose Sequence
          const todos = await Todos.findOne({id}).remove()
          const check = await Todos.count()
          console.log(check)
          if (check === 0) {
            // counterReset is a collecction method provided by mongoose-sequence
            Todos.counterReset('id', function(err) {
              // Now the counter is 0
          });
          }

          // console.log(todos)
          return todos
        },
        editTodo: async (parent, {id, name, timeNeeded}) => {
          const todos = await Todos.findOne({id}).update(
            {id,name, timeNeeded}
          )
          return todos
        }
    },
}

    module.exports = resolvers;