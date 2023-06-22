import React, { useContext } from "react";
import { CloseProductcard } from "../../../Assets";
import ShoppingCartContext from "../../../Contexts/ShoppingCart/ShoppingCartProvider";
function ShoppingCartProductCard({ props }) {
  const { deleteProduct } = useContext(ShoppingCartContext);
  return (
    <div className="h-[250px] sm:w-[650px] shadow-2xl shadow-slate-600 flex flex-row mt-[2rem] mb-[3rem] mx-3 px-2 py-[2rem]">
      <div className="w-[500px] sm:w-[200px]">
        <img className="" src={props.icon} alt="" />
      </div>
      <div className="w-[500px] sm:w-[300px] flex flex-col">
        <p className="font-bold text-[14px]">
          {props.title + ", " + props.description}
        </p>
        <span className="text-[12px]">
          Delivery estimado <br />
          28-30 Jul
        </span>
      </div>
      <div className="flex flex-col justify-between h-[100%] mx-2 sm:mx-5">
        <p className="text-[15px] sm:text-[20px] font-extrabold self-start ">${props.price}</p>
        <img
          onClick={() => {
            deleteProduct(props.id);
          }}
          className="self-end w-[30px] sm:w-[40px] hover:cursor-pointer"
          src={CloseProductcard}
          alt=""
        />
      </div>
    </div>
  );
}

export default ShoppingCartProductCard;
