
import React, { useState, useEffect } from 'react'
import { useQuery, gql } from '@apollo/client';
import { QUERY_SINGLE_TODO } from '../../utils/queries'
import AddToDo from '../AddToDo';




function FindToDo(props) {
    const { inputID } = props
    
    const  {data, loading, error}  = useQuery(QUERY_SINGLE_TODO, {
        variables: { id: inputID },
    });
    if (loading) { console.log("We are requesting a single todo") }
    if (error) { 
        console.log("We have encountered an error for single todo", error)
    }
    if (data) { console.log("We have found data for single todo", data) }
    const single = data?.singleTodo || [];

    


    const closeModal= async (event) => {
        event.preventDefault();
        console.log(single)
    }


    return (
        <div>
        <form className="modal fade" id="searchresultmodal" tabindex="-1" aria-labelledby="searchresultmodal" aria-hidden="true" >
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">

                        {/* MODULE TITLE DEPENDS ON HTTPMETHOD */}


                        <h5 className="modal-title" id="exampleModalLabel">Search results</h5>



                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={closeModal}></button>
                    </div>

                    {/* MODULE INPUT FIELDS  DEPENDS ON HTTPMETHOD */}


                    {single !== [] && (
                        <div>
                         <div className="modal-body d-flex" >
                         <div className="input-group mb-3">
                             <span className="input-group-text" id="basic-addon1">ID</span>
                             <input type='text'
                                 className="form-control"
                                 aria-label="TaskName"
                                 aria-describedby="basic-addon1"
                                 value={single.id}
                             >
                             </input>
 
                         </div>
                     </div>
                     <div className="modal-body d-flex" >
                         <div className="input-group mb-3">
                             <span className="input-group-text" id="basic-addon1">Task Name</span>
                             <input type='text'
                                 className="form-control"
                                 aria-label="TaskName"
                                 aria-describedby="basic-addon1"
 
                                 value={single.name}
                             >
                             </input>
                         </div>
                     </div>
                     <div className="modal-body d-flex" >
                         <div className="input-group mb-3">
                             <span className="input-group-text" id="basic-addon1">Time to complete</span>
                             <input type='text'
                                 className="form-control"
                                 aria-label="TaskName"
                                 aria-describedby="basic-addon1"
                                 value={single.timeNeeded}
                             >
                             </input>
                         </div>
                     </div>
                     </div>
                    )}
                   


                </div>
            </div>
        </form>
        </div>
    )
    
}

export default FindToDo