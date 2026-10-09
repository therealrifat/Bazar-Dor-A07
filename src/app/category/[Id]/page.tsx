import React from 'react';

const CategoryPage = async({params}:{params: Promise<{ Id: string }>}) => {
    const {Id} = await params 
    const res = await fetch(`https://api.abcz.workers.dev/api/bazardor/products?category=${Id}`)
    const data = await res.json()

    console.log(data)


    return (
        <div className='max-w-7xl mx-auto'>
            <div>

            </div>
        </div>
    );
};

export default CategoryPage;