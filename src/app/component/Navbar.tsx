import Image from "next/image";
import logo from "../../../public/logo-icon.png";
import MarqueesText from "./MarqueeText";

export interface ICategoryList {
  id: string
  slug: string
  nameBn: string
  icon: string
}


export const categoryList = async () => {
  const res = await fetch(
    "https://api.abcz.workers.dev/api/bazardor/categories/");
  const data = await res.json();
  return data

};

const Navbar = async () => {
  const today = new Date().toLocaleDateString("bn-bd", {
    dateStyle: "full",
  });

  const navList = await categoryList()



  return (
    <nav className=" space-y-3 bg-[#ffffff]">
      <div className="md:px-20 px-10">
        <div className=" flex items-center md:gap-10 py-5 justify-between ">
          <div className="flex gap-2 items-center">
            <Image
              src={logo}
              width={60}
              height={30}
              alt="logo"
              className="bg-green-700 p-4 rounded-lg hidden md:inline"
            />
            <div>
              <h4 className=" text-2xl font-extrabold">বাজার দর</h4>

              <p>{today}</p>
            </div>
          </div>

          <div className="flex gap-5 items-center">
            <h4 className="font-bold">সাইন ইন </h4>
            <h4 className="bg-green-700 py-2 px-4 rounded-lg font-bold text-white">
              সাইন আপ
            </h4>
          </div>
        </div>

        {/* category part */}


        <div className="flex gap-1 md:gap-3 md:justify-start justify-center"  >
          {navList.map((p:ICategoryList )=><div key={p.id} className="flex gap-1">
            <span>{p.icon}</span>
            <p>{p.nameBn}</p>
          </div>)}
        </div>
      </div>
       <div className="border border-gray-300 py-2">
         <MarqueesText/>
       </div>
    </nav>
  );
};

export default Navbar;
