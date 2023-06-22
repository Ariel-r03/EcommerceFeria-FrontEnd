import React, { useContext } from "react";
import axios from "axios";

const ImgUpload = async (data, token) => {
  try {
    const response = await axios.post(
      "http://ec2-54-226-200-205.compute-1.amazonaws.com/v1/util/image/upload",
      data,
      {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    // Handle any errors that occurred during the request
  }
};

export default ImgUpload;
