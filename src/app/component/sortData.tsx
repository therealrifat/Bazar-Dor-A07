"use client"
import React, { useState } from "react";
import { IProduct } from "../page";
import ProductCard from "./productCard";

const SortData = ({data}:{data:IProduct[]}) => {

  const [sortBy, setSortBy] = useState< null | "ascending" | "descending">(null)


  const sortCategory = (data:IProduct[])=>{
    const newSortCategory = [...data]


    if(sortBy ==="ascending"){
      newSortCategory.sort((a,b)=>a.today- b.today)
    }else if(sortBy ==="descending"){
      newSortCategory.sort((a,b)=>b.today- a.today)
    }

    return newSortCategory




  }
  const sortCategoryData = sortCategory(data)


  return (
    <div>
      <div className="flex justify-end items-center gap-2 my-10 w-7xl bg-white py-6 px-10 rounded-2xl">
        <span>সাজান</span>
        <select
          defaultValue="Pick a Framework"
          onChange={(e)=> setSortBy(e.target.value as  "ascending" | "descending" )}
          className=" select select-success w-35 "
        >
          <option value={"default"}>ডিফল্ট </option>
          <option value={"ascending"}>কম থেকে বেশি</option>
          <option value={"descending"}>বেশি থেকে কম</option>
        </select>
      </div>

      <div className=" space-y-5">
        <p>মোট {data.length.toLocaleString("bn-BD")} টি পণ্য দেখানো হচ্ছে</p>
        <div className="grid md:grid-cols-3 grid-cols-2 gap-3 ">
          {sortCategoryData.map((product: IProduct) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SortData;
