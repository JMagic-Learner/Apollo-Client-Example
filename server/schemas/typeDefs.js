const { gql } = require('apollo-server');

const typeDefs = gql`
  type Todos {
    id: Int
    name: String
    timeNeeded:Int
  }

  type Query {
    todos: [Todos]
    singleTodo(id: Int!): Todos
  }

  type Mutation {
    addTodo(id: Int!, name: String!, timeNeeded: Int!): Todos
    deleteTodo(id: Int!): Todos
    editTodo(id: Int!, name: String!, timeNeeded: Int!): Todos
  }
`;

module.exports = typeDefs;