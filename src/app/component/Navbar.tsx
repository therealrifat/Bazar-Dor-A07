import Image from "next/image";
import logo from "../../../public/logo-icon.png";



// import CurrentDate from "./currentDate";
// import { Suspense } from "react";



const Navbar = async() => {
    const today = new Date().toLocaleDateString("bn-bd",{
        dateStyle: "full"
    })

    const res = await fetch('https://api.api-store.workers.dev/api/bazardor/categories/', {cache: "no-cache"})
    const data = await res.json()


    console.log(data)
  return (
    <nav className="  max-w-10/12 mx-auto  ">
      <div>
        <div className=" flex items-center gap-10 py-5 justify-between ">
          <div className="flex gap-2 items-center">
            <Image
              src={logo}
              width={60}
              height={30}
              alt="logo"
              className="bg-green-700 p-4 rounded-lg   "
            />
            <div>
              <h4 className=" font-extrabold">বাজার দর</h4>
              
                <p>
                  {today}
                </p>

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

        <div>
            


        </div>
      </div>
    </nav>
  );
};

export default Navbar;
