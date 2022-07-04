import React, { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) =>{
    
    const notesInitial = [
            
                {
                  "_id": "62c17f850fb26ef5446edbf4",
                  "user": "62c17ef70fb26ef5446edbf2",
                  "title": "tempNOte1",
                  "description": "com",
                  "tag": "gen",
                  "date": "2022-07-03T11:37:41.188Z",
                  "__v": 0
                },
                {
                  "_id": "62c180957b2621418f43ac92",
                  "user": "62c17ef70fb26ef5446edbf2",
                  "title": "tempNOte2",
                  "description": "com",
                  "tag": "gen",
                  "date": "2022-07-03T11:42:13.773Z",
                  "__v": 0
                },
                {
                  "_id": "62c17f850fb26ef5446edbf4",
                  "user": "62c17ef70fb26ef5446edbf2",
                  "title": "tempNOte1",
                  "description": "com",
                  "tag": "gen",
                  "date": "2022-07-03T11:37:41.188Z",
                  "__v": 0
                },
                {
                  "_id": "62c180957b2621418f43ac92",
                  "user": "62c17ef70fb26ef5446edbf2",
                  "title": "tempNOte2",
                  "description": "com",
                  "tag": "gen",
                  "date": "2022-07-03T11:42:13.773Z",
                  "__v": 0
                },
                {
                  "_id": "62c17f850fb26ef5446edbf4",
                  "user": "62c17ef70fb26ef5446edbf2",
                  "title": "tempNOte1",
                  "description": "com",
                  "tag": "gen",
                  "date": "2022-07-03T11:37:41.188Z",
                  "__v": 0
                },
                {
                  "_id": "62c180957b2621418f43ac92",
                  "user": "62c17ef70fb26ef5446edbf2",
                  "title": "tempNOte2",
                  "description": "com",
                  "tag": "gen",
                  "date": "2022-07-03T11:42:13.773Z",
                  "__v": 0
                },
                {
                  "_id": "62c17f850fb26ef5446edbf4",
                  "user": "62c17ef70fb26ef5446edbf2",
                  "title": "tempNOte1",
                  "description": "com",
                  "tag": "gen",
                  "date": "2022-07-03T11:37:41.188Z",
                  "__v": 0
                },
                {
                  "_id": "62c180957b2621418f43ac92",
                  "user": "62c17ef70fb26ef5446edbf2",
                  "title": "tempNOte2",
                  "description": "com",
                  "tag": "gen",
                  "date": "2022-07-03T11:42:13.773Z",
                  "__v": 0
                }
              
        ]
    
    const [notes, setNotes] = useState(notesInitial)
    return(
        <NoteContext.Provider value={{notes, setNotes}}>    
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;