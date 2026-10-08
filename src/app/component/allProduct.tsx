import React from 'react';
import { getProducts, IProduct } from '../page';
import ProductCard from './productCard';

const AllProductList = async() => {
    const allProduct = await getProducts()
    // console.log(allProduct)

    return (
        <div>
            <h2 id="সব-পণ্য" className='text-xl font-bold my-5'>সব পণ্য</h2>
            <p className='my-3 text-gray-500'>মোট <span>{allProduct.length}</span> টি পণ্য দেখানো হচ্ছে</p>
            <div className='grid md:grid-cols-3 grid-cols-2 gap-3'>
                {allProduct.map((product:IProduct)=> <ProductCard key={product.id} product={product}/>)}
            </div>
            
        </div>
    );
};

export default AllProductList;