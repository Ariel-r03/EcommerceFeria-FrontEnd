import React, { useState,useContext } from "react";
import { IconArrowDown, IconArrowUp } from "../../../Assets";
import { categories,brands,createDates } from "../../../Constants";
import {FilterContext} from '../../../Contexts/FilterModal/FilterContext'

function FilterShopComponent() {
  const [isActiveCategory, setIsActiveCategory] = useState(false);
  const [isActiveBrand, setIsActiveBrand] = useState(false);
  const [isActiveLaunchDate, setIsActiveLaunchDate] = useState(false);
  const {modifyingIsFilter} = useContext(FilterContext);
  return (
    <div className="bg-white w-full h-screen  border-slate-950">
      <div className="px-5 flex flex-row justify-between items-center bg-smoothSlate h-[55px]">
        <p className="text-[25px] font-normal">Filtro</p>
        <p onClick={modifyingIsFilter} className="text-[20px] font-normal text-[#747373]">X</p>
      </div>

      <div className="border-b-2">
        <div className="flex flex-row justify-between items-center h-[40px]">
          <button className="px-5 text-[20px]">Categorias</button>
          <img
            onClick={() => {
              setIsActiveCategory(!isActiveCategory);
            }}
            className="px-2 max-h-[30px] w-[50px]"
            src={isActiveCategory ? IconArrowDown : IconArrowUp}
            alt=""
          />
        </div>
        <div className="flex flex-col">
          {isActiveCategory && (
            <ul className="pb-8">
              {categories.map((cat) => (
                <div className="flex flex-row mx-5 w-full">
                  <input
                    className="w-[20px] border-none bg-slate-500"
                    type="checkbox"
                  ></input>
                  <li key={cat.id} className="mx-2 text-[18px] text-[#5F5F5F]">
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
              setIsActiveBrand(!isActiveBrand);
            }}
            className="px-2 max-h-[30px] w-[50px]"
            src={isActiveBrand ? IconArrowDown : IconArrowUp}
            alt=""
          />
        </div>

        <div className="flex flex-col">
          {isActiveBrand && (
            <ul className="pb-8">
              {brands.map((brand) => (
                <div className="flex flex-row mx-5 w-full">
                  <input
                    className="w-[20px] border-none bg-slate-500"
                    type="checkbox"
                  ></input>
                  <li key={brand.id} className="mx-2 text-[18px] text-[#5F5F5F]">
                    {brand.title}
                  </li>
                </div>
              ))}
            </ul>
          )}
        </div>
       
      </div>

      <div className="border-b-2">
        <div className="flex flex-row justify-between items-center h-[40px]">
          <button className="px-5 text-[20px]">Fecha de lanzamiento</button>
          <img
            onClick={() => {
              setIsActiveLaunchDate(!isActiveLaunchDate);
            }}
            className="px-2 max-h-[30px] w-[50px]"
            src={isActiveLaunchDate ? IconArrowDown : IconArrowUp}
            alt=""
          />
        </div>

        <div className="flex flex-col">
          {isActiveLaunchDate && (
            <ul className="pb-8">
              {createDates.map((date) => (
                <div className="flex flex-row mx-5 w-full">
                  <input
                    className="w-[20px] border-none bg-slate-500"
                    type="checkbox"
                  ></input>
                  <li key={date.id} className="mx-2 text-[18px] text-[#5F5F5F]">
                    {date.title}
                  </li>
                </div>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default FilterShopComponent;
