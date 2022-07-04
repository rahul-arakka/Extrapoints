import React from 'react'

const Noteitem = (props) => {
    const {note} = props;
    console.log(note);
  return (
    <div className='col-md-3 my-3'>
        <div className="card">
            <div className="card-body">
                <div className="d-flex">
                    <h5 className="card-title">{note.title}</h5>
                    <i className="fa-solid mx-2 fa-pen-to-square"></i>
                    <i className="fa-solid mx-2 fa-trash-can"></i>
                </div>
            <p className="card-text">{note.description}</p>
            
            </div>
        </div>
    </div>
    
  )
}

export default Noteitem