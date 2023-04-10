import React, { useState } from 'react';
import axios from 'axios';

const UserForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/users', {
        name: name,
        email: email
      });
      console.log(response.data);
      window.location.reload();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: '400px', margin: ' 1 ', padding: '20px', border: '1px solid #ddd', borderRadius: '5px' }}>
      <label style={{ display: 'block', marginBottom: '10px' }}>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} style={{ display: 'block', width: '80%', padding: '10px', marginBottom: '10px', border: '1px solid #ddd', borderRadius: '5px' }} />
      </label>
      <label style={{ display: 'block', marginBottom: '10px' }}>
        Email:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} style={{ display: 'block', width: '80%', padding: '10px', marginBottom: '10px', border: '1px solid #ddd', borderRadius: '5px' }} />
      </label>
      <button type="submit" style={{ display: 'block', padding: '10px', backgroundColor: '#0077cc', color: '#fff', border: 'none', borderRadius: '5px' }}>Submit</button>
    </form>
  );
};



export default UserForm;
