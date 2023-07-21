import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';
function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }
  const [isZoom,setIsZoom] = useState(false);
  function expandList(){
    setIsZoom(true)
  }

  return (
    <div>
      <form className="create-note">
        {isZoom &&  <input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        /> }
        
        <textarea
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
onClick = {expandList}
          rows={isZoom ? "4" : "1" }
        />
        
        <Zoom in = {isZoom}>
        <Fab onClick={submitNote}><AddIcon/></Fab>
        </Zoom>
      </form>

     
    </div>
  );
}

export default CreateArea;
