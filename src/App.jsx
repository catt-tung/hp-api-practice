import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'


function App() {
  return (
    <>
      <img className='App-logo' src={logo} alt="" />
      <h1>Harry Potter Characters</h1>
      <Routes>
      </Routes>
    </>
  );
}

export default App;
