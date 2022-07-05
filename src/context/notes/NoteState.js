import React, { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const host = 'http://localhost:5000';
  const notesInitial = [];
  const [notes, setNotes] = useState(notesInitial);
  
  const fetchNotes = async()=>{
    const response = await fetch(`${host}/api/notes/fetchnotes`, {
      method:'GET',
      headers: {
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjJjMTdlZjcwZmIyNmVmNTQ0NmVkYmYyIn0sImlhdCI6MTY1Njg0ODExOX0.IMGQ3g-ff3ZzQGgUjXKGqtXOxaib7n_cRhOQQRWoAW0",
        "Content-Type": "application/json"
      } 

    });
    const json = await response.json();
    console.log(json);
    setNotes(json);
  }

  // Add a note
  // TODO : API call
  const addNote = async(title, description, tag) => {
    const response = await fetch(`${host}/api/notes/addnote`, {
      method:'POST',
      headers: {
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjJjMTdlZjcwZmIyNmVmNTQ0NmVkYmYyIn0sImlhdCI6MTY1Njg0ODExOX0.IMGQ3g-ff3ZzQGgUjXKGqtXOxaib7n_cRhOQQRWoAW0",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({title, description, tag})
    })

    // Logic to add Note in front-end.
    console.log("note added");
    const note = {
      title: title,
      description: description,
      tag: tag
    };
    setNotes(notes.concat(note));
  };

  // Delete a note
  const deleteNote = async(id) => {
    const response = await fetch(`${host}/api/notes/deletenote/${id}`,{
      method:'DELETE',
      headers: {
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjJjMTdlZjcwZmIyNmVmNTQ0NmVkYmYyIn0sImlhdCI6MTY1Njg0ODExOX0.IMGQ3g-ff3ZzQGgUjXKGqtXOxaib7n_cRhOQQRWoAW0",
        "Content-Type": "application/json"
      },
    })

    console.log("deleting a note with id "+ id);

    // Logic to delete a note in front-end
    const newNotes = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNotes);
    
  };

  // Edit a note
  const editNote = async (id, title, description, tag) => {
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: 'POST',
      headers: {
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjJjMTdlZjcwZmIyNmVmNTQ0NmVkYmYyIn0sImlhdCI6MTY1Njg0ODExOX0.IMGQ3g-ff3ZzQGgUjXKGqtXOxaib7n_cRhOQQRWoAW0",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({title, description, tag})
    });
    const json = await response.json();

  // Login to edit in client i.e, in front-end
  for(let index = 0; index<notes.length;index++){
    const element = notes[index];
    if(element._id === id){
      element.title = title;
      element.description = description;
      element.tag = tag;
    }
  }
};


  return (
    <NoteContext.Provider
      value={{ notes, setNotes, addNote, deleteNote, editNote, fetchNotes }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
