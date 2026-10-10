import { notFound } from "next/navigation";
import React from "react";
export interface IFProduct {
  id: number;
  slug: string;
  nameBn: string;
  category: string;
  categoryNameBn: string;
  categoryIcon: string;
  unit: string;
  image: string;
  today: number;
  yesterday: number;
  lastWeek: number;
  lastMonth: number;
  change: Change;
  markets: Market[];
}

export interface Change {
  dir: string;
  pct: number;
}

export interface Market {
  market: string;
  division: string;
  min: number;
  max: number;
}

const ProductDetails = async ({
  params,
}: {
  params: Promise<{ Id: string }>;
}) => {
  const { Id } = await params;
  const res = await fetch(
    `https://openapi.programming-hero.com/api/bazardor/products/${Id}`,{cache:"no-store"}
  );
  const productData: IFProduct = await res.json();
if(!productData || !productData?.markets){
    notFound()
   }
  const maxNumberArry = productData.markets.map((p)=> p.max)
   
  const maxNum = Math.max(...maxNumberArry)
  const minNumberArry = productData.markets.map((p)=> p.min)
  const minNum = Math.min(...minNumberArry)


  return (
    <div className="max-w-7xl mx-auto my-14">
      <div className="flex  gap-10 justify-between bg-white p-10 rounded-2xl border border-green-400">
        <div className="flex gap-5 items-center">
          <span className="text-5xl bg-[#f0f5f0] py-6 px-5 rounded-2xl items-center">
            {productData.image}
          </span>
          <div className=" space-y-1">
            <h2 className="text-4xl font-bold">{productData.nameBn}</h2>
            <p>
              প্রতি{" "}
              <span>
                {productData.unit === "kg"
                  ? "কেজি"
                  : productData.unit === "litre"
                    ? "লিটার"
                    : productData.unit === "dozen"
                      ? "ডজন"
                      : productData.unit === "piece" && "পিছ"}
              </span>{" "}
              ㆍ <span>{productData.categoryNameBn}</span>
            </p>
            <h4>
              গতকালের তুলনায় আজ দাম
              <span className="font-bold">
                {" "}
                {productData.change.dir === "up"
                  ? "বেড়েছে"
                  : productData.change.dir === "down"
                    ? "কমেছে"
                    : "সমান"}
              </span>
              ㆍ
              <span>{Math.abs(productData.today - productData.yesterday)}</span>{" "}
              টাকা
            </h4>
          </div>
        </div>
        <div className=" flex flex-col items-center bg-[#f0f5f0] p-5 rounded-lg">
          <h4>আজকের দাম</h4>
          <h3 className="text-3xl font-extrabold">
            {productData.today.toLocaleString("bn-BD")}
          </h3>
          <span>
            টাকা/
            {productData.unit === "kg"
              ? "কেজি"
              : productData.unit === "litre"
                ? "লিটার"
                : productData.unit === "dozen"
                  ? "ডজন"
                  : productData.unit === "piece" && "পিছ"}
          </span>
          <span>
            {productData.change.dir === "up" ? (
              <span className="text-red-600">
                ▲ {`${productData.change.pct.toLocaleString("bn-BD")}%`}
              </span>
            ) : productData.change.dir === "down" ? (
              <span className="text-green-600">
                ▼{" "}
                {`${Math.abs(productData.change.pct).toLocaleString("bn-BD")}%`}
              </span>
            ) : (
              productData.change.dir === "flat" && (
                <span className=" text-gray-600">
                  —{`${productData.change.pct.toLocaleString("bn-BD")}%`}
                </span>
              )
            )}
          </span>
        </div>
      </div>

      {/* দামের সারসংক্ষেপ */}
      <div className="mt-10 bg-white py-8 px-5 rounded-2xl border border-green-400">
        <h4 className="text-xl font-bold  mb-5">দামের সারসংক্ষেপ</h4>

        {/* low high average table 3 card */}

        <div className="grid grid-cols-3  gap-5">
          <div className="flex flex-col bg-white p-8 border border-green-300 rounded-2xl">
            <span className="text-lg">সর্বনিম্ন দাম</span>
            <span className="text-3xl text-green-600 font-bold">
              {minNum.toLocaleString('bn-BD')} <span className="text-lg">টাকা</span>
            </span>
            <span>সবচেয়ে কম দামের বাজার</span>
          </div>
          <div className="flex flex-col bg-white p-8 border border-green-300 rounded-2xl">
            <span className="text-lg">সর্বাধিক দাম</span>
            <span className="text-3xl text-red-500 font-bold">
              {maxNum.toLocaleString('bn-BD')} <span className="text-lg">টাকা</span>
            </span>
            <span>সবচেয়ে বেশি দামের বাজার</span>
          </div>
          <div className="flex flex-col bg-white p-8 border border-green-300 rounded-2xl">
            <span className="text-lg">গড় দাম</span>
            <span className="text-3xl text-green-600 font-bold">
              {((maxNum + minNum)/2).toLocaleString('bn-BD')} <span className="text-lg">টাকা</span>
            </span>
            <span>
              প্রতি <span>কেজি</span>-এর হিসাবে
            </span>
          </div>
        </div>

        {/* বাজারভিত্তিক আজকের দাম */}

        <div>
          <h4 className="text-xl font-bold  my-5">বাজারভিত্তিক আজকের দাম</h4>
          {/* table of bazar wise */}
          <div className=" border border-green-300 rounded-2xl p-5">
            <div className="grid grid-cols-5 ">
              <span className="text-start text-green-800 font-semibold">বাজার</span>
              <span className="text-center text-green-800 font-semibold">বিভাগ</span>
              <span className="text-center text-green-800 font-semibold">সর্বনিম্ন</span>
              <span className="text-center text-green-800 font-semibold">সর্বাধিক</span>
              <span className="text-end text-green-800 font-semibold">গড়</span>
            </div>
            {productData.markets.map((item, ind: number) => (
              <div className="grid grid-cols-5 border-b last:border-b-0  text-md odd:bg-green-50 " key={ind}>
                
                <span className="py-1 font-semibold">{item.market}</span>
                <span className="text-center py-1">{item.division}</span>
                <span className="text-center py-1">{(item.min).toLocaleString('bn-BD')}</span>
                <span className="text-center py-1">{(item.max).toLocaleString('bn-BD')}</span>
                <span className="text-end py-1">{((item.max + item.min)/2).toLocaleString('bn-BD')}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
