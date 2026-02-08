import React, { useState } from 'react'
import './Availability.css'
import { useNavigate } from 'react-router-dom'
import { submitVolunteer } from '../services/api'

const Availability = ({formData,setFormData,setIsLoggedIn}) => {
    const navigate = useNavigate()
    const [error, setError] = useState("")
    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
    const handleCheckbox = day =>{
        let updated = [...(formData.availability || [])];
        if(updated.includes(day)){
            updated = updated.filter(d => d !== day)
        }else{
            updated.push(day)
        }
        setFormData({
            ...formData,
            availability: updated
        })
    }
      const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };


const handleSubmit = async () => {
  if (!formData.location || !formData.availability || formData.availability.length === 0) {
    setError("Please complete all required fields");
    return;
  }

  try {
    await submitVolunteer(formData);

    alert("Registration successful!");

    // reset form
    setFormData({
      name: "",
      email: "",
      contact: "",
      dob: "",
      location: "",
      languages: "",
      availability: []
    });

setIsLoggedIn(false);
    navigate("/");

  } catch (err) {
    setError("Server error. Try again.");
    console.log(err)
  }
};

    return (
        <div className='container'>
            <h1>Availability</h1>
            <input type="text"  name="location"
        placeholder="Location"
        value={formData.location}
        onChange={handleChange} />
            <input type="text" name="languages"
        placeholder="Languages"
        value={formData.languages}
        onChange={handleChange} />
            {days.map(day => (
                <label key={day} className="day-card">
                    <input type="checkbox" checked={formData.availability.includes(day)}
                    onChange={() => handleCheckbox(day)} />
                    <span className="checkmark"></span>
                    <span className="day-text">{day}</span>
                </label>
            ))}
            {error && <p style={{color:"red"}}>{error}</p>}
            <div className="button-row">
            <button onClick={() => navigate("/contact")}>Back</button>
            <button className='submit' onClick={handleSubmit}>Submit</button>
            </div>
        </div>
    )
}

export default Availability