import React, { useState, useEffect, Fragment } from 'react';
import axios from '../axios';
import { useSelector, useDispatch } from 'react-redux'
import { operation } from "../slice/counter"

const Home = () => {

  const dispatch = useDispatch()
  const reduxValue = useSelector(state => state.demo.value)
 
  const fetchData = async () => {
    const response = await axios.get('/');
    dispatch(operation(response.data))
  }

  useEffect(() => {
    // default axious call. use this as per your need.
    fetchData();
  }, []);

  return (
    <Fragment>
      {/* code goes here */}
      {/* Start the server first it will port on 5000. start the react-app it will port on 3000 */}
      {/* You are ready to go Happy coding :)*/}
    </Fragment>
  )
}

export default Home