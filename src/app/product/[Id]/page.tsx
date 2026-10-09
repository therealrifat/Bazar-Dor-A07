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
    `https://api.abcz.workers.dev/api/bazardor/products/${Id}`,
  );
  const productData: IFProduct = await res.json();
  console.log(productData);

  return (
    <div className="max-w-7xl mx-auto my-14">
      <div className="flex  gap-10 justify-between bg-white p-10">
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
              গতকালের তুলনায় আজ দাম{" "}
              <span>
                {" "}
                {productData.change.dir === "up"
                  ? "বেড়েছে"
                  : productData.change.dir === "down"
                    ? "কমেছে"
                    : "সমান"}
              </span>{" "}
              ㆍ{" "}
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
    </div>
  );
};

export default ProductDetails;
