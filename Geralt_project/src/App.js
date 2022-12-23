import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Footer from './components/Footer'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Notfound from './components/Notfound'


import Users from './components/Users'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
     
      
        <Route path="/users" element={<Users />} />
      
        <Route path="*" element={<Notfound />} />
      </Routes>

      <Footer />
      
    </BrowserRouter>
  )
}

export default App
