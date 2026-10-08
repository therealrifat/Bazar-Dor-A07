import React from 'react';
import { getProducts, IProduct } from '../page';
import ProductCard from './productCard';

const LowestPrice = async() => {
     const allProduct = await getProducts()
        const lowestPriceList = allProduct.filter((hike:IProduct) => hike.change.dir === "down").sort((a:IProduct,b:IProduct)=> a.change.pct - b.change.pct)
        console.log(lowestPriceList)
    
    return (
        <div className='mt-10'>
            <h2 className='text-xl font-bold mb-5'> ▼ আজ দাম কমেছে </h2>
            <div className='grid grid-cols-3 gap-3 '>
                {lowestPriceList.slice(0,6).map((product: IProduct) => <ProductCard key={product.id} product={product}/>)}
            </div>
        </div>
    );
};

export default LowestPrice;