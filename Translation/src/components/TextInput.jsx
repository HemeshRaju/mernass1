import React, { useState } from 'react';
import './textinput.css';
import axios from 'axios';

const TextInput = () => {
    const [text, setText] = useState('')
    const ht=()=>{
        const response = axios.post("http://localhost:5000/translate", {
           text
         });
    
    }
  return (
    <>
    <h2>Text Input:</h2>
    <div className='text'>
    <textarea >
        {text}
    </textarea>
    </div>
    <button onClick={ht}>Translate</button>
    </>
  )
}

export default TextInput
