import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Navigate } from 'react-router-dom'


import Header from './components/Header.jsx'
import Login from './pages/Login.jsx'
import ContactInfo from './pages/ContactInfo.jsx'
import Availability from './pages/Availability.jsx'
import Admin from './pages/Admin.jsx'


const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    dob: "",
    location: "",
    languages: "",
    availability: []
  })
  return (
    <div>
      {isLoggedIn && <Header />}
      <Routes>
        <Route path="/" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route
          path="/contact"
          element={
            isLoggedIn ? (
              <ContactInfo
                formData={formData}
                setFormData={setFormData}
              />
            ) : (
              <Navigate to="/" />
            )
          }
        />
        <Route
          path="/availability"
          element={
            isLoggedIn ? (
              <Availability
                formData={formData}
                setFormData={setFormData}
                setIsLoggedIn={setIsLoggedIn}
              />
            ) : (
              <Navigate to="/" />
            )
          }
        />
        <Route
          path="/admin"
          element={isLoggedIn ? <Admin /> : <Navigate to="/" />}
        />

      </Routes>
    </div>
  )
}

export default App