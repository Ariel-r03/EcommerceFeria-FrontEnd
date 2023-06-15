import React from "react";
import axios from 'axios';

const postRequest = async (URL,data) => {
  try {
    const response = await axios.post(URL, data);
    return (response.data);
  } catch (error) {
    return error;
  }
};

export default postRequest;
