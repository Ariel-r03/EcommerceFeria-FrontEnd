import React, { useContext, useEffect, useState } from "react";
import ShoppingCartContext from "../../../Contexts/ShoppingCart/ShoppingCartProvider";
import AuthContext from '../../../Contexts/Authentication/AuthProvider'
import { ShoppingCartProductCard } from "../ShoppingCartComponents";
import { Check, ShopCart, CreditCards } from "../../../Assets";
import {PayProduct} from '../../../Services/Products'
import { useNavigate } from "react-router-dom";

function ShoppingCartBody() {
  const navigate = useNavigate();
  const { cartProducts } = useContext(ShoppingCartContext);
  const {auth}=useContext(AuthContext);
  const [envio, setEnvio] = useState(100);
  const subTotal = cartProducts.reduce(
    (total, obj) => total + parseFloat(obj.price),
    0
  );
  const impuestos = subTotal * 0.15;
  const total = subTotal + impuestos;
  if (cartProducts.length === 0) {
    return (
      <div className="min-h-screen">
        <h1 className="text-slate-900 text-xl font-bold text-center">
          Tu carrito de compras esta vacio.
        </h1>
      </div>
    );
  }

  const handlePay = ()=>{
    if(Object.keys(auth).length == 0){
      navigate("/login");
    }
    cartProducts.map(async(c)=>{
      const res= await PayProduct(c.id,auth.user.token);
    })
  }

  return (
    <section className="sm:flex justify-center">
      <div className="flex flex-col sm:flex-row sm:w-[90%]">
        <div className="sm:w-[60%]">
          {cartProducts.map((product) => (
            <ShoppingCartProductCard key={product.id} props={product} />
          ))}
        </div>
        <div
          onClick={() => {
            navigate("/tienda");
          }}
          className="sm:hidden flex flex-row justify-center items-center self-center py-3 px-3 shadow-xl shadow-slate-300 w-[300px]"
        >
          <img src={ShopCart} alt="" />
          <p>Continuar Comprando</p>
        </div>
        <div className="mt-5 mx-5 sm:w-[30%] sm:h-[700px] sm:mb-5 sm:border-2 border-slate-800 sm:px-5">
          <p className="text-[20px] font-bold border-b border-slate-700 my-5 pb-2">
            Resumen del pedido
          </p>
          <div className="flex flex-row w-[100%] justify-between border-b-2 border-slate-700 mb-2 pb-2">
            <div className="text-[18px]">
              <p>Subtotal</p>
              <p>Envío</p>
              <p>Impuestos</p>
            </div>
            <div className="text-[18px]">
              <p>{subTotal}</p>
              <p>{envio}</p>
              <p>{impuestos.toFixed(2)}</p>
            </div>
          </div>
          <div className="flex flex-row w-[100%] justify-between text-[20px] font-bold">
            <div className="">
              <p>Total</p>
            </div>
            <div>
              <p className="font-normal">{total.toFixed(2)}</p>
            </div>
          </div>
          <div className="flex mt-5 mb-3 justify-center">
            <button onClick={handlePay} className="w-[300px] h-[40px] border-2 border-slate-800">
              Pagar
            </button>
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

            <div className="mt-5 flex flex-col justify-center items-center">
              <p>Aceptamos Tarjetas de crédito</p>
              <img className="w-[300px]" src={CreditCards} alt="" />
            </div>
          </div>
          
        </div>
        
      </div>
    </section>
  );
}

export default ShoppingCartBody;
