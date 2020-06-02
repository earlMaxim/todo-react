import React, { useState } from 'react'
// import {Todoitem} from './Todoitem'

export const Todolist = ({notes,deleteTodo }) =>{

    function changeTodo(indexchang, note){
        console.log(indexchang)
        console.log(note)
        let x = document.querySelector('.add-input')
        x.value = note;
        // setTimeout(deleteTodo(indexchang),0)
    }
    function checkTodo(element){
        element.closest('.todo-item').classList.toggle('checked')
    }

    return(
       
        <ul className="todo-list">
            {notes.map((note, index)=>(
                <li 
                    className="todo-item"
                    key={index}
                >
                <input class="item-checkbox" type="checkbox"
                  onClick={(e) => {checkTodo(e.target);}}/>
                {note}
            <div className='note-btns'>
                <button className='btn btn-delete'
                        onClick={() => {changeTodo(index, note);}}>Change</button>
                <button className='btn btn-delete'  
                        onClick={() => {deleteTodo(index);}}>
                Delete</button>
             </div>
            </li>
            ))
            }
        </ul>
    )
}
