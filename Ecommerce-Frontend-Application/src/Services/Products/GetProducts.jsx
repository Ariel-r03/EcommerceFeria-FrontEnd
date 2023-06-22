import React from "react";
import axios from "axios";

const GetProducts = async () => {
  try {
    const response = await axios.get('http://ec2-54-226-200-205.compute-1.amazonaws.com/v1/product');
    console.log(response.data);
    return(response.data);
  } catch (error) {
    console.error(error);
    // Handle any errors that occurred during the request
  }
};

export default GetProducts;
