import './App.css';
import logo from './logo.svg'
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import About from './Components/About';
import { useState } from 'react';
import Alert from './Components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
// let name = "Ahmad";
function App() {
  const [mode, setMode] = useState('light');
  const [switchText, setSwitchText] = useState("Turn on Dark Mode")
  const [alert, setAlert] = useState(null);

  const showAlert = (message,type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 4000);
  }
  const toggleMode = ()=>{
    if(mode === 'light')
    {
      setMode('dark');
      document.body.style.backgroundColor = 'black';
      setSwitchText('Turn off Dark Mode');
      showAlert("Dark Mode has been enabled","success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      setSwitchText('Turn on Dark Mode');
      showAlert("Light Mode has been enabled","success");
    }

  }
  return (
    <>
      <Router>
        <Navbar title = "Text Analyzer" aboutText = "About Us" mode={mode} switchText={switchText} toggleMode={toggleMode}/>
        <br></br>
        <Alert alert = {alert}/>
        <div className="container">
          <Routes>
            <Route exact path="/" element={<TextForm heading = "Text Analyzer" mode={mode} showAlert={showAlert} placeholder = "Enter the text here"/>}/>
            <Route exact path="/about" element={<About/>}/>                
          </Routes>
          <br></br>
        </div>
      </Router>

      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>

    </>
  );
  
}

export default App;
