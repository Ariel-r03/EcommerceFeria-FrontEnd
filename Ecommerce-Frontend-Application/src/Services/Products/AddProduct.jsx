import axios from "axios";

const AddProduct = async (data, token) => {
  try {
    const response = await axios.post(
      "http://ec2-54-226-200-205.compute-1.amazonaws.com/v1/product",
      data,
      {
        headers: {
          Authorization: `${token}`,
          'Content-Type': 'application/json'
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

export default AddProduct;