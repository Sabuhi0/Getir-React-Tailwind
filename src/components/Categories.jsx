import {useEffect, useState} from 'react';
import categoryData from '../api/categories.json';
import Category from './ui/Category';

const Categories = () => {

	const [categories, setCategories] = useState([])

	useEffect(() => {
        setTimeout(() => setCategories(categoryData), 1000)
		// setCategories(categoryData)
	}, [])

	return (
		<div className="bg-white py-6 shadow-getir">
			<div className="md:container mx-auto">
				<h3 className="font-semibold text-sm mb-2 px-6 md:px-0">Kategoriler</h3>
				<div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 2xl:grid-cols-12">
                    {!categories.length && 'Yükleniyor..'}
					{categories && categories.map(category => <Category key={category.id} category={category} />)}
				</div>
			</div>
		</div>
	)
}

export default Categories;