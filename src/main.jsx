import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router'
import Navbar from './Navbar.jsx'
import Value from './Value.jsx'
import Passion from './Passion.jsx'
import Work from './Work.jsx'
import Services from './Services.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Navbar></Navbar>
    <Routes>
      <Route path='/' element={
        <div className='bg-[#F9FBF3]'>
          <Value></Value>
          <Passion></Passion>
          <Work></Work>
          <Services></Services>
        </div>
      }>
      </Route>
    </Routes>
  </BrowserRouter>,
)
