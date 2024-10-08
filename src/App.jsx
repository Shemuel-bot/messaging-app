import { useEffect } from 'react';
import './App.css'
import AppModules from './modules/AppModules.jsx';
import ChatDisplay from './modules/ChatDisplay.jsx';
import ModuleDisplay from './modules/ModuleDisplay.jsx';
import { useNavigate } from 'react-router-dom';

function App() {
  const navigate = useNavigate();
  useEffect(() => {
    fetch('https://managing-tessi-third-guy-36437de9.koyeb.app/api/home', {
      method: 'get',
      headers: { authorization: `Bearer ${localStorage.getItem("token")}` },
    }).then(async res => {
      const a = await res.json();
      if(a.value === false)
         navigate('/')
    })
  }, [])

  return (
    <>
    
    <AppModules />
    <ChatDisplay />
    <ModuleDisplay />
    
    </>
  )
}

export default App
