import React from 'react'
import axios from 'axios';

const UserRegister = async (URL,data) => {
  try {
    const response = await axios.post(URL, data);
    return (response.data);
  } catch (error) {
    return error.response.data;
  }
};

export default UserRegister
