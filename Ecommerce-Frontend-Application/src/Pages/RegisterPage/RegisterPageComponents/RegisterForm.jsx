import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { UserRegister } from "../../../Services/Register";
function RegisterForm() {
  const [isLoading, setIsLoading] = useState(false);
  const onSubmit = async (data, e) => {
    e.preventDefault();
    setIsLoading(true);
    console.log(data);
    const response = await UserRegister(
      "http://ec2-54-226-200-205.compute-1.amazonaws.com/v1/auth/register",
      data
    );
    if (response.error == undefined) {
      alert("Te has registrado satisfactoriamente");
      navigate("/login");
    } else {
      alert(response.error);
    }
    setIsLoading(false);
  };
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  //const [contra, setContra] = useState("");
  const navigate = useNavigate();

  /*const onChangePassword = (e) => {
    setContra(e.target.value);
    console.log(e.target.value);
  };*/
  return (
    <section className="flex justify-center items-center min-h-full">
      <form
        className="flex flex-col justify-center items-center bg-white rounded-xl shadow-xl min-w-[350px] sm:min-w-[500px] my-[5rem]"
        action=""
      >
        <h1 className="my-[3rem] text-[18px] sm:text-[22px] font-semibold">
          Crea tu cuenta en SmartCell
        </h1>
        <label className="self-start ml-[2rem] sm:ml-[3.2rem]" htmlFor="">
          Username*
        </label>
        <input
          className="border-2 w-[280px] h-[40px] my-5 sm:w-[400px] sm:h-[45px] sm:my-5 px-2 shadow-md"
          type="text"
          {...register("username", {
            required: {
              value: true,
              message: "El campo username es requerido",
            },
            pattern: {
              value: /^(?!.*\.\.)(?!.*\.$)[^\W]{3,16}$/,
              message: "Carácteres no válidos",
            },
            minLength: {
              value: 3,
              message: "El nombre de usuario debe tener mínimo 3 carácteres",
            },
            maxLength: {
              value: 10,
              message: "El nombre de usuario debe tener máximo 10 carácteres",
            },
          })}
        />
        {errors.username && (
          <span className="text-red-600 text-[13px]">
            {errors.username.message}
          </span>
        )}
        <label className="self-start ml-[2rem] sm:ml-[3.2rem]" htmlFor="">
          Correo electrónico*
        </label>
        <input
          className="border-2 w-[280px] h-[40px] my-5 sm:w-[400px] sm:h-[45px] sm:my-5 px-2 shadow-md"
          type="text"
          {...register("email", {
            required: {
              value: true,
              message: "El campo email es requerido",
            },
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "La dirección de correo que ha ingresado no es válida",
            },
          })}
        />
        {errors.email && (
          <span className="text-red-600 text-[13px]">
            {errors.email.message}
          </span>
        )}
        <label className="self-start ml-[2rem] sm:ml-[3.2rem]" htmlFor="">
          Contraseña
        </label>
        <input
          className="border-2 w-[280px] h-[40px] my-5 sm:w-[400px] sm:h-[45px] sm:my-5 px-2 shadow-md"
          type="password"
          {...register("password", {
            required: {
              value: true,
              message: "El campo es requerido",
            },
            minLength: {
              value: 6,
              message: "La contraseña debe de tener al menos 6 caracteres",
            },
            maxLength: {
              value: 15,
              message: "La contraseña excede el número de caracteres",
            },
          })}
        />
        {errors.password && (
          <span className="text-red-600 text-[13px]">
            {errors.password.message}
          </span>
        )}

        <label className="self-start ml-[2rem] sm:ml-[3.2rem]" htmlFor="">
          Nombre
        </label>
        <input
          className="border-2 w-[280px] h-[40px] my-5 sm:w-[400px] sm:h-[45px] sm:my-5 px-2 shadow-md"
          type="text"
          {...register("name", {
            required: {
              value: true,
              message: "El campo nombre es requerido",
            },
            pattern: {
              value: /^[a-zA-ZÀ-ÿ-']+(\s[a-zA-ZÀ-ÿ-']+)*$/,
              message:
                "El nombre que ha ingresado contiene carácteres no válidos",
            },
          })}
        />
        {errors.name && (
          <span className="text-red-600 text-[13px]">
            {errors.name.message}
          </span>
        )}
        <label className="self-start ml-[2rem] sm:ml-[3.2rem]" htmlFor="">
          Apellido
        </label>
        <input
          className="border-2 w-[280px] h-[40px] my-5 sm:w-[400px] sm:h-[45px] sm:my-5 px-2 shadow-md"
          type="text"
          {...register("lastname", {
            required: {
              value: true,
              message: "El campo apellido es requerido",
            },
            pattern: {
              value: /^[a-zA-ZÀ-ÿ-']+(\s[a-zA-ZÀ-ÿ-']+)*$/,
              message:
                "El apellido que ha ingresado contiene carácteres no válidos",
            },
          })}
        />
        {errors.lastname && (
          <span className="text-red-600 text-[13px]">
            {errors.lastname.message}
          </span>
        )}

        {isLoading && (
          <div className="flex justify-center items-center">
            <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-gray-900"></div>
          </div>
        )}
        <div className="my-[3rem] flex flex-row justify-between sm:w-[380px] w-[280px] ">
          <button
            className="font-semibold rounded-full bg-blue-500 px-[2rem] py-2"
            onClick={() => navigate("/login")}
          >
            Atrás
          </button>
          <button
            type="submit"
            onClick={handleSubmit(onSubmit)}
            className="font-semibold rounded-full bg-blue-500 px-[2rem] py-2"
          >
            Siguiente
          </button>
        </div>
      </form>
    </section>
  );
}

export default RegisterForm;
