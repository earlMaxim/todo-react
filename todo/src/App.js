import React, { useState } from 'react';
import {Todolist} from './components/Todolist' 
import {Addnote} from './components/Addnote'
import './App.css';
import Context from './context'

function App() {

  
  const [notes, setNotes] = useState(['todo на React', 'Сделай это', 'Сделай то'])




  return (

    <div className="App">
      <Addnote newNote={newNote =>{
        setNotes([...notes, newNote])
      }}></Addnote>
      <Todolist notes={notes}
      ></Todolist>
    </div>
 
  );
}

export default App;
