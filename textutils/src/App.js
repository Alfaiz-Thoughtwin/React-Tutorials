// import logo from './logo.svg';
import './App.css';
// import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'



function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  function showAlert(message, type) {
    setAlert({
      msg : message,
      type : type
    });
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark Mode Has Been Enabled", "success");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Dark Mode Has Been Disabled", "success");
    }

  };
  return (
    <>
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <TextForm showAlert={showAlert} heading="Enter Text For Analyzing :" mode={mode} />
    {/* <About/> */}
    </>
  );
}

export default App;
