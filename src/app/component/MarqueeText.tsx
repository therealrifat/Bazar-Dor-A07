import React from "react";
import MarqueeText from "react-marquee-text";
import { getProducts, IProduct } from "../page";
import Link from "next/link";
// import "MarqueeText/styles.css";

const MarqueesText = async() => {
    const productList = await getProducts()


  return (
    <MarqueeText duration={25}  direction="right" className="">
      <div className="flex gap-10">
        {productList.map( (product:IProduct)=> <div key={product.id}>
            <Link href={`/product/${product.id}`}>
            <span>{`${product.image} ${product.nameBn} ${product.today.toLocaleString('bn-BD')} টাকা/${product.unit =="kg" ? ("কেজি"):(product.unit =="litre" ? ("লিটার"): "ডজন")} ${product.change.dir ==="up" ? `▲ ${product.change.pct.toLocaleString('bn-BD')}%` : product.change.dir ==="flat" ? (""): `▼${Math.abs(product.change.pct).toLocaleString('bn-BD')}%` } `}</span>
            </Link>
        </div>)}
      </div>
    </MarqueeText>
  );
};

export default MarqueesText;
