import React, {useState, useEffect} from 'react'
// import notes from '../assets/data'
import ListItem from '../Components/ListItem'

const NotesPage = () => {
  let [notes, setNotes] = useState([])
  
  return (
    <div className="notes">
      <div className="notes-header">
        <h2 className="notes-title">&#9782;Notes</h2>
        <p className='notes-count'>{notes.length}</p>

      </div>
      <div className='notes-list'>
          {notes.map((note, index) => (
            <ListItem key={index} note={note}/>

        ))}
      </div>
      
    </div>
  )
}

export default NotesPage