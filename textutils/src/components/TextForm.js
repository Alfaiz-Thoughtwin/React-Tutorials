import React, {useState} from 'react'

export default function TextForm(props) {
    let handleOnChange = (event) => {
        // console.log("On Change")
        setText(event.target.value);
    };

    let handleUnClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
    };

    let handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
    };

    const [text, setText] = useState("")
    return (
        <>
        <div className="container my-2">
            <h1>{props.heading}</h1>
            <div className="mb-4">
                <label htmlFor="myBox" className="form-label"></label>
                <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" name="myBox" rows="8"></textarea>
                <button className="btn btn-primary mt-3 mx-1" onClick={handleUnClick}>Convert To UpperCase</button>
                <button className="btn btn-primary mt-3 mx-1" onClick={handleLoClick}>Convert To LowerCase</button>
            </div>
        </div><hr/>
        <div className="container my-2">
            <div className="row">
            <div className="col-md-6 border">
                <h2>Your Text Summary :</h2>
                <p className="lead">{text.split(" ").length} Words and {text.length} Characters</p>
            </div>
            <div className="col-md-6 border">
                <h2>Preview :</h2>
                <p className="lead">{text}</p>
            </div>
            </div>
        </div>
        </>
    );
}
