import { Route, Routes } from 'react-router-dom';


import Home from './components/Home'
import Login from './components/Login';
import Register from './components/Register';
import UserDashboard from './components/UserDashboard';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './components/About';
import AdminDashboard from './components/AdminDashboard';
function App() {

  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login/>} />
      <Route path="/register" element={<Register/>} />
      <Route path='/About' element={<About />} />
      <Route path='/Userdashboard' element={<UserDashboard/>} />
      <Route path='/AdminDashboard' element={<AdminDashboard/>} />
    </Routes>
    <Footer />
    </>
  
  )
}

export default App
