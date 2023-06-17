import React from "react";
import { categories, brands, createDates } from "../../../Constants";
function Categories() {
  return (
    <section className="min-h-full min-w-full">
      <div className="border-b-2">
        <p className="ml-[4rem] pt-[2rem] font-bold text-[20px]">CATEGORIAS</p>
        <ul className="flex flex-col pb-[4rem]">
          {categories.map((cat) => (
            <li className="flex flex-row my-1">
              <input className="ml-[1rem] w-[15px]" type="checkbox" />
              <p className="ml-[2rem] text-[15px]">{cat.title}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className="border-b-2">
        <p className="ml-[4rem] pt-[2rem] font-bold text-[20px]">MARCAS</p>
        <ul className="flex flex-col pb-[4rem]">
          {brands.map((brand) => (
            <li className="flex flex-row my-1">
              <input className="ml-[1rem] w-[15px]" type="checkbox" />
              <p className="ml-[2rem] text-[15px]">{brand.title}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className="border-b-2">
        <p className="ml-[4rem] pt-[2rem] font-bold text-[20px]">Fecha de lanzamiento</p>
        <ul className="flex flex-col pb-[4rem]">
          {createDates.map((date) => (
            <li className="flex flex-row my-1">
              <input className="ml-[1rem] w-[15px]" type="checkbox" />
              <p className="ml-[2rem] text-[15px]">{date.title}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex justify-center py-[3rem]">
      <button className="font-medium underline">Borrar todos los filtros</button>
      </div>
    </section>
  );
}

export default Categories;
