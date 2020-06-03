import React, { useState } from 'react'
import {Extranote} from './Extranote'
import {ExtranoteAdd} from './ExtranoteAdd'
// import {Todoitem} from './Todoitem'

export const Todolist = ({notes,deleteTodo, checkTodo, changeTodoApp, addSomeToNote }) =>{
    // const [list, setNotes] = useState(notes)

    function changeTodo(indexchang, note){
        changeTodoApp(note.note)
        deleteTodo(indexchang)
    }
    function checkTodoLocal(indexToCheck, element){
         element.closest('.todo-item').classList.toggle('checked')
         checkTodo(indexToCheck);
     }

    function addExtraNote(index){
        // addSomeToNote(index)
      
        alert('Not today')

    }

    return(
        <ul className="todo-list">
            {notes.map((note, index)=>(
          
                <li 
                    className={note.checked?"todo-item checked":"todo-item"}
                    key={index}                  
                >
                <input class="item-checkbox" type="checkbox"
                  onClick={(e) => {checkTodoLocal(index,e.target);}}
                />
                <span>{note.note}
                        <div className='addExtra'></div>
                        {note.extranote.length>0 &&
                        <Extranote note={note}/>
                        }
                        {note.add==true&&<ExtranoteAdd></ExtranoteAdd>}

                </span>
               
            <div className='note-btns'>
                <button className='btn btn-delete'
                        onClick={() => {changeTodo(index, note);}}>Change</button>
                <button className='btn btn-delete'  
                        onClick={() => {deleteTodo(index);}}>
                Delete</button>
                <button className='btn btn-extra'  
                        onClick={() => {addExtraNote(index);}}>
                Extra Note</button>
             </div>
            </li>
            ))
            }
        </ul>
    )
}