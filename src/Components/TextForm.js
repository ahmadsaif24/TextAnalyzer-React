import React , { useState } from 'react'
import PropTypes from 'prop-types'
var count = 0;
export default function TextForm(props) {
  const handleUpClick = () =>{
    console.log("handleUpClick() was called");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase","success");
  }
  const handleLowClick = () =>{
    console.log("handleLowClick() was called");
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to LowerCase","success");

  }
  const handleClearClick = () =>{
    console.log("handleClearClick() was called");
    let newText = "";
    setText(newText);
    props.showAlert("Text was cleared successfully","success");

  }
  const handleListenClick = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
    props.showAlert("You are now listening","success");
  }
  const handleCopyClick = () => {
    var newText = document.getElementById("myBox");
    newText.select();
    navigator.clipboard.writeText(newText.value);
    props.showAlert("Copied to clipboard","success");
  }
  const handleRemoveExtraSpacesClick = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces removed successfully","success");
  }
  const handleCapitaliseClick = () => {
    var txt = text.toLowerCase();
    const words_array = txt.split(". ");
    // iterate over the array
    for (let i = 0; i < words_array.length; i++) {
        
        // convert first letter to uppercase
        words_array[i] = words_array[i][0].toUpperCase() + words_array[i].substring(1);
    }

    setText(words_array.join('. '));
    props.showAlert("Text was capitalised succesfully","success");
  };
  const handleOnChange = (event) =>{
    console.log("handleOnChange() was called");
    setText(event.target.value);

  }
  const [text, setText] = useState('');

  count = countWords(text);
  return (
    <>
        <div className="container"style = {{color: props.mode === 'dark'? 'white':'black'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" style = {{backgroundColor: props.mode === 'dark'? '#212529':'white', color: props.mode === 'dark'? 'white':'black'}} 
                value = {text} onChange={handleOnChange} placeholder={props.placeholder} id="myBox" rows="10"></textarea>
            </div>

            <button className="btn btn-primary me-md-2"onClick={handleUpClick}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-up" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z"/>
            </svg>
                &nbsp;Convert to Uppercase
            </button>
            
            <button className="btn btn-success me-md-2"onClick={handleLowClick}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-down" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"/>
            </svg>
                &nbsp;Convert to Lowercase
            </button>
            
            <button className="btn btn-info me-md-2"onClick={handleListenClick}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-ear" viewBox="0 0 16 16">
                <path d="M8.5 1A4.5 4.5 0 0 0 4 5.5v7.047a2.453 2.453 0 0 0 4.75.861l.512-1.363a5.553 5.553 0 0 1 .816-1.46l2.008-2.581A4.34 4.34 0 0 0 8.66 1H8.5ZM3 5.5A5.5 5.5 0 0 1 8.5 0h.16a5.34 5.34 0 0 1 4.215 8.618l-2.008 2.581a4.555 4.555 0 0 0-.67 1.197l-.51 1.363A3.453 3.453 0 0 1 3 12.547V5.5ZM8.5 4A1.5 1.5 0 0 0 7 5.5v2.695c.112-.06.223-.123.332-.192.327-.208.577-.44.72-.727a.5.5 0 1 1 .895.448c-.256.513-.673.865-1.079 1.123A8.538 8.538 0 0 1 7 9.313V11.5a.5.5 0 0 1-1 0v-6a2.5 2.5 0 0 1 5 0V6a.5.5 0 0 1-1 0v-.5A1.5 1.5 0 0 0 8.5 4Z"/>
            </svg>
                &nbsp;Listen
            </button>
            
            <button className="btn btn-warning me-md-2"onClick={handleCapitaliseClick}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-type" viewBox="0 0 16 16">
                <path d="m2.244 13.081.943-2.803H6.66l.944 2.803H8.86L5.54 3.75H4.322L1 13.081h1.244zm2.7-7.923L6.34 9.314H3.51l1.4-4.156h.034zm9.146 7.027h.035v.896h1.128V8.125c0-1.51-1.114-2.345-2.646-2.345-1.736 0-2.59.916-2.666 2.174h1.108c.068-.718.595-1.19 1.517-1.19.971 0 1.518.52 1.518 1.464v.731H12.19c-1.647.007-2.522.8-2.522 2.058 0 1.319.957 2.18 2.345 2.18 1.06 0 1.716-.43 2.078-1.011zm-1.763.035c-.752 0-1.456-.397-1.456-1.244 0-.65.424-1.115 1.408-1.115h1.805v.834c0 .896-.752 1.525-1.757 1.525z"/>
            </svg>
                &nbsp;Capitalise Text
            </button>
            
            <button className={`btn btn-${props.mode === 'dark'? 'light':'dark'} me-md-2`}onClick={handleCopyClick}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-clipboard" viewBox="0 0 16 16">
                <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"/>
                    <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"/>
            </svg>
                &nbsp;Copy Text
            </button>
            
            <button className="btn btn-secondary me-md-2"onClick={handleRemoveExtraSpacesClick}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
            </svg>
                &nbsp;Remove Extra Spaces in Text
            </button>
            
            <button className="btn btn-danger me-md-2"onClick={handleClearClick}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-backspace" viewBox="0 0 16 16">
                <path d="M5.83 5.146a.5.5 0 0 0 0 .708L7.975 8l-2.147 2.146a.5.5 0 0 0 .707.708l2.147-2.147 2.146 2.147a.5.5 0 0 0 .707-.708L9.39 8l2.146-2.146a.5.5 0 0 0-.707-.708L8.683 7.293 6.536 5.146a.5.5 0 0 0-.707 0z"/>
                <path d="M13.683 1a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-7.08a2 2 0 0 1-1.519-.698L.241 8.65a1 1 0 0 1 0-1.302L5.084 1.7A2 2 0 0 1 6.603 1h7.08zm-7.08 1a1 1 0 0 0-.76.35L1 8l4.844 5.65a1 1 0 0 0 .759.35h7.08a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1h-7.08z"/>
            </svg>
                &nbsp;Clear Text
            </button>
        </div>
        <br></br>
        <br></br>
        
        <div className="container" style = {{color: props.mode === 'dark'? 'white':'black'}}>
            <h2>Your text summary is: </h2>
            <p>&nbsp; Total no. of words = <b>{count}</b></p>
            <p>&nbsp; Total no. of characters = <b>{text.length}</b></p>
            <h2>Preview</h2>
            <p>{text.length > 0 ? text : "Enter some text above and review it here"}</p>
        </div>
    </>
  )
}
function countWords( str)
{
    var OUT = 0;
    var IN = 1;
    var state = OUT;
    var wc = 0; // word count
    var i = 0;
     
    // Scan all characters one
    // by one
    while (i < str.length)
    {
     
        // If next character is a separator,
        // set the state as OUT
        if (str[i] === ' ' || str[i] === '\n'||
                              str[i] === '\t')
            state = OUT;
             
 
        // If next character is not a word
        // separator and state is OUT, then
        // set the state as IN and increment
        // word count
        else if (state === OUT)
        {
            state = IN;
            ++wc;
        }
 
        // Move to next character
        ++i;
    }
     
    return wc;
}
TextForm.propTypes = {
    heading: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired 
}

