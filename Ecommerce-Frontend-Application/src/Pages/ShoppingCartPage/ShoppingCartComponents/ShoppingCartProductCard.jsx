import React from "react";
import { CloseProductcard } from "../../../Assets";
function ShoppingCartProductCard({ props }) {
  return (
    <div className="h-[250px] shadow-2xl shadow-slate-600 flex flex-row mt-[2rem] mb-[3rem] mx-3 px-2 py-[2rem]">
      <div className="w-[500px]">
        <img className="" src={props.icon} alt="" />
      </div>
      <div className="w-[500px] flex flex-col">
        <p className="font-bold text-[14px]">
          {props.title + ", " + props.description}
        </p>
        <span className="text-[12px]">
          Delivery estimado <br />
          28-30 Jul
        </span>
      </div>
      <div className="flex flex-col justify-between h-[100%] mx-2">
        <p className="text-[15px] font-bold self-start ">${props.price}</p>
        <img className="self-end w-[30px]" src={CloseProductcard} alt="" />
      </div>
    </div>
  );
}

export default ShoppingCartProductCard;
