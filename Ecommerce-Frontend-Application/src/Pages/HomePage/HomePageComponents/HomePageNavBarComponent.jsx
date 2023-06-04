import React, { useState } from "react";
import { Logo, Menu, Close } from "../../../Assets";
import { NavLinks, icons } from "../../../Constants";
import { Searcher } from "../../../Components";
function HomePageNavBarComponent() {
  const [toggleSearcher, setToggleSearcher] = useState(false);
  const [toggle, setToggle] = useState(false);
  const iconClick = (id) => {
    if (id == "lupa") {
      console.log("Lupaxd");
      setToggleSearcher(!toggleSearcher);
    }
  };
  return (
    <section>
      <nav className="w-full h-[5rem] flex flex-row sm:justify-between">
        <div className="sm:ml-[10rem] flex ">
          <img src={Logo} alt="LogoEmpresa" className=""/>
        </div>

        <ul className="list-none sm:flex hidden flex-row items-center mr-[20rem]">
          {NavLinks.map((link) => (
            <li className="text-[16px] mx-3 hover:cursor-pointer hover:text-slate-400">
              {link.title}
            </li>
          ))}
        </ul>

        <div className="flex flex-row items-center sm:mr-[255px]">
          {icons.map((icon) => (
            <img
              onClick={() => {
                iconClick(icon.id);
              }}
              className="mx-3 w-[28px] sm:w-[28px] h-[28px] hover:cursor-pointer"
              src={icon.icon}
              alt={icon.id}
            ></img>
          ))}
        </div>
        <div className="absolute right-[27rem] top-[1.5rem] ">
          {toggleSearcher ? <Searcher /> : ""}
        </div>

        <div
          className="sm:hidden flex
          justify-end items-center flex-1"
        >
          <img
            className="mr-2 w-[28px] h-[28px]
            object-contain"
            src={toggle ? Close : Menu}
            alt="Menu"
            onClick={()=>setToggle(!toggle)}
          />
        </div>

        <div
          className={`${toggle ? "flex" : "hidden"}
         p-6 bg-slate-900 absolute top-20 right-0
         mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex flex-col justify-end items-center flex-1">
            {NavLinks.map((link) => (
              <li className="text-[16px] text-white mx-3 hover:cursor-pointer hover:text-slate-400">
                {link.title}
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </section>
  );
}

export default HomePageNavBarComponent;
