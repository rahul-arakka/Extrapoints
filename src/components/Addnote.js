import React, {useContext, useState} from "react";
import noteContext from "../context/notes/noteContext";

const Addnote = () => {
    const context = useContext(noteContext);
    const {addNote} = context;

    const [field, setField] = useState({title:"", description:"", tag:"default"})

    const onChange = (e)=>{
        setField({...field, [e.target.name]: e.target.value})
    }

    const handleClick = (e)=>{
        e.preventDefault();
        addNote(field.title, field.description, field.tag);

    }

  return (
    <div className="container">
      <form className="container my-2">
        <h2>Add a Note</h2>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            onChange={onChange}
            aria-describedby="titleHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <input
            type="text"
            className="form-control"
            id="description"
            name="description"
            onChange={onChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="tag" className="form-label">
            Tag
          </label>
          <input
            type="text"
            className="form-control"
            id="tag"
            name="tag"
            onChange={onChange}
          />
        </div>

        <button type="submit" className="btn btn-dark" onClick={handleClick}>
          Add Note
        </button>
      </form>
    </div>
  );
};

export default Addnote;
