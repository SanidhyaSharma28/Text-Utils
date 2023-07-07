import React, { useState } from 'react'
import PropTypes from 'prop-types'



export default function Textform(props) {
    const UpCaseConv = () => {

        let newtext = text.toUpperCase();
        SetText(newtext)
        props.showAlert("Converted to uppercase","success")
    }
    const LowCaseConv = () => {
        let newtext = text.toLowerCase();
        props.showAlert("Converted to lower case","success")
        SetText(newtext)
    }
    const text_clearer = () => {
        props.showAlert("Text cleared","success")
        let newtext = "";
        SetText(newtext)
    }
    const ChangeFont = (event) => {
        event.preventDefault();
        SetFontStyle({ fontFamily: fontType });
        props.showAlert("Font changed","success")
    }
    const HandleOnChange = (event) => {
        // console.log("changed")
        SetText(event.target.value)

    }
    const HandleFontChange = (event) => {
        // console.log("changed")
        SetFontType(event.target.value)

    }
    const [text, SetText] = useState('Enter Text Here');
    const [fontType, SetFontType] = useState('Arial');
    const [fontStyle, SetFontStyle] = useState({fontFamily:'Arial'});
    return (
        <>
            <div className='container' style={{color :props.mode==='dark'?'white':'black'}}>
                <h1 className='my-3'>This is a text area</h1>
                <div className="mb-3">
                    <label htmlFor="myBox" className="form-label">{props.heading}</label>
                    <textarea className="form-control" value={text} onChange={HandleOnChange} id="myBox" rows="8"  style={{...fontStyle, backgroundColor: props.mode === 'dark'?'grey':'white',color :props.mode==='dark'?'white':'black'}}></textarea>
                </div>
                <button className="btn btn-primary mx-1 my-2" onClick={UpCaseConv}>Convert to uppercase</button>
                <button className="btn btn-primary mx-1 my-2" onClick={LowCaseConv}>Convert to lowercase</button>
                <button className="btn btn-primary mx-1 my-2" onClick={text_clearer}>Clear text</button>
                <form className="form-inline my-2 my-lg-0" onSubmit={ChangeFont}>
                    <input className="form-control mr-sm-2 my-1" type="search" placeholder="Type the font you want to apply" aria-label="Search" value={fontType} onChange={HandleFontChange}/>
                        <button className="btn btn-outline-dark my-2 my-sm-0" type="submit">Change Font</button>
                </form>
            </div>
            <div className="container my-3" style={{color :props.mode==='dark'?'white':'black'}}>
                <h1>Text Summary</h1>
                <p>{text.length>0?text.trim().split(" ").length:0} words and {text.length} characters</p>
                <p>{(text.length>0?text.trim().split(" ").length:0) * 0.008} minutes to read</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:"Enter Your text to preview it here"}</p>
            </div>
        </>
    )
}

Textform.propTypes = {
    heading: PropTypes.string.isRequired
}
Textform.defaulProps = {
    heading: 'Text Area'
}