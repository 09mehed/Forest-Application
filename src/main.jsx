import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router'
import Navbar from './Navbar.jsx'
import Header from './Header.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Navbar></Navbar>
    <Routes>
      <Route path='/' element={<Header></Header>}></Route>
    </Routes>
  </BrowserRouter>,
)
