import React from "react";
import MarqueeText from "react-marquee-text";
import { getProducts, IProduct } from "../page";
// import "MarqueeText/styles.css";

const MarqueesText = async() => {
    const productList = await getProducts()
    console.log(productList)

  return (
    <MarqueeText duration={25}  direction="right" className="">
      <div className="flex gap-10">
        {productList.map( (product:IProduct)=> <div key={product.id}>
            <span>{`${product.image} ${product.nameBn} ${product.today} টাকা/${product.unit =="kg" ? ("কেজি"):(product.unit =="litre" ? ("লিটার"): "ডজন")} ${product.change.dir ==="up" ? `▲ ${product.change.pct}%` : product.change.dir ==="flat" ? (" "): `▼${Math.abs(product.change.pct)}%` } `}</span>
        </div>)}
      </div>
    </MarqueeText>
  );
};

export default MarqueesText;
