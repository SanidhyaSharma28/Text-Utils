import './App.css';
import { useState } from 'react';
import AboutUs from './components/AboutUs';
// import Button from './components/Button';
import Textform from './components/Textform';
import Navbar from './components/navbar';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";



function App() {
  const [mode, SetMode] = useState('light')
  const [alert, SetAlert] = useState(null)

  const showAlert = (message, type) => {
    SetAlert({
      message: message,
      type: type
    })
    setTimeout(() => {
      SetAlert(null);
    }, 1000);
  }

  const removeBodyClasses = () => {
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-primary')
    document.body.classList.remove('bg-success')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-danger')
  }


  const ColorToggler = (cls) => {
    removeBodyClasses();
    document.body.classList.add('bg-' + cls)
    console.log(cls);
  }

  const toggleMode = () => {
    removeBodyClasses();
    if (mode === 'light') {
      SetMode('dark')
      document.body.style.backgroundColor = '#042743'
      console,log('#042743')
      showAlert("Dark mode has been enabled", "success")
    }
    else {
      SetMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode has been enabled", "success")
    }
  }



  return (
    <>
      <Router>
        <Navbar title="My site" home="About Us" random="name here" mode={mode} toggleMode={toggleMode} colorChange={ColorToggler} />
        <Alert alert={alert} />
        <div className="container">
          <Routes>
            <Route exact path="/about" element={<AboutUs />}>
            </Route>
            <Route exact path="/" element={<Textform heading='Enter the text to analyze' mode={mode} showAlert={showAlert} />} ></Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
