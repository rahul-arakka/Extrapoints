import React from 'react'

const Noteitem = (props) => {
    const {note} = props;
    console.log(note);
  return (
    <div className='col-md-3 my-3'>
        <div className="card">
            <div className="card-body">
            <h5 className="card-title">{note.title}</h5>
            <p className="card-text">{note.description}</p>
            <a href="/" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    </div>
    
  )
}

export default Noteitem