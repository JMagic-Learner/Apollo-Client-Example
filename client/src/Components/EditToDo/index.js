import React, { useState, useEffect} from 'react'
import { EDIT_TODO } from '../../utils/mutations'
import { QUERY_TODOS } from '../../utils/queries'
import {useMutation, useQuery} from '@apollo/client';


function EditToDo(props) {
    const {editID, editName, editTime} = props
  
    const [defaultName, setdefaultName] = useState("Update Task Name");
    const [defaultTime, setdefaultTime] = useState("Update time required");
   

    useEffect(()=>{
       console.log(editID, editName, editTime)
    }, [])

    const [ editTodo, {data,loading,error}] = useMutation(EDIT_TODO, {
        refetchQueries: [
        { query: QUERY_TODOS }, // DocumentNode object parsed with gql
        'todo' // Query name
    ]},);
    if (loading) {console.log("We are requesting a edit todo")}
    if (error) {console.log("We have encountered an error for edit todo", error)}
    if (data) {console.log("We have found data for edit todo", data)}


    const handleFormSubmit = async (event) => {
        event.preventDefault();
        editTodo({ variables: { id: editID, name:defaultName, timeNeeded: defaultTime } });
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        if (name === 'taskname') {
            console.log("We are changing")
            setdefaultName(value);
        }
        if (name === 'tasktime') {
            setdefaultTime(parseInt(value));
        }
      
    }

    return (
   

            <form className="modal fade" id="editModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" onSubmit={handleFormSubmit}>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Edit this task</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div>
                        <div className="modal-body d-flex">
                                <div className="input-group mb-3">
                                    <span className="input-group-text" id="basic-addon1">Task ID:</span>
                                    <input type='text'
                                        className="form-control"
                                        aria-label="TaskName"
                                        aria-describedby="basic-addon1"
                                        name="taskid"
                                        value={editID}
                                        onChange={handleChange}>
                                    </input>
                                </div>
                            </div>
                            <div className="modal-body d-flex">
                                <div className="input-group mb-3">
                                     <span className="input-group-text" id="basic-addon1">Original: {editName }</span>
                                    <input type='text'
                                        className="form-control"
                                        aria-label="TaskName"
                                        aria-describedby="basic-addon1"
                                        name="taskname"
                                        value={defaultName}
                                        onChange={handleChange}>
                                    </input>
                                </div>
                            </div>
                            <div className="modal-body d-flex">
                                <div className="input-group mb-3">
                                    <span className="input-group-text" id="basic-addon1" >Original Time (Minutes): {editTime} </span>
                                    <input type='text'
                                        className="form-control"
                                        aria-label="TaskTime"
                                        aria-describedby="basic-addon1"
                                        name="tasktime"
                                        value={defaultTime}
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
      
    )

}

export default EditToDo