import React, { useState } from 'react'


function TextForm(props) {
    const [text, setText] = useState("");
    const UpperCase = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert('Converted to UPPERCASE', 'success');
    }
    const lowercase = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert('Converted to lowercase', 'success');
    }
    const removeSpaces = () => {
        let newText = text;
        newText = newText.replace(/[  ]+/g, ' ').trim();
        setText(newText);
        props.showAlert('Extra Spaces Removed', 'success');
    }
    const clearText = () => {
        if (text.length === 0) {
            props.showAlert('No Text to Clear', 'danger');
            return;
        }
        let newText = "";
        setText(newText);
        props.showAlert('Text Cleared', 'success');
    }
    const copyText = () => {
        if (text.length === 0) {
            props.showAlert('No Text to Copy', 'danger');
            return;
        }
        navigator.clipboard.writeText(text);
        props.showAlert('Text Copied', 'success');
        // clearText();
    }
    const capitalizeText = () => {
        if (text.length === 0) {
            props.showAlert('No Text to be Capitalized', 'danger');
            return;
        }
        let newText = text;
        // newText = newText.split(/[ ]+/);
        // newText.join(' ');
        newText = newText.replace(/\s+/g, ' ').trim();
        setText(newText);
        newText = newText.split(" ");
        for (let i = 0; i < newText.length; i++) {
            newText[i] = newText[i][0].toUpperCase() + newText[i].substr(1);
        }
        let update = newText.join(" ");
        // console.log(newText);
        setText(update);
        props.showAlert('Text Capitalized', 'success');
    }
    const clearSelectedText = () => {
        let Textarea = document.getElementById("Textarea")
        if (Textarea.selectionStart === Textarea.selectionEnd) {
            props.showAlert('No Text Selected to be Cleared', 'danger');
            return; // nothing is selected
        }
        Textarea.setRangeText("", Textarea.selectionStart, Textarea.selectionEnd, "end");
        let newText = Textarea.value;
        setText(newText);
        Textarea.focus();
        props.showAlert('Selected Text Cleared', 'success');
    }
    const uppercaseSelectedText = () => {
        let Textarea = document.getElementById("Textarea")
        if (Textarea.selectionStart === Textarea.selectionEnd) {
            props.showAlert('No Text Selected to be Uppercased', 'danger');
            return; // nothing is selected

        }
        let selected = Textarea.value.slice(Textarea.selectionStart, Textarea.selectionEnd);
        Textarea.setRangeText(selected.toUpperCase());
        let newText = Textarea.value;
        setText(newText);
        props.showAlert('Selected Text UPPERCASED', 'success');
    }
    const lowercaseSelectedText = () => {
        let Textarea = document.getElementById("Textarea")
        if (Textarea.selectionStart === Textarea.selectionEnd) {
            props.showAlert('No Text Selected to be Lowercased', 'danger');
            return; // nothing is selected
        }
        let selected = Textarea.value.slice(Textarea.selectionStart, Textarea.selectionEnd);
        Textarea.setRangeText(selected.toLowerCase());
        let newText = Textarea.value;
        setText(newText);
        props.showAlert('Selected Text lowercase', 'success');
    }

    const handleChange = (event) => {
        setText(event.target.value);
    }
    return (
        <>
            <div className="container" style={props.myStyle}>
                {/* <div className="form-check form-switch float-end">
                    <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={toggleBtn} />
                    <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{toggle}</label>
                </div> */}
                <h2 className='my-3'>{props.heading}</h2>
                <div className="mb-3">
                    <textarea className="form-control" onChange={handleChange} style={props.myStyle} value={text} id="Textarea" placeholder="Enter Text Here" rows="10" width="40vw"></textarea>
                </div>
                <button className="btn btn-primary mx-1 my-1" onClick={UpperCase}>UPPERCASE</button>
                <button className="btn btn-primary mx-1 my-1" onClick={lowercase}>lowercase</button>
                <button className="btn btn-primary mx-1 my-1" onClick={clearText}>Clear</button>
                <button className="btn btn-primary mx-1 my-1" onClick={copyText}>Copy Text</button>
                <button className="btn btn-primary mx-1 my-1" onClick={capitalizeText}>Capitalize Text</button>
                <button className="btn btn-primary mx-1 my-1" onClick={removeSpaces}>Remove Extra Spaces</button>
                <button className="btn btn-primary mx-1 my-1" onClick={uppercaseSelectedText}>UPPERCASE Selected Text</button>
                <button className="btn btn-primary mx-1 my-1" onClick={clearSelectedText}>Clear Selected Text</button>
                <button className="btn btn-primary mx-1 my-1" onClick={lowercaseSelectedText}>lowercase Selected Text</button>
                <p>

                </p>
            </div>
            <div className="container" style={props.myStyle}>
                <h2 className="my-3">Your Text Summary</h2>
                <p>{text.split(/\s+/).length - 1} Words and {text.length} Characters</p>
                <p> {0.008 * (text.split(/\s+/).length - 1)} Minutes to Read</p>
                <h3>Preview</h3>
                <p>{text}</p>
            </div>
        </>
    )
}

export default TextForm
