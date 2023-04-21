import React, { useState, useEffect, Fragment } from 'react';
import axios from '../axios';

const Home = () => {

  const [data, setData] = useState('');

  const fetchData = async () => {
    const response = await axios.get('/');
    setData(response.data);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Fragment>
      {/* code goes here */}
    </Fragment>
  )
}

export default Home