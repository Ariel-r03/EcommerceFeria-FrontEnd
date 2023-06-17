import React, { useState, useContext } from "react";
import { products } from "../../../Constants";
import { CardProduct } from "../../../Components";
import { FilterShopComponent } from "../ShopPageComponents";
function ShopPageBody() {
  const [isFilter,setIsFilter]=useState(false);
  return (
    <section className="sm:border-2">
      <div className="mx-[2rem]">
        <h1 className="text-[28px] font-semibold sm:hidden">Tienda</h1>
        <div className="mt-2 flex w-full justify-between sm:hidden">
          <button className="bg-slate-950 text-white w-[155px] h-[40px]">
            Buscar
          </button>
          <button
            /*onClick={() => {
              setIsFilter(true);
            }}*/
            className="bg-slate-950 text-white w-[155px] h-[40px]"
          >
            Filtrar
          </button>
        </div>
        <div className="mt-[2rem] sm:grid grid-cols-2">
          {products.map((product) => (
            <CardProduct props={product} />
          ))}
        </div>
      </div>
      {
        isFilter && 
        <div className="fixed top-14 w-full">
          <FilterShopComponent/>
        </div>
        
      }
    </section>
  );
}

export default ShopPageBody;
