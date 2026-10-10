
import SortData from "@/app/component/sortData";
import { notFound } from "next/navigation";




const CategoryPage = async ({
  params,
}: {
  params: Promise<{ Id: string }>;
}) => {
  const { Id } = await params;

    const res = await fetch(`https://openapi.programming-hero.com/api/bazardor/products?category=${Id}`, {cache:"no-store"});
    const data = await res.json();

  const category = data[0];

    if(!data || !category?.categoryIcon){
      notFound()
    }




  return (
    <div className="max-w-7xl mx-auto flex flex-col">
      {/* first category heading  */}
      <div className="flex gap-5 bg-white md:w-7xl p-4 items-center mt-10 rounded-2xl">
        <div className="text-5xl bg-[#f0f5f0] py-6 px-5 rounded-2xl items-center">
          <h2>{category.categoryIcon}</h2>
        </div>
        <div className="">
          <h2 className="text-4xl font-semibold">{category.categoryNameBn}</h2>
          <p>
            {data.length.toLocaleString("bn-BD")} টি পণ্যের আজকের দাম ও পরিবর্তন
          </p>
        </div>
      </div>

      
    

     <SortData data={data}/>



    </div>
  );
};

export default CategoryPage;
