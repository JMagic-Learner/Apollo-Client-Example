import { gql } from '@apollo/client';

export const ADD_TODO = gql`
mutation addTodo( $id: Int!,  $name: String!, $timeNeeded: Int!) {
    addTodo(id: $id, name: $name, timeNeeded: $timeNeeded) {
      id
      name
      timeNeeded
    }
  }
`;


export const DELETE_TODO = gql`
mutation deleteTodo( $id: Int!) {
    deleteTodo(id: $id) {
      id
    }
  }
`;

export const EDIT_TODO = gql`
mutation editTodo( $id: Int!,  $name: String!, $timeNeeded: Int!) {
    editTodo(id: $id, name: $name, timeNeeded: $timeNeeded) {
      id
      name
      timeNeeded
    }
  }
`;

