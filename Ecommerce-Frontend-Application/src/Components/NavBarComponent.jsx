import React, { useState } from "react";
import { Logo, Menu, Close } from "../Assets";
import { NavLinks, icons } from "../Constants";
import { useNavigate } from 'react-router-dom';

function NavBarComponent({prop}) {
  const [userDiv,setUserDiv]=useState(false)
  const [toggle, setToggle] = useState(false);
  const navigate = useNavigate();
 
 
  return (
    <section className="sm:w-[80%] sm:flex flex-col sm:px-[4rem]">
      <nav className="w-[100%] h-[5rem] flex flex-row">
        <div className="w-full flex">
          <div className="flex items-center w-[80%] sm:w-[30%] ">
            <img
              className="ml-2 w-[150px] sm:w-[170px] h-[60px] hover:cursor-pointer"
              src={Logo}
              alt="LogoEmpresa"
              onClick={()=>navigate("/")}
            />
          </div>

          <ul className="list-none sm:flex hidden flex-row items-center w-[70%] sm:ml-[1rem]">
            {NavLinks.map((link) => (
              <li
                key={link.id}
                className="text-[16px] mx-3 hover:cursor-pointer hover:text-slate-400"
                onClick={()=>{if(link.id=="tienda"){
                  navigate("/tienda")
                }}}
              >
                {link.title}
              </li>
            ))}
          </ul>
        </div>

        <div className={`${prop} flex flex-row sm:justify-end items-center w-full`}>
          {icons.map((icon) => (
            <img
              key={icon.id}
             onClick={()=>{
              if(icon.id === "usuario"){
                setUserDiv(!userDiv);
              }
             }}
              className="mx-3 w-[28px] sm:w-[28px] h-[28px] hover:cursor-pointer"
              src={icon.icon}
              alt={icon.id}
            ></img>
          ))}
        </div>
        <div className="bg-white border-2 rounded-xl absolute right-[8rem] top-[4rem] sm:right-[15rem] sm:top-[4rem] sm:z-10 ">
          {userDiv && <div className="w-[170px] h-[35px] sm:w-[250px] sm:h-[50px] flex justify-center items-center">
            <span onClick={()=>{navigate("/login")}} className="text-[12px] sm:text-[15px] hover:cursor-pointer hover:text-slate-400">Iniciar sesión/Registrarse</span></div> }
        </div>
        <div
          className="justify-end items-center w-[13%] mr-2 sm:hidden flex"
        >
          <img
            className="mr-2 w-[28px] h-[28px]
            object-contain"
            src={toggle ? Close : Menu}
            alt="Menu"
            onClick={() => setToggle(!toggle)}
          />
        </div>

        <div
          className={`${toggle ? "flex" : "hidden"}
         p-6 bg-white absolute top-20 right-0
         mx-4 my-2 min-w-[140px]  sidebar z-20 shadow-2xl`}
        > 
          
          <ul className="list-none flex flex-col justify-end items-center flex-1">
            {NavLinks.map((link) => (
              <li
                key={link.id}
                className="text-[16px] mx-3 my-1 hover:cursor-pointer hover:text-slate-400"
                onClick={()=>{if(link.id=="tienda"){
                  navigate("/tienda")
                }}}
              >
                {link.title}
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </section>
  );
}

export default NavBarComponent;
