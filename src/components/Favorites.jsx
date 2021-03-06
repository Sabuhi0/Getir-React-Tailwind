import { useState,useEffect } from 'react';
import Products from '../api/products.json';
import ProductItem from './ui/ProductItem';

const Favorites = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        setProducts(Products);
    },[])

    return (
        <div className='md:container mx-auto'>
            <h3 className="font-semibold text-sm pt-8 px-6 mb-3">Favoriler</h3>
            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 2xl:grid-cols-9 gap-0.1 rounded-lg overflow-hidden">
                {products.length && products.map((product, index) => <ProductItem key={index} product={product} />)}
            </div>
        </div>
    )
}

export default Favorites;
