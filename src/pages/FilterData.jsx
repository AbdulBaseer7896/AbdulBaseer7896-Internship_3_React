import React from 'react'
import { useSelector } from 'react-redux'
import Productcard from '../components/Productcard'

const FilterData = () => {
    const filterProducts = useSelector(state => state.product.filteredData);

    if (!filterProducts || filterProducts.length === 0) {
        return <p>No products available</p>;
    }

    return (
        <div className='mx-auto py-12 px-4 md:px-16 lg:px-24'>
            <h2 className='text-2xl font-bold mb-6 text-center'>Shop</h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 cursor-pointer'>
                {filterProducts.map(product => (
                    <Productcard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};



export default FilterData
