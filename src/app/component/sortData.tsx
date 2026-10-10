import React from "react";
import { IProduct } from "../page";
import ProductCard from "./productCard";

const SortData = ({data}:{data:IProduct[]}) => {

  return (
    <div>
      <div className="flex justify-end items-center gap-2 my-10 w-7xl bg-white py-6 px-10 rounded-2xl">
        <span>সাজান</span>
        <select
          defaultValue="Pick a Framework"
          className=" select select-success w-35 "
        >
          <option disabled={true}>ডিফল্ট </option>
          <option value={"ascending"}>কম থেকে বেশি</option>
          <option value={"descending"}>বেশি থেকে কম</option>
        </select>
      </div>

      <div className=" space-y-5">
        <p>মোট {data.length.toLocaleString("bn-BD")} টি পণ্য দেখানো হচ্ছে</p>
        <div className="grid md:grid-cols-3 grid-cols-2 gap-3 ">
          {data.map((product: IProduct) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SortData;
