import React, { useState } from 'react';
import {Todolist} from './components/Todolist' 
import {Addnote} from './components/Addnote'
import './App.css';
import Context from './context'

function App() {

  
  const [notes, setNotes] = useState(['todo на React', 'Сделай это', 'Сделай то'])




  return (

    <div className="App">
      <Addnote newNote={value =>{
        setNotes([...notes, value])
      }}></Addnote>
      <Todolist notes={notes}
                deleteTodo={indexDelete=> {const newTodos = notes
                            .filter((_, index) => index !== indexDelete); 
                            setNotes(newTodos);
                            }}
      ></Todolist>
    </div>
 
  );
}

export default App;
