import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes,Route} from 'react-router-dom';
import './index.css'
import App from './App.jsx'
import Todolist from './components/todolist.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
  <Routes> 
  <Route path="/" element={<App/>} />
  <Route path="/todo" element={<Todolist/>} />
  </Routes>
</BrowserRouter>
  </StrictMode>,
)