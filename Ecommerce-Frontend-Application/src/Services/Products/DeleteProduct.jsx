import React from "react";
import axios from "axios";

const DeleteProduct = async (id,token) => {
  try {
    const url =
      "http://ec2-54-226-200-205.compute-1.amazonaws.com/v1/product/" + id;
    const response = await axios.delete(url, {
      headers: {
        Authorization: `${token}`,
        "Content-Type": "application/json",
      },
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    // Manejar cualquier error que haya ocurrido durante la petición
  }
};

export default DeleteProduct;
