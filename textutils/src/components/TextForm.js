import React, {useState} from 'react'
// import copy from "copy-to-clipboard";

export default function TextForm(props) {
    const handleOnChange = (event) => {
        // console.log("On Change")
        setText(event.target.value);
    };

    const handleUnClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
    };

    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
    };

    const handleClearClick = () => {
        let newText = "";
        setText(newText);
    };

    const handleWhiteSpClick = () => {
        let newText = text.replace(/\s+/g, '');
        setText(newText);
    };

    const handleExtraSpClick = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    };

    const handleTitleClick =() => {
        let newText = text.toLowerCase().split(" ").map(function (word) {
            return word.charAt(0).toUpperCase() + word.slice(1);
        }).join(" ");
        setText(newText);
    };

    const [text, setText] = useState("");
    return (
        <>
        <div className="container my-2" style={{color: props.mode === 'dark'?'white':'#042743'}}>
            <h1>{props.heading}</h1>
            <div className="mb-4">
                <label htmlFor="myBox" className="form-label"></label>
                <textarea className="form-control" style={{backgroundColor: props.mode === 'dark'?'#042743':'white',color: props.mode === 'dark'?'white':'#042743'}} value={text} onChange={handleOnChange} id="myBox" name="myBox" rows="8"></textarea>
                <button className={`btn btn-${props.mode === 'dark'?'danger':'primary'} mt-3 mx-1`} onClick={handleClearClick}>Clear Text</button>
                <button className={`btn btn-${props.mode === 'dark'?'danger':'primary'} mt-3 mx-1`} onClick={handleUnClick}>Convert To UpperCase</button>
                <button className={`btn btn-${props.mode === 'dark'?'danger':'primary'} mt-3 mx-1`} onClick={handleLoClick}>Convert To LowerCase</button>
                <button className={`btn btn-${props.mode === 'dark'?'danger':'primary'} mt-3 mx-1`} onClick={handleTitleClick}>Convert To TitleCase</button>
                <button className={`btn btn-${props.mode === 'dark'?'danger':'primary'} mt-3 mx-1`} onClick={handleWhiteSpClick}>Remove Whitespaces</button>
                <button className={`btn btn-${props.mode === 'dark'?'danger':'primary'} mt-3 mx-1`} onClick={handleExtraSpClick}>Remove Extraspaces</button>
                <button className={`btn btn-${props.mode === 'dark'?'danger':'primary'} mt-3 mx-1`} onClick={()=> navigator.clipboard.writeText(text)}>Copy Text</button>
            </div>
        </div><hr/>
        <div className="container my-4" style={{color: props.mode === 'dark'?'white':'#042743'}}>
            <div className="row">
            <div className="col-md-6 border">
                <h2>Your Text Summary :</h2>
                <p className="lead">{text.split(" ").length} Words and {text.length} Characters</p>
                <p className="lead">{0.008 * text.split(" ").length} Minutes Read</p>
            </div>
            <div className="col-md-6 border">
                <h2>Preview :</h2>
                <p className="lead">
                    <pre>
                        {text.length>0?text:"Enter something in the textbox above to preview it here."}
                    </pre>
                </p>
            </div>
            </div>
        </div>
        </>
    );
}