import React, { useEffect, useState } from 'react';
// import APIRequest from '../../API/fetch';
import { useQuery, gql } from '@apollo/client';
import { QUERY_TODOS } from '../../utils/queries'

import AddToDo from '../AddToDo';
import FindToDo from '../FindToDo';
import DeleteTodo from '../DeleteToDo';
import EditToDo from '../EditToDo';

function Demonstration() {

    const { loading, error, data } = useQuery(QUERY_TODOS);
    if (loading) {
        console.log("We are requesting data")
    }
    if (error) { console.log("We have encountered an error", error) }
    if (data) { console.log("We have found data", data) }
    const todosArray = data?.todos || [];
    const maxlength = todosArray.length

    const [searchID, setSearchID] = useState(null);
    const [maxID, setMaxID] = useState(todosArray[maxlength])

    useEffect(() => {
        
        console.log(maxID)
    }, [maxID])
    // PUT STATE
    const [update, setUpdate] = useState(0);
    const [updateName, setUpdateName] = useState();
    const [updateTime, setUpdateTime] = useState(0);

    const handleChange = (event) => {
        event.preventDefault()
        const { name, value } = event.target;

        if (name === 'searchID') {
            console.log("we are updating the value of searchID")
            setSearchID(parseInt(value));
        }
    }

    const actionPUT = (event) => {
        event.preventDefault()
        let idTarget = parseInt(event.target.id)
        let nameTarget = event.target.name
        let timeTarget = parseInt(event.target.value)
        setUpdateName(nameTarget)
        setUpdate(idTarget);
        setUpdateTime(timeTarget);
    }

    const actionGET = (event) => {
        event.preventDefault()
        let idTarget = parseInt(event.target.value)
        setSearchID(idTarget);
    }


    return (
        <section className="demonstration-container">
            <h2> ToDo API - Returned Data </h2>
            <form className="search-container" >
                <div className="input-group mb-3 d-flex">
                    <span className="input-group-text" id="basic-addon1">Task Name:</span>
                    <input type='text'
                        className="form-control"
                        aria-label="TaskName"
                        aria-describedby="basic-addon1"
                        name="searchID"
                        value={searchID}
                        onChange={handleChange}>
                    </input>
                    <button className="btn btn-primary"
                        type="submit"
                        value={searchID}
                        data-bs-toggle="modal"
                        data-bs-target="#searchresultmodal"
                        onClick={actionGET}> SEARCH BY ID </button>
                </div>
            </form>

            <div className="CRUD-Operations" >
                <AddToDo nextId={todosArray.length} />
                {/* <button type="submit"
                    className="btn btn-primary CRUD-Button"
                    data-bs-toggle="modal"
                    data-bs-target="#editModal"
                    onClick={actionPUT}>
                    Edit a Task
                </button> */}
            </div>
            <br></br>
            <section className='todo-container'>

                {todosArray.map((item, index) => {
                    return (

                        <div key={item._id} className="card todo-items todo-item" >
                            <div className="card-body">
                                <h5 className="card-title">Task ID: {item.id}</h5>
                                <h6 className="card-subtitle mb-2 text-muted">Task Name: {item.name}</h6>
                                <p className="card-text"> {item.timeNeeded} minutes is needed to complete this task</p>
                                <div className="CRUD-Operations" >
                                    <DeleteTodo deleteID={item.id} />
                                    <button className="btn btn-secondary CRUD-Edit"
                                        id={item.id}
                                        name={item.name}
                                        value={item.timeNeeded}
                                        type="submit"
                                        data-bs-toggle="modal"
                                        data-bs-target="#editModal"
                                        onClick={actionPUT}
                                    > EDIT
                                    </button>
                                    <EditToDo editID={update} editName={updateName} editTime={updateTime} />
                                </div>
                            </div>
                        </div>

                    )
                })}

            </section>
           
                <FindToDo inputID={searchID} />
            
        </section>
    )
}

export default Demonstration