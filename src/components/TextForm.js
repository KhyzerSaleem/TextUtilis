import React, {useState} from 'react'



export default function TextForm(props) {
  const handleUpClick = ()=> {
    //   console.log("Uppercase was clicked: " + text);
    let newText= text.toUpperCase();
    setText(newText);
    props.showAlert("Converted To UpperrCase!", "Success");
  }
  const handleLowClick = ()=> {
    //   console.log("Uppercase was clicked: " + text);
    let newText= text.toLowerCase();
    setText(newText);
    props.showAlert("Converted To LowerCase!", "Success");
  }
  const handleClearClick = ()=> {
    //   console.log("Uppercase was clicked: " + text);
    let newText= '';
    setText(newText);
    props.showAlert("Text Cleared", "Success");
  }
  const speak = ()=> {
    //   console.log("Uppercase was clicked: " + text);
    let msg= new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
    props.showAlert("Speak Mode Enabled", "Success");
  }
  const handleTitleClick = ()=> {
    //   console.log("Uppercase was clicked: " + text);
    let newText= text.toLowerCase().split(' ').map(function(word){
      return (word.charAt(0).toUpperCase()+ word.slice(1));
    }).join(' ');
    setText(newText);
    props.showAlert("Converted To Title Case", "Success");
  }
  
  const handleCopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copy To Clipboard", "Success");
  }
  
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ] + /);
    setText(newText.join(" "))  
    props.showAlert("Removed Extra Spaces From Text", "Success");
  }
  

     

    const handleOnChange = (event)=> {
    //   console.log("On Change");
      setText(event.target.value);
    }           
    
    const [text, setText] = useState('');
    // text="New Text"; //Wrong Way To Change The State 
    // setText("New Text"); //Right Way To Change The State 
    // return (
    return (
        <>
        <div className="container" style={{color: props.mode==='dark'?'white':'#212535'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#212535':'white', color: props.mode==='dark'?'white':'#212535'}} id="myBox" rows="7"></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick} >Convert To Upper Case</button>
            <button className="btn btn-primary mx-2" onClick={handleLowClick} >Convert To Lower Case</button>
            <button className="btn btn-primary mx-2" onClick={handleTitleClick} >Convert To Title Case</button>
            <button className="btn btn-primary mx-2" onClick={handleCopy} >Copy Text</button>
            <button className="btn btn-primary mx-2" onClick={handleExtraSpaces} >Remove Extra Spaces</button>
            <button className="btn btn-primary mx-2" onClick={speak} >Speak</button>
            <button className="btn btn-primary mx-2" type='submit' onClick={handleClearClick} >Clear Text</button>
        </div>
        <div className="container my-3" style={{color: props.mode==='dark'?'white':'#212535'}}>
            <h2>Your Text Summary</h2>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} Minutes Read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text: "Enter Something In The Text Above To Preview Here"}</p>
        </div>
        </>
    )
}
