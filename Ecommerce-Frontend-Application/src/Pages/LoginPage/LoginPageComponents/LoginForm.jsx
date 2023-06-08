import React from "react";
import { BannerImgAuthPage } from "../../../Assets";
import { socialMedias } from "../../../Constants";
function LoginForm() {
  return (
    <section className="w-[80%] flex flex-col sm:px-[3rem]  sm:py-[2rem]  sm:w-[80%]">
      <div className="relative sm:w-[100%] sm:flex flex-row justify-center items-center">
        <div className="absolute h-full inset-0 sm:w-[60%] sm:static" >
          <img src={BannerImgAuthPage} alt="" />
        </div>
        <div className="absolute inset-0 sm:w-[40%] sm:static sm:h-[100%]">
          <form className="bg-white h-full flex flex-col justify-center items-center" action="">
            <h1 className="text-[30px] font-bold mt-[3rem] mb-[2rem]">
              Iniciar sesión
            </h1>
            <input
              placeholder="Usuario"
              className="border-2 w-[400px] h-[45px] my-5 px-2 shadow-md"
              type="text"
            />
            <input
              placeholder="Contraseña"
              className="border-2  w-[400px] h-[45px] my-5 px-2 shadow-md"
              type="text"
            />
            <div className="flex flex-row w-[400px] justify-between my-5">
              <div className="flex flex-row ">
                <input type="checkbox" className="w-[20px] " name="" id="" />
                <span className="text-[#7E6B6B] ml-2">Recuérdame</span>
              </div>
              <div>
                <span className="text-[10px] text-[#767B97] hover:cursor-pointer ">
                  Haz olvidado tu contraseña?
                </span>
              </div>
            </div>
            <button className="text-white font-bold w-[400px] h-[45px] my-5 hover:cursor-pointer bg-[#0465D8]">
              Iniciar sesion
            </button>
            <span className="text-[15px] text-[#767B97]">
              ¿No tienes cuenta aun? <br />
              <span className="flex justify-center hover:cursor-pointer">
                Regístrate aqui
              </span>
            </span>

            <ul className="flex flex-row">
              {socialMedias.map((media) => (
                <li className="my-[3rem] mx-[3rem] hover:cursor-pointer">
                  <img src={media.icon} alt="" />
                </li>
              ))}
            </ul>
          </form>
        </div>
      </div>
    </section>
  );
}

export default LoginForm;
