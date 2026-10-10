


import Image from "next/image";
import logo from "../../../public/logo-icon.png";
import MarqueesText from "./MarqueeText";
import Link from "next/link";
import CurrentDate from "./currentDate";
import NavCategory from "./navCategory";
import AuthBtn from "./authBtn";


export interface ICategoryList {
  id: string
  slug: string
  nameBn: string
  icon: string
}


export const categoryList = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/bazardor/categories/");
  const data = await res.json();
  return data

};



const Navbar = async () => {



  const navList = await categoryList()




  return (
    <nav className=" space-y-3 bg-[#ffffff]">
      <div className="md:px-55 px-10">
        <div className=" flex items-center md:gap-10 py-5 justify-between ">
          <div className="flex gap-2 items-center">
            <Link href="/">
            <Image
              src={logo}
              width={60}
              height={30}
              alt="logo"
              className="bg-green-700 p-4 rounded-lg hidden md:inline"
            /></Link>
            <div>
              <Link href='/'><h4 className=" text-2xl font-extrabold">বাজার দর</h4></Link>

              <p>{<CurrentDate/>}</p>
            </div>
          </div>

          <AuthBtn/>
        </div>

        {/* category part */}
        <NavCategory navList={navList}/>


        
      </div>
       <div className="border border-gray-300 py-2">
         <MarqueesText/>
       </div>
    </nav>
  );
};

export default Navbar;
