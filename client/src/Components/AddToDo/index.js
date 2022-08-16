
import React, {useState,useEffect} from 'react'
import { useMutation, gql } from '@apollo/client';
import {ADD_TODO} from '../../utils/mutations'
import { QUERY_TODOS } from '../../utils/queries';



function AddToDo (props) {
    const {nextId} = props
    const [addTodo, { data, loading, error }] = useMutation(ADD_TODO, {
        refetchQueries: [
          {query: QUERY_TODOS}, // DocumentNode object parsed with gql
          'todo' // Query name
        ],
      });
    if (loading) {console.log("We are requesting data")}
    if (error) {console.log("We have encountered an error", error)}
    if (data) {console.log("We have found data", data)}

    const [taskName, setTaskName] = useState("Enter new task name");
    const [time, setTime] = useState(0);

    const handleChange = (event) => {
        const { name, value } = event.target;
        if (name === 'taskname') {
            setTaskName(value);
        }
        if (name === 'tasktime') {
            setTime(parseInt(value));
        }
    }

    const firstAction = (event) => {
        event.preventDefault()
        console.log("testing")
    }

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        addTodo({ variables: { id: nextId, name:taskName, timeNeeded:time } });
    }

   
    return(
        <div className="CRUD-Post">
            <form>
            <button type="submit"
                    className="btn btn-primary CRUD-Post"
                    data-bs-toggle="modal"
                    data-bs-target="#addModal"
                    onClick={firstAction}
                   >
                    Add New Task
                </button>
                </form>



            <form className="modal fade" id="addModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" onSubmit={handleFormSubmit}>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Add a new task</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div>
                            <div className="modal-body d-flex">
                                <div className="input-group mb-3">
                                    <span className="input-group-text" id="basic-addon1">Task Name:</span>
                                    <input type='text'
                                        className="form-control"
                                        aria-label="TaskName"
                                        aria-describedby="basic-addon1"
                                        name="taskname"
                                        value={taskName}
                                        onChange={handleChange}>
                                    </input>
                                </div>
                            </div>
                            <div className="modal-body d-flex">
                                <div className="input-group mb-3">
                                    <span className="input-group-text" id="basic-addon1" >Time to complete (Minutes): </span>
                                    <input type='text'
                                        className="form-control"
                                        aria-label="TaskName"
                                        aria-describedby="basic-addon1"
                                        name="tasktime"
                                        value={time}
                                        onChange={handleChange}>
                                    </input>
                                </div>
                            </div>
                        </div>

                        <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" >Close</button>
                                <button type="submit" className="btn btn-primary" data-bs-dismiss="modal" >Save changes</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default AddToDo