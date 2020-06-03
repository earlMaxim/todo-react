import React, { useState } from 'react'

export const ChangeThisNote = ({some, newNote}) => { 
   
    const [value, setValue] = useState(some)
    let text=  {
        note:'',
        checked:false,
        extranote:[]
    }
  
    console.log(some)
    const addNote = () =>{
        if(value.trim()){
            text.note=value;
            newNote(text)
            console.log(value)
            setValue('')
        }
       else{
           alert("Nothing to add ;(")
       }
    }
    
    return (
        <div className='add-form'>
        <input 
             className='add-input' 
             placeholder="new note"
             value={value}
             onChange={e=>setValue(e.target.value)}></input>
        <button className='btn btn-addnew' onClick={addNote}>Fix it</button>
    </div>
    )
}