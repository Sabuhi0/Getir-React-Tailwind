import {useEffect, useState} from 'react'
import categoryData from '../api/categories.json'
import Category from './ui/Category';

function Categories() {

	const [categories, setCategories] = useState([])

	useEffect(() => {
        setTimeout(() => setCategories(categoryData), 1000)
		// setCategories(categoryData)
	}, [])

	return (
		<div className="bg-white py-6">
			<div className="container mx-auto">
				<h3 className="font-semibold text-sm mb-2">Kategoriler</h3>
				<div className="grid grid-cols-10">
                    {!categories.length && 'Yükleniyor..'}
					{categories && categories.map(category => <Category key={category.id} category={category} />)}
				</div>
			</div>
		</div>
	)
}

export default Categories