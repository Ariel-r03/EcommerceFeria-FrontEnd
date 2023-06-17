import React, { useState, useContext } from "react";
import { products } from "../../../Constants";
import { CardProduct } from "../../../Components";
import { FilterShopComponent } from "../ShopPageComponents";
import Modal from "react-modal";
import { FilterContext } from "../../../Contexts/FilterModal/FilterContext";
function ShopPageBody() {
  Modal.setAppElement(document.getElementById('root'));
  const { isFilter,modifyingIsFilter } = useContext(FilterContext);
  const customStyles = {
    content: {
      top: "72%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      width: "100%",
    },
  };

  return (
    <section className="sm:border-2">
      <div className="mx-[2rem]">
        <h1 className="text-[28px] font-semibold sm:hidden">Tienda</h1>
        <div className="mt-2 flex w-full justify-between sm:hidden">
          <button className="bg-slate-950 text-white w-[155px] h-[40px]">
            Buscar
          </button>
          <button
            onClick={modifyingIsFilter}
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

      <Modal isOpen={isFilter} style={customStyles}>
        <div className="w-full">
          <FilterShopComponent />
        </div>
      </Modal>
    </section>
  );
}

export default ShopPageBody;
