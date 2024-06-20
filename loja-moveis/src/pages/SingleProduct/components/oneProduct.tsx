import React from "react";
import { NavLink } from "react-router-dom";

const OneProduct = () => {
  return (
    <main>
      <div className="flex">
        <div>Imagens</div>
        <div>
          {" "}
          {/*Informações*/}
          <h1>Product Name</h1>
          <p>Product Price</p>
          {/*avaliações */}
          <p>Details</p>
          {/*Tamanho */}
          {/*Cor */}
          {/*Add cart */}
          {/*Tags*/}
        </div>
      </div>
      <div>
        <div className="flex">
          <p>Description</p>
          <p>Additional Information</p>
        </div>
        <p>About</p>
        <div>Imagens</div>
      </div>
      <div>
        <h1>Related Products</h1>
        {/*Produtos relacionados*/}
        <div className="text-center mt-8">
          <NavLink to={"/shop"}>
            <button className="font-semibold text-primary border border-primary py-2 px-16 hover:bg-primary hover:text-white transition-all">
              Show More
            </button>
          </NavLink>
        </div>
      </div>
    </main>
  );
};
export default OneProduct;
