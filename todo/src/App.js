import React, { useState } from 'react';
import {Todolist} from './components/Todolist' 
import {Addnote} from './components/Addnote'
import {ChangeThisNote} from './components/Change'
import './App.css';


function App() {

  
  // const [notes, setNotes] = useState(['todo на React', 'Сделай это', 'Сделай то'])
  const [notes, setNotes] = useState([
    {note:"todo на React",checked:false, add:false,extranote:['some extra','and some more extra']},
    {note:"bird and cat",checked:false, add:false,extranote:[]}
  ])

  
  const [changeThisTodo, setchangeThisTodo] = useState('')

   function test(value){
    setchangeThisTodo(value)
  }

  return (
    <div className="App">
      <Addnote  
                newNote={value =>{
        setNotes([...notes, value])
      }}></Addnote>
      <Todolist 
                notes={notes}
                deleteTodo={indexDelete=> {const newTodos = notes
                            .filter((_, index) => index !== indexDelete); 
                            setNotes(newTodos);
                }}
                checkTodo={indexDone=>{ const newTodos = notes
                          newTodos[indexDone].checked? newTodos[indexDone].checked=false: newTodos[indexDone].checked=true
                          setNotes(newTodos);
                }}
                changeTodoApp={value=>{
                  test(value)
                }}
                // addSomeToNote={indexAdd=>{ const newTodos = notes
                //   newTodos[indexAdd].add? newTodos[indexAdd].add=false: newTodos[indexAdd].checked=true
                //   setNotes(newTodos);
        // }}
                
      ></Todolist>
      {changeThisTodo.length>0 &&
        <ChangeThisNote  some= {changeThisTodo} newNote={value =>{
          setNotes([...notes, value])
          setchangeThisTodo('')
        }}></ChangeThisNote>
      }
    </div>
  );
}

export default App;
