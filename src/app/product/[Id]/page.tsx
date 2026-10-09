import React from 'react';
export interface IFProduct {
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


const ProductDetails = async({params}:{params:Promise<{Id:string}>}) => {
    const {Id} = await params
    const res = await fetch(`https://api.abcz.workers.dev/api/bazardor/products/${Id}`)
    const productData:IFProduct = await res.json()
    console.log(productData)
    
    return (
        <div className='max-w-7xl mx-auto'>
            <p>hello details page{productData.nameBn} </p>
        </div>
    );
};

export default ProductDetails;