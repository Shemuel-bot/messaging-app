import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App.jsx'
import './index.css';
import ChatSearch from './modules/ChatSearch.jsx';
import PeopleSearch from './modules/PeopleSearch.jsx';
import RequestSearch from './modules/RequestSearch.jsx';
import ArchiveSearch from './modules/ArchiveSearch.jsx';
import LogIn from './modules/LogIn.jsx';
import SignUp from './modules/SignUp.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <LogIn />,
  },
  {
    path:'sign-up',
    element: <SignUp  />,
  },
  {
    path:'home',
    element: <App />,
    children: [
      {path: 'chat', element: <ChatSearch />},
      {path: 'people', element: <PeopleSearch />},
      {path: 'request', element: <RequestSearch />},
      {path: 'archive', element: <ArchiveSearch />}
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
