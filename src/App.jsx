import { useState } from 'react';
import './App.css'
import AppModules from './modules/AppModules.jsx';
import ChatDisplay from './modules/ChatDisplay.jsx';
import ModuleDisplay from './modules/ModuleDisplay.jsx';

const token = async () => {
        fetch('http://localhost:3000/api/home', {
          method: 'get',
          headers: { authorization: localStorage.getItem("token") },
        }).
}

function App() {
  return (
    <>
    
    <AppModules />
    <ChatDisplay />
    <ModuleDisplay />
    
    </>
  )
}

export default App
