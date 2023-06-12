import React from "react";
import {products} from '../../../Constants'
import {CardProduct} from '../../../Components'
function ShopPageBody() {
  return (
    <section>
      <h1 className="text-[28px] font-semibold">Tienda</h1>
      <div className="mt-2 flex w-full justify-between">
        <button className="bg-slate-950 text-white w-[155px] h-[40px]">Buscar</button>
        <button className="bg-slate-950 text-white w-[155px] h-[40px]">Filtrar</button>
      </div>
      <div className="mt-[2rem]">
        {
            products.map((product)=>(
                <CardProduct props={product}/>
            ))
        }
      </div>

     
    </section>
  );
}

export default ShopPageBody;
