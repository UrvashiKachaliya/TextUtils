import { clear } from '@testing-library/user-event/dist/clear';
import React from 'react';
import {useState} from 'react';


export default function Textutils(props) 

{
    const handleUpClick=()=>{
        let newtext=text.toUpperCase();
        setText(newtext);
    }
    const handleChange=(event)=>{
        setText(event.target.value)
     }
     const handleLowClick=()=>
     {
       let newtext=text.toLowerCase();
        setText(newtext);
     }
     const handleClear=()=>
     {
        setText("");
     }
     const handleReverse=()=>{
        let newtext=text.split("").reverse().join("")
        setText(newtext)
     }
     const handleCopy=()=>
     {
        let newtext=navigator.clipboard.writeText(text);
    
     }
     const handleSpace=()=>{
        let newtext=text.trim();
        setText(newtext)
     }

    const [text,setText]=useState("Enter text here")

   
return (
     <div className='contents'>
        <h1>Enter your text below:</h1>
        <h2>{props.title}</h2>
        <div>
        <textarea rows='18' cols='90' value={text} onChange={handleChange}></textarea><br/>
        </div>
        <button className='my-button' onClick={handleUpClick}>Uppercase</button>
        <button className='my-button' onClick={handleLowClick}>Lowercase</button>
        <button className='my-button' onClick={handleClear}>Clear</button><br/>
        <button className='my-button' onClick={handleReverse}>Reverse Order</button>
        <button className='my-button' onClick={handleCopy}>Copy</button>
        <button className='my-button' onClick={handleSpace}>Remove Space</button>
        </div>
  )}
