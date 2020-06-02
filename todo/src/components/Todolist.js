import React, { useState } from 'react'
// import {Todoitem} from './Todoitem'

export const Todolist = ({notes}) =>{

    const [localNotes, setNotes] = useState(notes)

    function deleteTodo(indexdelete){
        const newTodos = localNotes
              .filter((_, index) => index !== indexdelete); 
              setNotes(newTodos);
    }
    function changeTodo(indexchange){
        console.log(indexchange)
    }
    function checkTodo(element){
        console.log(element)
        element.closest('.todo-item').classList.toggle('checked')
        // document.q
    }
    

    return(
        <ul className="todo-list">
            {localNotes.map((note, index)=>(
                <li 
                    className="todo-item"
                    key={index}
                >
                <input class="item-checkbox" type="checkbox"
                  onClick={(e) => {checkTodo(e.target);}}/>
                {note}
            <div className='note-btns'>
                <button className='btn btn-delete'
                        onClick={() => {changeTodo(index);}}>Change</button>
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


            //     <li 
            //         className="todo-item"
            //         key={note.id}
            // >
            //     {note}
            // <div className='note-btns'>
            //     <button className='btn btn-delete'>Change</button>
            //     <button className='btn btn-delete'>Delete</button>
            //  </div>
            // </li>


              //    return <Todoitem note={note} key={note.id}></Todoitem>