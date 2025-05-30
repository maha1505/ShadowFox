import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Users.css'; // add CSS

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_URL}/users`)
      .then(res => setUsers(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="users-container">
      <h2>✨ Team Details ✨</h2>
      <div className="card-grid">
        {users.map(user => (
          <div key={user.id} className="user-card">
            <div className="avatar">
              {user.name.charAt(0).toUpperCase()}
            </div>
            <h3>{user.name}</h3>
            <p className="email">{user.email}</p>
            <p className="role">Role: Developer</p>
            <p className="joined">Joined: May 2025</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Users;
