import React from "react";
import { IProduct } from "../page";
import Link from "next/link";

const ProductCard = ({ product }: { product: IProduct }) => {
  
  return (
    <Link href={`product/${product.id}`}>
    <div className="flex flex-col gap-2 bg-white border border-green-300 p-5 rounded-2xl">
      <div className="flex gap-2">
        <span className="p-4 bg-[#f0f5f0] rounded-2xl text-2xl">
          {product.image}
        </span>
        <div>
          <h4 className="text-xl font-bold text-green-900">{product.nameBn}</h4>
          <p>
            {product.unit == "kg"
              ? "প্রতি কেজি"
              : product.unit === "litre"
                ? "প্রতি লিটার"
                : " ডজন "}
          </p>
        </div>
      </div>
      <div>
        <p>আজকের দাম</p>
        <div className="flex justify-between">
          <p className="text-2xl font-bold">{product.today.toLocaleString('bn-BD')}<span className="text-xl"> টাকা</span></p>
          {/* <span className="px-3 py-1 bg-[#f0f5f0] rounded-xl flex items-center text-green-900">{`${product.change.dir ==="up" ? `▲ ${product.change.pct}%` : product.change.dir ==="flat" ? (""): (` ▼ ${  Math.abs(product.change.pct)}%`) }`} </span> */}
          <div className="px-3 py-1 bg-[#f0f5f0] rounded-xl flex items-center text-green-900">
            {
              product.change.dir === "up" ? (<span className="text-red-600">▲ {`${product.change.pct.toLocaleString('bn-BD')}%`}</span>) : (product.change.dir === "down" ? (<span className="text-green-600">▼ {`${Math.abs(product.change.pct).toLocaleString('bn-BD')}%`}</span>): (product.change.dir === "flat" && (<span className=" text-gray-600">—{`${product.change.pct.toLocaleString('bn-BD')}%`}</span>)) )
              
            }
          </div>
        </div>
      </div>
    </div>
    
    </Link>
  );
};

export default ProductCard;
