import React, {useContext, useState} from "react";
import noteContext from "../context/notes/noteContext";

const Addnote = () => {
    const context = useContext(noteContext);
    const {addNote} = context;

    const [field, setField] = useState({title:"", description:"", tag:""})

    const onChange = (e)=>{
        setField({...field, [e.target.name]: e.target.value})
    }

    const handleClick = (e)=>{
        e.preventDefault();
        addNote(field.title, field.description, field.tag);
        setField({title:"", description:"", tag:""});

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
            value={field.title}
            minLength={5}
            required
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
            value={field.description}
            minLength={5}
            required
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
            value={field.tag}
            minLength={3}
            required
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
