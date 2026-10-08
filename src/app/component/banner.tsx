import Link from "next/link";
import bannerImage from "../../../public/bazar-hero.png";
import CurrentDate from "./currentDate";
import Image from "next/image";

const BannerSection = () => {
  return (
    <div className="bg-white flex md:flex-row flex-col items-center md:gap-20 gap-10 p-5 mt-3 space-y-2 rounded-2xl border border-green-300">
      <div className=" space-y-4 md:text-left text-center" >
        <div className="flex justify-center text-green-600 font-bold bg-green-100 w-58 h-7 rounded-2xl items-center">
          <CurrentDate />
        </div>
        <h1 className="md:text-4xl text-3xl font-bold">আজকের বাজারের দাম এক নজরে</h1>
        <p className="text-gray-800 md:w-2xl ">
          চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক
          বিস্তারিত, গড়, সর্বনিম্ন-সর্বাধিক এবং দামের পরিবর্তন এক জায়গায়।
        </p>
        <Link href={"#সব-পণ্য"}><button id="" className="bg-green-700 py-2 px-4 rounded-lg font-bold text-white cursor-pointer">
          সব পন্য দেখুন{" "}
        </button></Link>
      </div>
      <Image src={bannerImage} width={300} height="180" alt="banner hero" className="" />
    </div>
  );
};

export default BannerSection;
