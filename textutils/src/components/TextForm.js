import React, {useState} from 'react'

export default function TextForm(props) {
    let handleOnChange = (event) => {
        // console.log("On Change")
        setText(event.target.value);
    }

    let handleUnClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }

    const [text, setText] = useState("Enter Text Here")
    return (
    <div className="container my-2">
        <h1>{props.heading}</h1>
        <div className="mb-4">
        <label htmlFor="myBox" className="form-label"></label>
        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" name="myBox" rows="8"></textarea>
        <button className="btn btn-primary mt-3" onClick={handleUnClick}>Convert To UpperCase</button>
    </div>
    </div>
    )
}
