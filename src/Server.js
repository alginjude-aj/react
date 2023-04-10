import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Server = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('/user')
      .then(res => setData(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      {data.map(item => <p key={item.id}>{item.name}</p>)}
    </div>
  );
}

export default Server;
