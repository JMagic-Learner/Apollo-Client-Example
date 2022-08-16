import React from 'react'
import { useMutation, gql } from '@apollo/client';
import { DELETE_TODO } from '../../utils/mutations';
import { QUERY_TODOS } from '../../utils/queries';

function DeleteTodo(props) {
    const { deleteID } = props
    const [deleteTodo, { data, loading, error }] = useMutation(DELETE_TODO, {
        refetchQueries: [
            { query: QUERY_TODOS }, // DocumentNode object parsed with gql
            'todo' // Query name
        ],
    });
    if (loading) { console.log("We are requesting data for DELETE_TODO") }
    if (error) { console.log("We have encountered an error for DELETE_TODO", error) }
    if (data) { console.log("We have found data for DELETE_TODO", data) }


    const handleFormSubmit = async (event) => {

        event.preventDefault();
        console.log(deleteID)
        let converted = parseInt(deleteID)
        deleteTodo({ variables: { id: converted } });
    }

    
    return (
        <div>
            <form onSubmit={handleFormSubmit}>
                <button className="btn btn-secondary CRUD-Delete" id={deleteID} type="submit" > DELETE </button>
            </form>
        </div>
    )
}

export default DeleteTodo