import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainPage from './pages/MainPage.js';
import LoginPage from './pages/LoginPage.js';
import NavBar from './components/NavBar';
import RegisterPage from './pages/RegisterPage.js';
import WritePostPage from './pages/WritePostPage';
import ReadPostPage from './pages/ReadPostPage';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from 'react';
function App() {

  return (
   <Router>
    <NavBar/>
    <Routes>
        <Route exact path='/' element={<MainPage/>} />
        <Route path='/login' element={<LoginPage/>} />
        <Route path='/register' element={<RegisterPage/>} />
        <Route path='/post' element={<WritePostPage/>} />
        <Route path='/read' element={<ReadPostPage/>} />
      </Routes>
    </Router>
  );
}

export default App;
