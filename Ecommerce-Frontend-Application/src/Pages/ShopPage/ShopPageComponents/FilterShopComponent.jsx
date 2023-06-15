import React, { useState } from "react";
import { IconArrowDown, IconArrowUp } from "../../../Assets";
import { categories } from "../../../Constants";
import { DropDownMenu } from "../../../Components";

function FilterShopComponent() {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className="bg-white w-full h-screen  border-slate-950">
      <div className="px-5 flex flex-row justify-between items-center bg-smoothSlate h-[55px]">
        <p className="text-[25px] font-normal">Filtro</p>
        <p className="text-[20px] font-normal text-[#747373]">X</p>
      </div>

      <div className="border-b-2">
        <div className="flex flex-row justify-between items-center h-[40px]">
          <button className="px-5 text-[20px]">Categorias</button>
          <img
            onClick={() => {
              setIsActive(!isActive);
            }}
            className="px-2 max-h-[30px] w-[50px]"
            src={isActive ? IconArrowDown : IconArrowUp}
            alt=""
          />
        </div>
        <div className="flex flex-col">
          {isActive && (
            <ul className="pb-8">
              {categories.map((cat) => (
                <div className="flex flex-row mx-5 w-full">
                  <input
                    className="w-[20px] border-none bg-slate-500"
                    type="checkbox"
                  ></input>
                  <li className="mx-2 text-[18px] text-[#5F5F5F]">
                    {cat.title}
                  </li>
                </div>
              ))}
            </ul>
          )}
        </div>
      </div>

      <div className="border-b-2">
        <div className="flex flex-row justify-between items-center h-[40px]">
          <button className="px-5 text-[20px]">Marcas</button>
          <img
            onClick={() => {
              setIsActive(!isActive);
            }}
            className="px-2 max-h-[30px] w-[50px]"
            src={isActive ? IconArrowDown : IconArrowUp}
            alt=""
          />
        </div>
       
      </div>

      <div className="border-b-2">
        <div className="flex flex-row justify-between items-center h-[40px]">
          <button className="px-5 text-[20px]">Fecha de creación</button>
          <img
            onClick={() => {
              setIsActive(!isActive);
            }}
            className="px-2 max-h-[30px] w-[50px]"
            src={isActive ? IconArrowDown : IconArrowUp}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default FilterShopComponent;
