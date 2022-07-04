import React, { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) =>{
    
    const notesInitial = [
            
                {
                  "_id": "62c17f850fb26fef5446edbf4",
                  "user": "62c17ef70fb26ef5446edbf2",
                  "title": "tempNOte1",
                  "description": "com",
                  "tag": "gen",
                  "date": "2022-07-03T11:37:41.188Z",
                  "__v": 0
                },
                {
                  "_id": "62c180957sb2621418f43ac92",
                  "user": "62c17ef70fb26ef5446edbf2",
                  "title": "tempNOte2",
                  "description": "com",
                  "tag": "gen",
                  "date": "2022-07-03T11:42:13.773Z",
                  "__v": 0
                },
                {
                  "_id": "62c17f850fb26eff5446edbf4",
                  "user": "62c17ef70fb26ef5446edbf2",
                  "title": "tempNOte1",
                  "description": "com",
                  "tag": "gen",
                  "date": "2022-07-03T11:37:41.188Z",
                  "__v": 0
                },
                {
                  "_id": "62c180957b26d21418f43ac92",
                  "user": "62c17ef70fb26ef5446edbf2",
                  "title": "tempNOte2",
                  "description": "com",
                  "tag": "gen",
                  "date": "2022-07-03T11:42:13.773Z",
                  "__v": 0
                },
                {
                  "_id": "62c180957b26d21418f43ac92",
                  "user": "62c17ef70fb26ef5446edbf2",
                  "title": "tempNOte2",
                  "description": "com",
                  "tag": "gen",
                  "date": "2022-07-03T11:42:13.773Z",
                  "__v": 0
                }
              
        ]
    
    const [notes, setNotes] = useState(notesInitial)

    // Add a note
    const addNote = (title, description, tag)=>{
      console.log("note added");
      const note = {
        "_id": "62c180957b26d21418f43ac92",
        "user": "62c17ef70fb26ef5446edbf2",
        "title": title,
        "description": description,
        "tag": tag,
        "date": "2022-07-03T11:42:13.773Z",
        "__v": 0
      }

      setNotes(notes.concat(note));
    }

    // Delete a note
    const deleteNote = ()=>{
      
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