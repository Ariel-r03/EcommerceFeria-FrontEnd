import React from "react";
import { NavBarComponent, Footer } from "../../Components";
import { ProductCard } from "./ProductoViewComponents";
function ProductViewPage() {
  return (
    <div>
      <div>
        <NavBarComponent />
      </div>
      <div className="">
        <ProductCard/>
      </div>
      <div className="bg-smoothSlate sm:flex justify-center mt-auto">
        <Footer />
      </div>
    </div>
  );
}

export default ProductViewPage;
