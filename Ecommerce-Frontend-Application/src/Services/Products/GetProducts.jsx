import React from "react";
import axios from "axios";

const GetProducts = async () => {
  axios
    .get("http://ec2-54-226-200-205.compute-1.amazonaws.com/v1/product")
    .then((response) => {
      // Handle successful response
      console.log(response.data);
      return response.data;
    })
    .catch((error) => {
      // Handle error
      console.error(error);
    });
};

export default GetProducts;
