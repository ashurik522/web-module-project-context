import React from 'react';
import { useContext } from 'react';
import { ProductContext } from '../Contexts/ProductContext';

// Components
import Product from './Product';

const Products = () => {
		const { products, addItem } = useContext(ProductContext)
	return (
		<div className="products-container">
			{/* Maps over data creating individual product divs */}
			{products.map(product => (
				<Product
					key={product.id}
					product={product}
					addItem={addItem}
				/>
			))}
		</div>
	);
};

export default Products;
