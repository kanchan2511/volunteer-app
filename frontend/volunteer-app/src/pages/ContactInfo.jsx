
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./ContactInfo.css"

function ContactInfo({ formData, setFormData }) {
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleNext = () => {
    const { name, email, contact, dob } = formData;

    if (!name.trim() || !email.trim() || !contact.trim() || !dob) {
      setError("Please fill all fields");
      return;
    }
    if(!/^\d{10}$/.test(contact)){
      setError("Contact must be 10 digits")
      return;
    }
     const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailPattern.test(email)){
      alert("Enter a valid email address")
      return;
    }

    setError("");
    navigate("/availability");
  };

  return (
    <div className="container">
      <h1>Contact Info</h1>
       <label>Name:</label>
      <input name="name" placeholder="Name" value={formData.name} onChange={handleChange} />
      <label>Email:</label>
      <input name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
      <label>Contact:</label>
      <input name="contact" placeholder="Contact" value={formData.contact} onChange={handleChange} />
      <label>Date Of Birth: </label>
      <input type="date"  placeholder="DOB" name="dob" value={formData.dob} onChange={handleChange}
     />

      {error && <p style={{ color: "red" }}>{error}</p>}

      <button onClick={handleNext}>Next</button>
    </div>
  );
}

export default ContactInfo;
