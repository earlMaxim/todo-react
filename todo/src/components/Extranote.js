import React, { useState } from 'react'

export const Extranote = (someNote) =>{
  
    console.log(someNote.note.extranote)
    return(
        <ul classList='extraNotes'>
        {someNote.note.extranote.map((el,index)=>(
            <li classList='extraNotes-item' key={index}>
                {el}
            </li>
        ))}
        </ul>
    )
}