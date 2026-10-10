
import SortData from "@/app/component/sortData";



const CategoryPage = async ({
  params,
}: {
  params: Promise<{ Id: string }>;
}) => {
  const { Id } = await params;
  const res = await fetch(
    `https://openapi.programming-hero.com/api/bazardor/products?category=${Id}`,
  );
  const data = await res.json();

  const category = data[0];



  return (
    <div className="max-w-7xl mx-auto flex flex-col">
      {/* first category heading  */}
      <div className="flex gap-5 bg-white w-7xl p-4 items-center mt-10 rounded-2xl">
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

      {/* <div className="flex justify-end items-center gap-2 my-10 w-7xl bg-white py-6 px-10 rounded-2xl">
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
            <p>
                মোট {data.length.toLocaleString("bn-BD")} টি পণ্য দেখানো হচ্ছে
            </p>
            <div className='grid md:grid-cols-3 grid-cols-2 gap-3 '>
                {data.map((product: IProduct) => <ProductCard key={product.id} product={product}/>)}
            </div>
        </div> */}

     <SortData data={data}/>


    </div>
  );
};

export default CategoryPage;
