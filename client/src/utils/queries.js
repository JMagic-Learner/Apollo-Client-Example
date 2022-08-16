import { gql } from '@apollo/client';


export const QUERY_TODOS = gql`
  query todo {
    todos {
      id
      name
      timeNeeded
    }
  }`

export const QUERY_SINGLE_TODO = gql`
  query singleTodo($id: Int!) {
    singleTodo (id: $id) {
      id
      name
      timeNeeded
    }
  }`


 