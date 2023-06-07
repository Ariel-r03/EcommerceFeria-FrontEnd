import React from "react";
import {
  HomePageNavBarComponent,
  HomePageHero,
  HomePageBenefitsInfo,
  HomePageBestProducts,
} from "./HomePageComponents/index";

import { Testimonials, SubscriptionForm, Footer } from "../../Components";
function HomePage() {
  return (
    <div className=" bg-black">
      <div className="bg-white sm:flex justify-center">
        <HomePageNavBarComponent />
      </div>
      <div className="sm:flex justify-center">
        <HomePageHero />
      </div>
      <div className="sm:flex justify-center">
        <HomePageBenefitsInfo />
      </div>
      <div className="sm:flex justify-center">
        <HomePageBestProducts />
      </div>
      <div className="sm:flex justify-center">
        <Testimonials />
      </div>
      <div className="sm:flex justify-center">
        <SubscriptionForm />
      </div>

      <div className="bg-smoothSlate sm:flex justify-center">
        <Footer />
      </div>
    </div>
  );
}

export default HomePage;
