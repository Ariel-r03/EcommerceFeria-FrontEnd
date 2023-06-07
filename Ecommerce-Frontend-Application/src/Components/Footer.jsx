import React from "react";
import { socialMedias } from "../Constants";

function Footer() {
  return (
    <section className="px-[3rem] sm:w-[80%] sm:flex flex-col sm:px-[4rem] py-[2rem] justify-center">
      <div className="w-full flex">
        <ul className="flex flex-col sm:flex-row w-[30%]  sm:w-[20%] items-center mr-[2rem]">
          <li className="mx-4 my-2 text-[12px] font-bold">Latin/Español{"(ES)"}</li>
          <li className="mx-4 my-2 text-[12px] font-bold cursor-pointer">
            Productos
          </li>
          <li className="mx-4 my-2 text-[12px] font-bold cursor-pointer">
            Contacto
          </li>
          <li className="mx-4 my-2 text-[12px] font-bold cursor-pointer">
            Privacidad
          </li>
        </ul>

        <ul className="flex flex-col sm:flex-row sm:justify-end items-center w-[70%]  sm:w-[80%]">
          <span className="mx-4 my-1 text-[12px] font-bold">
            ¡Mantente informado!
          </span>
          {socialMedias.map((media) => (
            <li className="mx-4 my-1 cursor-pointer">
              <img src={media.icon} alt="" />
            </li>
          ))}
        </ul>
      </div>
      <hr className="border-t-[2px] border-solid border-slate-950 my-[10px] mx-[10px]" />
      <div className="w-full flex sm:ml-4 justify-start">
        <span className="text-[12px] font-bold">
          Copyright© 2022-2023 Smart Cell. Todos los derechos reservados.
        </span>
      </div>
    </section>
  );
}

export default Footer;
