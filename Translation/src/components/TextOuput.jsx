import React from 'react';
import axios from 'axios';
const TextOuput = () => {
    const output=()=>{
        const output = axios.get("http://localhost:5000/translate", {
           text
         });
        }
  return (
    <>
    <h2>Text Output:</h2>
    <div>

       Text Translated
       {output}
    </div>
    </>
  )
}

export default TextOuput
