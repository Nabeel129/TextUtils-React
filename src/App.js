import './App.css';
import About from './Components/About';
import NavBar from './Components/NavBar';
import TextForm from './Components/TextForm';
import React, { useState } from 'react'
import Alert from './Components/Alert';
import { Routes, Route } from 'react-router-dom';
import { BrowserRouter as Router } from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');
  const [myStyle, setMyStyle] = useState({
    color: 'black',
    backgroundColor: '#f8f9fa',
  })
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setInterval(() => {
      setAlert(null)
    }, 5000);
  }

  const toggleBtn = () => {
    if (mode === 'dark') {
      setMode('light');
      setMyStyle({
        color: 'black',
        backgroundColor: '#f8f9fa'
      });
      document.body.style.backgroundColor = 'white';
      showAlert('Light Mode Enabled', 'success');
    }
    else {
      setMode('dark');
      setMyStyle({
        color: 'white',
        backgroundColor: '#212529'
      });
      document.body.style.backgroundColor = 'black';
      showAlert('Dark Mode Enabled', 'success');
    }
  }
  // const toggleBtn = (e) => {
  //   // console.log(e.target.id);
  //   if (e.target.id === 'primary') {
  //     setMode('primary');
  //     setMyStyle({
  //       color: 'white',
  //       backgroundColor: '#0d6efd'
  //     });
  //     document.body.style.backgroundColor = '#0d6efd';
  //     showAlert('Primary Mode Enabled', 'primary');
  //   }
  //   else if (e.target.id === 'secondary') {
  //     setMode('secondary');
  //     setMyStyle({
  //       color: 'white',
  //       backgroundColor: 'gray'
  //     });
  //     document.body.style.backgroundColor = 'gray';
  //     showAlert('Secondary Mode Enabled', 'secondary');
  //   }
  //   else if (e.target.id === 'success') {
  //     setMode('success');
  //     setMyStyle({
  //       color: 'white',
  //       backgroundColor: 'light-green'
  //     });
  //     document.body.style.backgroundColor = 'dark-green';
  //     showAlert('Success Mode Enabled', 'success');
  //   }
  //   else if (e.target.id === 'danger') {
  //     setMode('danger');
  //     setMyStyle({
  //       color: 'white',
  //       backgroundColor: 'light-red'
  //     });
  //     document.body.style.backgroundColor = 'dark-red';
  //     showAlert('Danger Mode Enabled', 'danger');
  //   }
  //   else if (e.target.id === 'warning') {
  //     setMode('warning');
  //     setMyStyle({
  //       color: 'white',
  //       backgroundColor: 'light-orange'
  //     });
  //     document.body.style.backgroundColor = 'dark-orange';
  //     showAlert('Warning Mode Enabled', 'warning');
  //   }
  //   else if (e.target.id === 'info') {
  //     setMode('info');
  //     setMyStyle({
  //       color: 'white',
  //       backgroundColor: 'light-blue'
  //     });
  //     document.body.style.backgroundColor = 'dark-blue';
  //     showAlert('Warning Mode info', 'info');
  //   }
  //   else if (e.target.id === 'dark') {
  //     setMode('dark');
  //     setMyStyle({
  //       color: 'black',
  //       backgroundColor: '#f8f9fa'
  //     });
  //     document.body.style.backgroundColor = '#212529';
  //     showAlert('Dark Mode Enabled', 'dark');
  //   }
  //   else {
  //     setMode('light');
  //     setMyStyle({
  //       color: 'black',
  //       backgroundColor: '#f8f9fa'
  //     });
  //     document.body.style.backgroundColor = 'white';
  //     showAlert('Light Mode Enabled', 'light');
  //   }

  // }
  return (
    <>
      <Router>
        <NavBar title="TextUtils" about="About" mode={mode} myStyle={myStyle} toggleBtn={toggleBtn} />
        <Alert alert={alert} />
        <Routes>
          <Route exact path="/" element={<TextForm heading="Enter Text To Analyze" mode={mode} showAlert={showAlert} myStyle={myStyle} />}>
          </Route>
          <Route exact path="/about" element={<About mode={mode} myStyle={myStyle} toggleBtn={toggleBtn} />}>
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
