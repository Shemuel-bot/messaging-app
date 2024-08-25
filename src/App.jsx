import { useState } from 'react';
import './App.css'
import AppModules from './modules/AppModules.jsx';
import ChatDisplay from './modules/ChatDisplay.jsx';
import ModuleDisplay from './modules/ModuleDisplay.jsx';

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
