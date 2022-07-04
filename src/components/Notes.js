import React, {useContext} from 'react'
import noteContext from "../context/notes/noteContext";
import Addnote from './Addnote';
import Noteitem from './Noteitem';

const Notes = () => {
  const context = useContext(noteContext);
  const {notes, addNote } = context;
  return (
    <div className="container row my-3">
        <Addnote/>
        <h2>Your Notes</h2>
        {notes.map((note)=>{
            return <Noteitem key={note._id} note ={note}/>
        })}
    </div>  
    
  )
}

export default Notes