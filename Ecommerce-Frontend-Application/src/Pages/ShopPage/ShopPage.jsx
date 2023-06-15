import React from "react";
import { NavBarComponent, Searcher, Footer } from "../../Components";
import { ShopPageBody, ShopPageHero, Categories } from "../ShopPage/ShopPageComponents";

function ShopPage() {
  return (
    <div>
      <div className="sm:flex justify-center">
        <NavBarComponent />
      </div>
      <div className="sm:flex sm:h-auto hidden justify-center flex-col sm:mx-[10rem]">
        <ShopPageHero />
      </div>
      <div className="sm:h-auto justify-center sm:mx-[10rem]">
        <Searcher />
      </div>
      <div className="sm:h-auto justify-center sm:mx-[10rem] sm:flex flex-row">
        <div className="sm:w-[40%] hidden sm:flex">
          <Categories/>
        </div>
        <div className="sm:flex sm:h-auto sm:w-[60%] ">
          <ShopPageBody />
        </div>
      </div>

      <footer className="bg-smoothSlate sm:flex justify-center">
        <Footer />
      </footer>
    </div>
  );
}

export default ShopPage;
