import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpclick = () => {
    // console.log('Uppercase was clicked');
    const newtext = text.toUpperCase();
    setText(newtext);
    props.showAlert("Converted to Uppercase!", "Success");
  };

  const handlelowclick = () => {
    const textLower = text.toLowerCase();
    setText(textLower);
    props.showAlert("Converted to Lowercase!", "Success");
  };

  const handleCopyclick = () => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        props.showAlert("text Copied to clipboard!", "Success");
        document.getSelection().removeAllRanges();
      })
      .catch((err) => {
        console.error("Failed to copy text: ", err);
      });
  };

  const handleRemoveclick = () => {
    const removeSpaces = text.split(/[ ]+/);
    setText(removeSpaces.join(" "));
    props.showAlert("Extra Space Removed!", "Success");
  };

  const handleDownloadclick = () => {
    // If empty text, show alert
    if (!text.trim()) {
      alert("Please enter some text before downloading!");
      return;
    }

    // Create a Blob from the text
    const file = new Blob([text], { type: "text/plain" });

    // Create a temporary download link
    const url = URL.createObjectURL(file);
    const a = document.createElement("a");
    a.href = url;
    a.download = "my_text_file.txt"; // default filename
    a.click();

    // Clean up memory
    URL.revokeObjectURL(url);
    props.showAlert("Text file Downloaded!", "Success");
  };

  const handleClearclick = () => {
    const newText = "";
    setText(newText);
    props.showAlert("Text Cleared!", "Success");
  };

  const handleonchange = (event) => {
    // console.log('on change');
    setText(event.target.value);
  };

  const [text, setText] = useState("");

  return (
    <>
      <div
        className="my-4"
        style={{ color: props.mode === "light" ? "#042743" : "white" }}
      >
        <div className="form-floating">
          <h1> {props.heading}</h1>
          <textarea
            className="form-control"
            value={text}
            onChange={handleonchange}
            style={{
              backgroundColor: props.mode === "light" ? "white" : "#042743",
              color: props.mode === "light" ? "#042743" : "white",
            }}
            id="mybox"
            rows="5"
            cols="50"
          ></textarea>
        </div>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mt-3"
          onClick={handleUpclick}
        >
          Convert ToUppercase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-success mt-3 ms-2"
          onClick={handlelowclick}
        >
          Convert LowerCase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-info mt-3 ms-2"
          onClick={handleCopyclick}
        >
          Copy text
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-secondary mt-3 ms-2"
          onClick={handleRemoveclick}
        >
          Remove Spaces
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-dark mt-3 ms-2"
          onClick={handleDownloadclick}
        >
          Download Text
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-danger mt-3 ms-2"
          onClick={handleClearclick}
        >
          Clear
        </button>
      </div>

      <div
        className="container my-3"
        style={{ color: props.mode === "light" ? "#042743" : "white" }}
      >
        <h1>Your Text Summary</h1>

        <p>
          {
            String(text)
              .split(/\s+/)
              .filter((element) => {
                return element.length !== 0;
              }).length
          }{" "}
          Words, {text.length} Character
        </p>
        <p>
          {0.008 *
            String(text)
              .split(" ")
              .filter((element) => {
                return element.length !== 0;
              }).length}{" "}
          Minutes Read
        </p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Nothing to preview!"}</p>
      </div>
    </>
  );
}
