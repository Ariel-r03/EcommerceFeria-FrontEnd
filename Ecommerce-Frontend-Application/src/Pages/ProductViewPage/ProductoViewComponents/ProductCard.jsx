import React, { useState, useEffect } from "react";
import { products } from "../../../Constants";
function ProductCard() {
  const [productId, setProductId] = useState(null);
  const [product, setProduct] = useState({});
  const searchProduct = (id) => {
    products.map((product) => {
      if (product.id == id) {
        console.log(product.title);
        setProduct(product);
      }
    });
  };
  useEffect(() => {
    const path = window.location.pathname.split("/");
    setProductId(path[3]);
    searchProduct(path[3]);
  }, []);
  return (
    <section className="flex flex-col sm:flex-row justify-center items-center mx-[2rem]">
      <div className="sm:w-[40%]">
        <div >
          <img className="sm:w-[500px] sm:h-[600px]" src={product.icon} alt="" />
        </div>
      </div>

      <div className="sm:w-[40%]">
        <div className="mt-5 pb-2 border-b border-slate-950">
          <h1 className="text-[20px] text-justify font-extrabold font sm:w-[85%] mb-2">
            {product.title + " " + product.description}
          </h1>
          <span className="text-[#797979] text-[15px]">Marca: {product.brand}</span>
        </div>
        <div className="flex flex-col self-start">
          <span className="text-[17px]">Color:</span>
          <div
            className={`self-start w-[25px] h-[25px] bg-[#${product.color}] my-2 border-2 border-slate-950`}
          ></div>
        </div>
        <div className="flex flex-row self-start my-5">
          <span className="mr-2 text-[17px]">Cantidad:</span>
          <select
            className="mr-5 w-[70px] border border-slate-900"
            name="Cantidad"
          >
            <option value="">1</option>
            <option value="">2</option>
            <option value="">3</option>
            <option value="">4</option>
            <option value="">5</option>
          </select>
          <p className="text-[20px] font-bold">${product.price}</p>
        </div>
        <div className="flex flex-col w-full border-b border-slate-950 pb-1 mb-3">
          <button className="border border-[#5D8BD0] text-[#5D8BD0] h-[35px] my-2">
            Agregar al carrito
          </button>
          <button className="border border-[#5D8BD0] text-[#5D8BD0] h-[35px] my-2">
            Comprar
          </button>
        </div>
        <div className="self-start">
          <p className="text-[17px] font-bold">Acerca de este teléfono</p>
          <ul className="list-disc mx-1 mt-[2rem] mb-[5rem]">
            {product.details?.map((det) => (
              <li className="my-1">{det}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default ProductCard;
