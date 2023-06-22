import React, { useContext } from "react";
import ShoppingCartContext from "../../../Contexts/ShoppingCart/ShoppingCartProvider";
import { ShoppingCartProductCard } from "../ShoppingCartComponents";
import { Check, ShopCart,CreditCards } from "../../../Assets";

function ShoppingCartBody() {
  const { cartProducts } = useContext(ShoppingCartContext);

  if (cartProducts.length === 0) {
    return (
      <h1 className="text-slate-900 text-xl font-bold text-center">
        Tu carrito de compras esta vacio.
      </h1>
    );
  }

  return (
    <section className="">
      <div className="flex flex-col">
        <div>
          {cartProducts.map((product) => (
            <ShoppingCartProductCard key={product.id} props={product} />
          ))}
        </div>
        <div className="flex flex-row justify-center items-center self-center py-3 px-3 shadow-xl shadow-slate-300 w-[300px]">
          <img src={ShopCart} alt="" />
          <p>Continuar Comprando</p>
        </div>
        <div className="mt-5 mx-5">
          <p className="text-[20px] font-bold border-b border-slate-700 mb-5 pb-2">
            Resumen del pedido
          </p>
          <div className="flex flex-row w-[100%] justify-between border-b-2 border-slate-700 mb-2 pb-2">
            <div className="text-[18px]">
              <p>Subtotal</p>
              <p>Envío</p>
              <p>Impuestos</p>
            </div>
            <div className="text-[18px]">
              <p>1798.00</p>
              <p>100.00</p>
              <p>284.79</p>
            </div>
          </div>
          <div className="flex flex-row w-[100%] justify-between text-[20px] font-bold">
            <div className="">
              <p>Total</p>
            </div>
            <div>
              <p className="font-normal">2182.79</p>
            </div>
          </div>
          <div className="flex mt-5 mb-3 justify-center">
            <button className="w-[300px] h-[40px] border-2 border-slate-800">
              Pagar
            </button>
          </div>
        </div>

        <div className="mx-5">
          <div className="flex flex-row">
            <img src={Check} alt=""></img>
            <p className="ml-5">Incluye 3 meses de garantía</p>
          </div>
          <div className="flex flex-row">
            <img src={Check} alt=""></img>
            <p className="ml-5">Devoluciones fáciles</p>
          </div>
          <div className="flex flex-row">
            <img src={Check} alt=""></img>
            <p className="ml-5">Consulta gratuita con expertos</p>
          </div>
        </div>
        <div className="mt-5 flex flex-col justify-center items-center">
            <p>Aceptamos Tarjetas de crédito</p>
            <img className="w-[300px]" src={CreditCards} alt="" />
        </div>
      </div>
    </section>
  );
}

export default ShoppingCartBody;
