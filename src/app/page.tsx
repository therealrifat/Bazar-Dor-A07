import AllProductList from "./component/allProduct";
import BannerSection from "./component/banner";
import HikePrice from "./component/hikePrice";
import LowestPrice from "./component/lowestPrice";



export interface IProduct {
  id: number
  slug: string
  nameBn: string
  category: string
  categoryNameBn: string
  categoryIcon: string
  unit: string
  image: string
  today: number
  yesterday: number
  lastWeek: number
  lastMonth: number
  change: Change
  markets: Market[]
}

export interface Change {
  dir: string
  pct: number
}

export interface Market {
  market: string
  division: string
  min: number
  max: number
}



export const getProducts =async()=>{
  const res = await fetch('https://openapi.programming-hero.com/api/bazardor/products') 
  const data = await res.json()
  return data
}

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto">
      <BannerSection />
      {/* <p>Hello bazar dor</p> */}
      <HikePrice/>
      <LowestPrice/>
      <AllProductList />
      
    </div>
  );
}
