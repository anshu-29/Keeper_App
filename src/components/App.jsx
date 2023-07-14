import React from "react";
import Header from "./Header";
import Footer from "./footer";
import Note from "./Note";
import notes from "../notes"


function App() {
    return <div>
       <Header />
        <Footer />
        {notes.map(notesEntry =>
             (<Note
                    key = {notesEntry.id}
                    title = {notesEntry.title}
                    content = {notesEntry.content}
                />
            )
        )
        }
    </div>

}
export default App;
