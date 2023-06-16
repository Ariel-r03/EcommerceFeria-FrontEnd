import React from "react";
import { BannerImgAuthPage, BackgroundLoginPage } from "../../../Assets";
import { socialMedias } from "../../../Constants";
import { useForm} from "react-hook-form"
import {postRequest} from '../../../Services/Login'
import { useNavigate } from 'react-router-dom';
function LoginForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const navigate = useNavigate();

  const onSubmit = async(data) => {
    const response=await postRequest("http://ec2-54-226-200-205.compute-1.amazonaws.com/v1/auth/login",data);
    console.log(response);
    alert("Bienvenido "+response.username);
    navigate("/")
  }
  return (
    <section className="h-[100%] flex justify-center items-center">
      <div className="relative sm:static flex justify-center items-center h-full w-full">
        <img className="sm:hidden" src={BackgroundLoginPage} alt="" />
        <div className="hidden sm:inline-block w-1/2">
          <img className="" src={BannerImgAuthPage} alt="" />
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white px-[3rem] flex flex-col  items-center absolute mx-0 my-0 self-center max-w-[360px] min-h-[700px]
          sm:static sm:max-w-[500px] sm:min-h-max sm:shadow-lg"
          action=""
        >
          <h1 className="text-[30px] mt-[2rem] sm:pt-[3rem] font-bold mb-[2rem] ">
            Iniciar sesión
          </h1>
          <input
            placeholder="Usuario"
            className="border-2 w-[340px] h-[40px] my-3 sm:w-[400px] sm:h-[45px] sm:my-5 px-2 shadow-md"
            type="text"
            {...register("username")}
          />
          <input
            placeholder="Contraseña"
            className="border-2 w-[340px] h-[40px] my-3 sm:w-[400px] sm:h-[45px] sm:my-5 px-2 shadow-md"
            type="password"
            {...register("password")}
          />
          <div className="flex flex-row w-[340px] sm:w-[400px] justify-between my-5 sm:my-2.5">
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
          <button className="text-white mt-[1rem] font-bold w-[340px] sm:w-[400px] h-[45px] my-5 hover:cursor-pointer bg-[#0465D8]">
            Iniciar sesion
          </button>
          <span className="text-[15px] text-[#767B97] mt-[2rem]">
            ¿No tienes cuenta aun? <br />
            <span onClick={()=>navigate("/register")} className="flex justify-center mb-[2rem] hover:cursor-pointer">
              Regístrate aqui
            </span>
          </span>

          <ul className="flex">
            {socialMedias.map((media) => (
              <li className="my-[1rem] mx-[1rem] sm:my-[2rem] sm:mx-[3rem] hover:cursor-pointer">
                <img src={media.icon} alt="" />
              </li>
            ))}
          </ul>
        </form>
      </div>
    </section>
  );
}

export default LoginForm;
