import React, { useState } from 'react'

export const Todoitem = (note, index) =>{
    return(    
        <li 
        className="todo-item"
        key={index}
        >
        {note}
        <div className='note-btns'>
            <button className='btn btn-delete' onClick={changeNote}>Change</button>
            <button className='btn btn-delete'>Delete</button>
        </div>
        </li>
        )
}