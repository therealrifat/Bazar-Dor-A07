import React from "react";
import { getProducts, IProduct } from "../page";
import ProductCard from "./productCard";

const HikePrice = async () => {
  const allProduct = await getProducts();
  const hikePriceList = allProduct
    .filter((hike: IProduct) => hike.change.dir === "up")
    .sort((a: IProduct, b: IProduct) => b.change.pct - a.change.pct);

  return (
    <div className="mt-10">
      <h2 className="text-xl font-bold mb-5">
        <span className="text-red-500">▲</span> আজ দাম বেড়েছে{" "}
      </h2>
      
        <div className="grid md:grid-cols-3 grid-cols-2 gap-3 ">
          {hikePriceList.slice(0, 6).map((product: IProduct) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

    </div>
  );
};

export default HikePrice;
