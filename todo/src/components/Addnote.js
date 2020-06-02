import React, { useState } from 'react'

export const Addnote = ({newNote}) =>{

    const [value, setValue] = useState('')

    // btn add note
    const addNote = () =>{
        if(value.trim()){
            newNote(value)
            console.log(value)
            setValue('')
        }
       else{
           alert("Nothing to add ;(")
       }
    }

    return(
       <div className='add-form'>
           <input 
                className='add-input' 
                placeholder="new note"
                value={value}
                onChange={e=>setValue(e.target.value)}></input>
           <button className='btn btn-addnew' onClick={addNote}>Add</button>
       </div>
    )
}