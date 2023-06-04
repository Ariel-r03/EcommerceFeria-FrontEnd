import React from "react";
import {
  HomePageNavBarComponent,
  HomePageHero,
  HomePageBenefitsInfo,
} from "./HomePageComponents/index";
function HomePage() {
  return (
    <div className=" bg-black">
      <div className="bg-white">
        <HomePageNavBarComponent />
      </div>
      <div className="sm:px-[9.85rem]"><HomePageHero /></div>
      <div className="sm:px-[9.85rem]"><HomePageBenefitsInfo /></div>
      
     
    </div>
  );
}

export default HomePage;
