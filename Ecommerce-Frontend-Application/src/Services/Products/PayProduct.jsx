import axios from "axios";

const PayProduct = async (id,token) => {
  try {
    const url =
      "http://ec2-54-226-200-205.compute-1.amazonaws.com/v1/product/stock/" + id;
    const response = await axios.put(url, {
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

export default PayProduct;
