import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Alert from "./components/Alert";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import TextForm from "./components/TextForm";

function App() {
  const [mode, setMode] = useState("light"); // Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  // Function to show alert
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 1400);
  };

  const RemoveBodyClasses = () => {
    document.body.classList.remove("bg-light");
    document.body.classList.remove("bg-dark");
    document.body.classList.remove("bg-warning");
    document.body.classList.remove("bg-danger");
    document.body.classList.remove("bg-success");
    document.body.classList.remove("bg-primary");
  };

  // Function to toggle light/dark mode
  const toggleMode = (cls) => {
    RemoveBodyClasses();

    document.body.classList.add("bg-" + cls);

    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled", "success");
      document.title = "TextUtils - Dark Mode ";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "#ffffff";
      showAlert("Light mode has been enabled", "success");
      document.title = "TextUtils - Light Mode";
    }
  };

  return (
    <>
      <Navbar
        title="TextUtils"
        aboutText="About Us"
        home="Home"
        mode={mode}
        toggleMode={toggleMode}
      />

      <Alert alert={alert} />
      <div className="container">
        <Router>
          <Routes>
            <Route
              path="/"
              element={
                <TextForm
                  showAlert={showAlert}
                  heading="Enter the text to analyze below"
                  mode={mode}
                />
              }
            />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
