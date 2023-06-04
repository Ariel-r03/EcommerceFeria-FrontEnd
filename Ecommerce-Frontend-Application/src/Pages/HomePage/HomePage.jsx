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
      <div className="sm:flex justify-center"><HomePageHero /></div>
      <div className="sm:flex justify-center"><HomePageBenefitsInfo /></div>
      
     
    </div>
  );
}

export default HomePage;
