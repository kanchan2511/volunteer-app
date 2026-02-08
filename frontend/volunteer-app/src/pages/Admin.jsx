import React, { useEffect, useState } from 'react'
import "./Admin.css"

const Admin = () => {
    const [volunteers, setVolunteers] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        fetch("https://volunteer-app-66mb.onrender.com/api/volunteers")
            .then(res => res.json())
            .then(data => {
                setVolunteers(data)
                setLoading(false)
            })
            .catch(err => {
                console.log(err)
                setLoading(false)
            })
    }, [])
    if (loading) return <div className="container">Loading volunteers...</div>;
    return (
        <div className="container admin">
            <h1>Volunteer Dashboard</h1>

            {volunteers.length === 0 ? (
                <p>No registrations yet.</p>
            ) : (
                <div className="table-wrapper">
                    <table className="admin-table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Contact</th>
                                <th>DOB</th>
                                <th>Location</th>
                                <th>Languages</th>
                                <th>Availability</th>
                            </tr>
                        </thead>

                        <tbody>
                            {volunteers.map(v => (
                                <tr key={v._id}>
                                    <td>{v.name}</td>
                                    <td>{v.email}</td>
                                    <td>{v.contact}</td>
                                    <td>{v.dob}</td>
                                    <td>{v.location}</td>
                                    <td>{v.languages || "-"}</td>
                                    <td>{v.availability.join(", ")}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );

}

export default Admin