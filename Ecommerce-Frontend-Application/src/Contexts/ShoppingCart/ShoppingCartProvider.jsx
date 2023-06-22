import { createContext, useState,useEffect } from "react";

const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {
  const [cartProducts, setCartProducts] = useState([]);

  function addProduct(p) {
    setCartProducts((prevCartProducts) => [
      ...prevCartProducts,
      {
        id: p.id,
        title: p.title,
        icon: p.icon,
        price: p.price,
        description:p.description,
      },
    ]);
    console.log("Se ha agregado");
  }

  function deleteProduct(productId) {
    const index = cartProducts.findIndex((cart) => cart.id === productId);
    if (index !== -1) {
      setCartProducts(cartProducts.slice(0, index).concat(cartProducts.slice(index + 1)));
    }
  }

  useEffect(() => {
    const storedData = localStorage.getItem('cartProducts');
    if (storedData) {
      setCartProducts(JSON.parse(storedData));
    }
  }, []);

  // Actualiza los datos almacenados en el almacenamiento local cada vez que cambien
  useEffect(() => {
    localStorage.setItem('cartProducts', JSON.stringify(cartProducts));
    //localStorage.clear();
  }, [cartProducts]);

  return (
    <ShoppingCartContext.Provider value={{ cartProducts, addProduct,deleteProduct }}>
      {children}
    </ShoppingCartContext.Provider>
  );
};

export default ShoppingCartContext;
