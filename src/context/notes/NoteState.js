import React, { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) =>{
    
    const notesInitial = [
            
                {
                  "_id": "62c1d7f85f0fb26fef5446edbf4",
                  "user": "62c17ef70fb26ef5446edbf2",
                  "title": "tempNOte1",
                  "description": "com",
                  "tag": "gen",
                  "date": "2022-07-03T11:37:41.188Z",
                  "__v": 0
                },
                {
                  "_id": "62c180957sb2621418f4d3ac92",
                  "user": "62c17ef70fb26ef5446edbf2",
                  "title": "tempNOte2",
                  "description": "com",
                  "tag": "gen",
                  "date": "2022-07-03T11:42:13.773Z",
                  "__v": 0
                },
                {
                  "_id": "62cd17f850fb26eff5446edbf4",
                  "user": "62c17ef70fb26ef5446edbf2",
                  "title": "tempNOte1",
                  "description": "com",
                  "tag": "gen",
                  "date": "2022-07-03T11:37:41.188Z",
                  "__v": 0
                },
                {
                  "_id": "62c180957b26d214d18f43ac92",
                  "user": "62c17ef70fb26ef5446edbf2",
                  "title": "tempNOte2",
                  "description": "com",
                  "tag": "gen",
                  "date": "2022-07-03T11:42:13.773Z",
                  "__v": 0
                },
                {
                  "_id": "62c180957db26d21418f43ac92",
                  "user": "62c17ef70fb26ef5446edbf2",
                  "title": "tempNOte2",
                  "description": "com",
                  "tag": "gen",
                  "date": "2022-07-03T11:42:13.773Z",
                  "__v": 0
                }
              
        ]
    let x = 1;
    const [notes, setNotes] = useState(notesInitial)

    // Add a note
    // TODO : API call
    const addNote = (title, description, tag)=>{
      console.log("note added");
      const note = {
        "_id": `62c180957b26d21418f4${x}3ac92`,
        "user": "62c17ef70fb26ef5446edbf2",
        "title": title,
        "description": description,
        "tag": tag,
        "date": "2022-07-03T11:42:13.773Z",
        "__v": 0
      }
      x++;
      setNotes(notes.concat(note));
    }

    // Delete a note
    // TODO : API call
    const deleteNote = (id)=>{
      console.log("deleting a note with id", id);
      const newNotes = notes.filter((note)=>{return note._id !== id});
      setNotes(newNotes);
      x++;
    }
    
    // Edit a note
    const editNote = ()=>{

    }


    return(
        <NoteContext.Provider value={{notes, setNotes, addNote, deleteNote, editNote}}>    
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;